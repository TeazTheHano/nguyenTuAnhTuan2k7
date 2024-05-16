import { View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import colorStyle, { componentStyle, Gradient1, Gradient2 } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import { Nunito14Reg, Nunito16Bold, Signika20Bold, Signika24Bold } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'
import { femaleIcon, leftArrow, maleIcon, rightArrow } from '../assets/svgXml'

export default function OnBoarding() {
  const navigation = useNavigation()

  const [name, setName] = useState<string>('')
  const [sex, setSex] = useState<0 | 1 | 2>(0)
  const [age, setAge] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [currentStep, setCurrentStep] = useState<number>(2)

  const formFnc = () => {
    const ITEM_WIDTH = vw(20); // replace with your item width
    const ITEM_SPACING = vw(2);

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
                <Gradient1 style={[styles.flexColCenter, styles.gap2vw, styles.w30vw, styles.h30vw, styles.borderRadius16, styles.padding2vw, styles.marginTop4vw, componentStyle.outerGlow]}>
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
                <Gradient1 style={[styles.flexColCenter, styles.gap2vw, styles.w30vw, styles.h30vw, styles.borderRadius16, styles.padding2vw, styles.marginTop4vw, componentStyle.outerGlow]}>
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
          <>
            <Signika24Bold style={{ color: colorStyle.main3 }}>Bạn bao nhiêu tuổi</Signika24Bold>
            <Nunito14Reg style={{ color: colorStyle.white }}>Chia sẻ với chúng tôi độ tuổi của bạn để chúng tôi có thể đưa ra những bài tập luyện phù hợp với bạn</Nunito14Reg>
            <FlatList
              horizontal={true}
              snapToAlignment='center'
              snapToInterval={ITEM_WIDTH + ITEM_SPACING}
              decelerationRate="fast"
              data={[...Array(100).keys()]}
              keyExtractor={(item) => item.toString()}
              onScroll={({ nativeEvent }) => {
                const index = Math.round(nativeEvent.contentOffset.x/ITEM_WIDTH*2);
                setAge(index);
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setAge(item)}
                  style={[styles.alignSelfCenter]}>
                  {age == item ?
                    <Gradient1 style={[styles.flexColCenter, styles.gap2vw, styles.w20vw, styles.h20vw, styles.borderRadius10, styles.padding2vw, styles.marginTop4vw, componentStyle.outerGlow]}>
                      <Signika20Bold style={{ color: colorStyle.white }}>{item}</Signika20Bold>
                    </Gradient1>
                    :
                    <View style={[styles.flexColCenter, styles.gap2vw, styles.w20vw, styles.h20vw, styles.borderRadius10, styles.padding2vw, styles.marginTop4vw, { backgroundColor: 'rgba(239, 239, 239, 0.2)' }]}>
                      <Signika20Bold style={{ color: colorStyle.grey }}>{item}</Signika20Bold>
                    </View>
                  }
                </TouchableOpacity>
              )}
            />
          </>
        )
        break;
    }
  }

  return (
    <Gradient2 style={[styles.flex1]}>
      <SafeAreaView style={[styles.flex1]}>
        <View style={[styles.flex9, styles.flexColCenter, styles.w80, styles.alignSelfCenter, styles.alignItemsStart, styles.gap4vw]}>
          {formFnc()}
        </View>

        {/* nav button */}
        <View style={[styles.flex1, styles.flexRowBetweenCenter, styles.w80, styles.alignSelfCenter]}>
          <TouchableOpacity
            onPress={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 0}
            style={[styles.flexRowCenter, { backgroundColor: currentStep > 0 ? colorStyle.main3 : colorStyle.darkGrey, borderRadius: vw(3.5), paddingHorizontal: vw(5), paddingVertical: vw(2.5) }]}>
            {leftArrow(vw(5), vw(5), currentStep > 0 ? colorStyle.white : colorStyle.grey)}
            <Nunito16Bold style={{ color: currentStep > 0 ? colorStyle.white : colorStyle.grey }}>Tiếp theo</Nunito16Bold>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentStep(currentStep + 1)}
            disabled={currentStep === 5}
            style={[styles.flexRowCenter, { backgroundColor: currentStep < 5 ? colorStyle.main3 : colorStyle.darkGrey, borderRadius: vw(3.5), paddingHorizontal: vw(5), paddingVertical: vw(2.5) }]}>
            <Nunito16Bold style={{ color: currentStep < 5 ? colorStyle.white : colorStyle.grey }}>Tiếp theo</Nunito16Bold>
            {rightArrow(vw(5), vw(5), currentStep < 5 ? colorStyle.white : colorStyle.grey)}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Gradient2>
  )
}