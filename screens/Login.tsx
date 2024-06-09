import { View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import colorStyle, { componentStyle, Gradient1, Gradient2, OpacityGradientView } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import { Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito16Reg, Nunito18Bold, Nunito18Reg, Nunito20Bold, Nunito22Bold, Signika20Bold, Signika24Bold } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'
import { femaleIcon, leftArrow, maleIcon, rightArrow } from '../assets/svgXml'
import { SvgXml } from 'react-native-svg'
import storage, { getAllExerciseCourse, getAllQuiz, loadDefaultQuiz, loadDefautExerciseCourse } from '../data/storageFunc'
import { statusBarTransparency } from '../assets/component'

export default function Login({ route, navigation }: any) {
  const state = route.params?.state

  const [isExist, setIsExist] = useState<boolean | null>(null)

  const [name, setName] = useState<string>('')
  const [sex, setSex] = useState<0 | 1 | 2>(0)
  const [age, setAge] = useState<number>(2)
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [currentStep, setCurrentStep] = useState<number>(0)

  useEffect(() => {
    if (state) {
      setCurrentStep(0)
      setName('')
      setSex(0)
      setAge(2)
      setHeight(0)
      setWeight(0)
    } else {
      console.log('state', state);
    }
  }, [state])

  useEffect(() => {
    storage.load({
      key: 'userInfo',
      autoSync: true,
      syncInBackground: true,
    }).then(res => {
      res.name ? navigation.navigate('Tab') : setIsExist(false)
    })
      .catch(err => {
        console.log(err)
        setIsExist(false)
      })
    getAllExerciseCourse().then(res => {
      if (res.length == 0) {
        console.log('no data')
        loadDefautExerciseCourse()
      }
    })
    getAllQuiz().then(res => {
      if (res.length == 0) {
        console.log('no data')
        loadDefaultQuiz()
      }
    })
  }, [])

  const saveUserInfo = () => {
    async function saveUserInfo() {
      await storage.save({
        key: 'userInfo',
        data: {
          name: name,
          sex: sex,
          age: age,
          height: height,
          weight: weight,
        }
      })
    }
    saveUserInfo().then(() => {
      navigation.navigate('Tab')
    })
  }



  const formFnc = () => {
    function scrollBarPicker(data: number[] = [], ITEM_WIDTH: number, useStateTarget: number, useStateTargetFcn: Function, offset: number, title: string, description: string, unit: string) {
      return (
        <>
          <Signika24Bold style={{ color: colorStyle.main3 }}>{title}</Signika24Bold>
          <Nunito14Reg style={{ color: colorStyle.white }}>{description}</Nunito14Reg>
          <View style={[styles.alignSelfCenter, styles.marginTop4vw]}>
            <SvgXml xml={`<svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5981 25.5C17.4434 27.5 14.5566 27.5 13.4019 25.5L1.27757 4.5C0.12287 2.5 1.56624 8.04403e-07 3.87564 1.0063e-06L28.1244 3.12619e-06C30.4338 3.32808e-06 31.8771 2.5 30.7224 4.5L18.5981 25.5Z" fill="#FBFBFB"/></svg>`} />
          </View>
          <View style={[styles.h30vw]}>
            <OpacityGradientView
              style={[styles.w90vw, { transform: [{ translateX: -vw(5) }] }]}
            >
              <FlatList
                horizontal={true}
                snapToInterval={ITEM_WIDTH}
                showsHorizontalScrollIndicator={false}
                data={data}
                // getItemLayout={(data, index) => (
                //   { length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index }
                // )}
                // ref={(ref) => {
                //   if (ref) {
                //     ref.scrollToIndex({ index: useStateTarget - 2, animated: false });
                //   }
                // }}
                keyExtractor={(item) => item.toString()}
                onScroll={({ nativeEvent }) => {
                  const index = Math.round(nativeEvent.contentOffset.x / ITEM_WIDTH);
                  useStateTargetFcn(index + 2);
                }}

                renderItem={({ item }) => (
                  <View style={[styles.alignSelfCenter,]}>
                    {useStateTarget == item ?
                      <View style={[styles.flexColCenter, styles.boxsizingBorderBox, styles.textCenter, styles.h30vw, componentStyle.outerGlowL1T1White, { width: ITEM_WIDTH }]}>
                        <Signika20Bold style={{ color: 'white', fontSize: vw(10) }}>{item}</Signika20Bold>
                      </View>
                      :
                      <View style={[styles.flexColCenter, styles.boxsizingBorderBox, styles.textCenter, styles.h30vw, { width: ITEM_WIDTH, opacity: Math.abs(useStateTarget - item) == 1 ? 0.7 : Math.abs(useStateTarget - item) == 2 ? 0.2 : 0.1 }]}>
                        <Signika20Bold style={{ color: colorStyle.white, fontSize: vw(10) }}>{item}</Signika20Bold>
                      </View>
                    }
                  </View >
                )}
              />
            </OpacityGradientView>
          </View>
          <Signika24Bold style={[styles.alignSelfCenter, { color: colorStyle.white }]}>{unit}</Signika24Bold>
        </>
      )
    }

    switch (currentStep) {
      case 0:
        return (
          <>
            <Signika24Bold style={{ color: colorStyle.main3 }}>Tên của bạn</Signika24Bold>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={[styles.w100, styles.bgcolorWhite, styles.padding2vw, styles.borderRadius10]}
              placeholder='Nhập tên của bạn' />
          </>
        )
        break;
      case 1:
        return (
          <>
            <Signika24Bold style={{ color: colorStyle.main3 }}>Giới tính của bạn</Signika24Bold>
            <Nunito14Reg style={{ color: colorStyle.white }}>Chia sẻ với chúng tôi giới tính của bạn để chúng tôi có thể đưa ra những bài tập luyện phù hợp với bạn</Nunito14Reg>
            <TouchableOpacity
              onPress={() => setSex(1)}
              style={[styles.alignSelfCenter]}>
              {sex == 1 ?
                <Gradient1 style={[styles.flexColCenter, styles.gap2vw, styles.w30vw, styles.h30vw, styles.borderRadius16, styles.padding2vw, styles.marginTop4vw, componentStyle.outerGlowL1T1White]}>
                  {femaleIcon(vw(10), vw(17.5), colorStyle.white)}
                  <Signika20Bold style={{ color: colorStyle.white }}>Nữ</Signika20Bold>
                </Gradient1>
                :
                <View style={[styles.flexColCenter, styles.gap2vw, styles.w30vw, styles.h30vw, styles.borderRadius16, styles.padding2vw, styles.marginTop4vw, { backgroundColor: 'rgba(239, 239, 239, 0.2)' }]}>
                  {femaleIcon(vw(10), vw(17.5), colorStyle.grey)}
                  <Signika20Bold style={{ color: colorStyle.grey }}>Nữ</Signika20Bold>
                </View>
              }
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSex(2)}
              style={[styles.alignSelfCenter]}>
              {sex == 2 ?
                <Gradient1 style={[styles.flexColCenter, styles.gap2vw, styles.w30vw, styles.h30vw, styles.borderRadius16, styles.padding2vw, styles.marginTop4vw, componentStyle.outerGlowL1T1White]}>
                  {maleIcon(vw(15), vw(17.5), colorStyle.white)}
                  <Signika20Bold style={{ color: colorStyle.white }}>Nam</Signika20Bold>
                </Gradient1>
                :
                <View style={[styles.flexColCenter, styles.gap2vw, styles.w30vw, styles.h30vw, styles.borderRadius16, styles.padding2vw, styles.marginTop4vw, { backgroundColor: 'rgba(239, 239, 239, 0.2)' }]}>
                  {maleIcon(vw(15), vw(17.5), colorStyle.grey)}
                  <Signika20Bold style={{ color: colorStyle.grey }}>Nam</Signika20Bold>
                </View>
              }
            </TouchableOpacity>
          </>
        )
        break;
      case 2:
        return (
          scrollBarPicker([...Array(110).keys()], Math.round(vw(90 / 5)), age, setAge, 2, 'Bạn bao nhiêu tuổi', 'Chia sẻ với chúng tôi độ tuổi của bạn để chúng tôi có thể đưa ra những bài tập luyện phù hợp với bạn', '')
        )
        break;

      case 3:
        return (
          scrollBarPicker([...Array(200).keys()], Math.round(vw(90 / 5)), weight, setWeight, 40, 'Cân nặng của hiện tại của bạn là', 'Đừng lo lắng, chúng ta có thể đổi lại nó sau', 'kg')
        )
        break;

      case 4:
        return (
          scrollBarPicker([...Array(220).keys()], Math.round(vw(90 / 5)), height, setHeight, 150, 'Chiều cao của hiện tại của bạn là', 'Đừng lo lắng, chúng ta có thể đổi lại nó sau', 'cm')
        )
        break;

      case 5:
        return (
          <View style={[styles.flexColCenter, styles.gap4vw]}>
            <Signika24Bold style={{ textAlign: 'center', color: colorStyle.main3 }}>Xác nhận tạo người dùng</Signika24Bold>
            <Nunito20Bold style={{ textAlign: 'center', color: colorStyle.white }}>Chúng tôi sẽ tạo một tài khoản với các thông tin sau:</Nunito20Bold>
            <Nunito16Reg style={{ textAlign: 'center', color: colorStyle.white }}>Các thông tin có thể thay đổi sau này ở mục Cài đặt.</Nunito16Reg>
            <Nunito18Bold style={{ textAlign: 'center', color: colorStyle.white }}>Tên: {name}, {sex == 2 ? 'Nam' : sex == 1 ? 'Nữ' : 'Khác'}</Nunito18Bold>
            <Nunito18Bold style={{ textAlign: 'center', color: colorStyle.white }}>Tuổi: {age}</Nunito18Bold>
            <Nunito18Bold style={{ textAlign: 'center', color: colorStyle.white }}>Cân nặng: {weight} kg</Nunito18Bold>
            <Nunito18Bold style={{ textAlign: 'center', color: colorStyle.white }}>Chiều cao: {height} cm</Nunito18Bold>
          </View>
        )
        break;
    }
  }

  return (
    <Gradient2 style={[styles.flex1]}>
      {statusBarTransparency()}
      <SafeAreaView style={[styles.flex1]}>
        {
          isExist == null ?
            <ActivityIndicator />
            : isExist == false ?
              <View style={[styles.flex1]}>
                <View style={[styles.flex9, styles.flexColCenter, styles.w80vw, styles.alignSelfCenter, styles.alignItemsStart, styles.gap4vw]}>
                  {formFnc()}
                </View>

                {/* nav button */}
                <View style={[styles.flex1, styles.flexRowBetweenCenter, styles.w80vw, styles.alignSelfCenter]}>
                  <TouchableOpacity
                    onPress={() => {
                      setCurrentStep(currentStep - 1);
                    }}
                    disabled={currentStep === 0}
                    style={[styles.flexRowCenter, { backgroundColor: currentStep > 0 ? colorStyle.main3 : colorStyle.darkGrey, borderRadius: vw(3.5), paddingHorizontal: vw(5), paddingVertical: vw(2.5) }]}>
                    {leftArrow(vw(5), vw(5), currentStep > 0 ? colorStyle.black : colorStyle.grey)}
                    <Nunito16Bold style={{ color: currentStep > 0 ? colorStyle.black : colorStyle.grey }}>Tiếp theo</Nunito16Bold>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      currentStep < 5 ? setCurrentStep(currentStep + 1) : saveUserInfo();
                    }}
                    style={[styles.flexRowCenter, { backgroundColor: currentStep < 5 ? colorStyle.main3 : 'rgb(255, 255, 50)', borderRadius: vw(3.5), paddingHorizontal: vw(5), paddingVertical: vw(2.5) }]}>
                    <Nunito16Bold style={{ color: currentStep < 5 ? colorStyle.black : colorStyle.main1, fontSize: currentStep == 5 ? vw(5.5) : vw(4) }}>{currentStep < 5 ? 'Tiếp theo' : 'Hoàn tất'}</Nunito16Bold>
                    {currentStep < 5 ? rightArrow(vw(5), vw(5), currentStep < 5 ? colorStyle.black : colorStyle.grey) : null}
                  </TouchableOpacity>
                </View>
              </View>
              : null
        }
      </SafeAreaView>
    </Gradient2 >
  )
}