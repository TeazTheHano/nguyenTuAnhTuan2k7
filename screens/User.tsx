import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import colorStyle, { componentStyle, Gradient2 } from '../assets/componentStyleSheet'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeNameBar, marginBottomForScrollView, statusBarTransparency } from '../assets/component'
import * as Progress from 'react-native-progress';
import storage from '../data/storageFunc'
import styles, { vw } from '../assets/stylesheet'
import { Nunito14Bold, Nunito14Reg, Nunito18Bold, Nunito18Reg, Signika20Bold } from '../assets/Class'
import { SvgXml } from 'react-native-svg'
import { remainCalories, remainLifts, remainSwims, rightArrow } from '../assets/svgXml'
import data from '../data/data'

export default function User({ route, navigation }: any) {
  // const showInfoForm = route.params?.showInfoForm
  const [showInfoForm, setShowInfoForm] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)
  const [showName, setShowName] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [sex, setSex] = useState<0 | 1 | 2>(0)
  const [age, setAge] = useState<number>(2)
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      storage.load({
        key: 'userInfo',
        autoSync: true,
        syncInBackground: true,
      }).then(res => {
        setShowName(res.name)
        setName(res.name)
        setAge(res.age)
        setHeight(res.height)
        setWeight(res.weight)
        setSex(res.sex)
      }).catch(err => {
        console.log(err)
      })
      console.log(showInfoForm);
      setShowInfoForm(route.params?.showInfoForm)
    })

    return unsubscribe
  }, [showInfoForm])

  const infoForm = () => {
    let data = [name, age, height, weight]
    return (
      <View>
        <View
          style={[styles.flexColBetweenCenter, styles.gap2vw]}>
          <View style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.w90,]}>
            <View style={[styles.flexRowStartCenter, styles.gap2vw]}>
              <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4446 19.6875H20.9446M14.4444 5.6875L5.446 14.6859C4.78735 15.3446 4.26731 16.1441 4.109 17.062C3.94915 17.9888 3.89595 19.139 4.44444 19.6875C4.99294 20.236 6.14311 20.1828 7.06993 20.0229C7.98784 19.8646 8.78735 19.3446 9.446 18.6859L18.4444 9.6875M14.4444 5.6875C14.4444 5.6875 17.4444 2.6875 19.4444 4.6875C21.4444 6.6875 18.4444 9.6875 18.4444 9.6875M14.4444 5.6875L18.4444 9.6875" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
                width={vw(6)} height={vw(6)} />
              <View>
                <Nunito14Reg style={{ color: colorStyle.main3 }}>Tên</Nunito14Reg>
                <TextInput
                  style={[edit ? componentStyle.textInputEdit : componentStyle.textInput]}
                  editable={edit}
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => { setEdit(true) }}>
              {rightArrow(vw(6), vw(6), 'white')}
            </TouchableOpacity>
          </View>
          <View style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.w90,]}>
            <View style={[styles.flexRowStartCenter, styles.gap2vw]}>

              <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11C21 9.57143 23 9.57143 23 8.07792C23 6.93032 22.1222 6 21 6C20.0532 6 19.2256 6.66222 19 7.55844M21 13V13.01M6.5 21.0001H17.5C18.8807 21.0001 20 19.8808 20 18.5001C20 14.4194 14 14.5001 12 14.5001C10 14.5001 4 14.4194 4 18.5001C4 19.8808 5.11929 21.0001 6.5 21.0001ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
                width={vw(6)} height={vw(6)} />
              <View>
                <Nunito14Reg style={{ color: colorStyle.main3 }}>Tuổi</Nunito14Reg>
                <TextInput
                  style={[edit ? componentStyle.textInputEdit : componentStyle.textInput]}
                  editable={edit}
                  value={age.toString()}
                  onChangeText={(text) => setAge(parseInt(text))}
                  keyboardType='numeric'
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => { setEdit(true) }}>
              {rightArrow(vw(6), vw(6), 'white')}
            </TouchableOpacity>
          </View>
          <View style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.w90,]}>
            <View style={[styles.flexRowStartCenter, styles.gap2vw]}>

              <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 15L12 20L17 15M17 9L12 4L7 9" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
                width={vw(6)} height={vw(6)} />
              <View>
                <Nunito14Reg style={{ color: colorStyle.main3 }}>Chiều cao</Nunito14Reg>
                <TextInput
                  style={[edit ? componentStyle.textInputEdit : componentStyle.textInput]}
                  editable={edit}
                  value={height.toString()}
                  onChangeText={(text) => setHeight(parseInt(text))}
                  keyboardType='numeric'
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => { setEdit(true) }}>
              {rightArrow(vw(6), vw(6), 'white')}
            </TouchableOpacity>
          </View>
          <View style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.w90,]}>
            <View style={[styles.flexRowStartCenter, styles.gap2vw]}>

              <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 21.0001H6.5C5.11929 21.0001 4 19.8808 4 18.5001C4 14.4194 10 14.5001 12 14.5001C14 14.5001 20 14.4194 20 18.5001C20 19.8808 18.8807 21.0001 17.5 21.0001Z" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.3658 9.08576L20.2171 8.94126C19.9736 8.70446 19.6432 8.57143 19.2988 8.57143C18.5714 8.57143 18 9.10714 18 10.102C18 11.7857 20.5714 12.8571 20.5714 12.8571C20.5714 12.8571 23.1429 11.7857 23.1429 10.102C23.1429 9.10714 22.5614 8.57143 21.8441 8.57143C21.4996 8.57143 21.1693 8.70446 20.9257 8.94126L20.7771 9.08576C20.6647 9.19499 20.4781 9.19499 20.3658 9.08576Z" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
                width={vw(6)} height={vw(6)} />
              <View>
                <Nunito14Reg style={{ color: colorStyle.main3 }}>Cân nặng</Nunito14Reg>
                <TextInput
                  style={[edit ? componentStyle.textInputEdit : componentStyle.textInput]}
                  editable={edit}
                  value={weight.toString()}
                  onChangeText={(text) => setWeight(parseInt(text))}
                  keyboardType='numeric'
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => { setEdit(true) }}>
              {rightArrow(vw(6), vw(6), 'white')}
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.flexRowBetweenCenter]}>
          <TouchableOpacity
            onPress={() => {
              setEdit(false)
              setShowInfoForm(false)
            }}
            style={[styles.w40vw, styles.paddingV2vw, styles.alignSelfCenter, styles.borderRadius10, styles.marginVertical4vw, styles.border1, { borderColor: colorStyle.main3 }]}>
            <Nunito18Reg style={[styles.textCenter, { color: colorStyle.main3 }]}>Hủy</Nunito18Reg>
          </TouchableOpacity>
          {edit ?
            <TouchableOpacity
              style={[styles.w40vw, styles.paddingV2vw, styles.alignSelfCenter, styles.borderRadius10, styles.marginVertical4vw, { backgroundColor: colorStyle.main3 }]}
              onPress={() => {
                storage.save({
                  key: 'userInfo',
                  data: {
                    name: name,
                    sex: sex,
                    age: age,
                    height: height,
                    weight: weight,
                  }
                }).then(() => {
                  storage.load({
                    key: 'userInfo',
                    autoSync: true,
                    syncInBackground: true,
                  }).then(res => {
                    setShowName(res.name)

                  }).catch(err => {
                    console.log(err)
                  })
                }).catch((err: any) => {
                  console.log(err)
                })
                setShowInfoForm(false)
                setEdit(false)
              }}>
              <Signika20Bold style={[styles.textCenter]}>Lưu</Signika20Bold>
            </TouchableOpacity>
            : null}
        </View>
      </View >
    )
  }

  function aimAndRemain() {
    let aim = {
      title: 'Mục tiêu hôm nay',
      data: [
        {
          title: 'Bơi lội',
          current: 1600,
          aim: 2000,
          unit: 'm',
          done: false,
          icon: remainSwims(vw(6), vw(6)),
        },
        {
          title: 'Tiêu hao',
          current: 500,
          aim: 800,
          unit: 'calories',
          done: false,
          icon: remainCalories(vw(6), vw(6)),
        },
        {
          title: 'Bài bổ trợ',
          current: 3,
          aim: 5,
          unit: 'bài',
          done: false,
          icon: remainLifts(vw(6), vw(6))
        },
      ]
    }
    return (
      <View style={[componentStyle.outerGlowL1T1White, styles.margin1vw]}>
        <View style={[styles.w100, styles.paddingBottom2vw, styles.marginBottom4vw, { borderBottomWidth: 1, borderBottomColor: colorStyle.fillBlur }]}>
          <Signika20Bold style={[styles.w100, { color: colorStyle.main3 }]}>Mục tiêu hôm nay</Signika20Bold>
        </View>
        <Gradient2 style={[styles.padding4vw, styles.borderRadius4vw,]}>
          <View style={[styles.flexRowBetweenCenter, styles.gap2vw]}>
            {aim.data.map((item, index) => {
              return (
                <View key={index} style={[{ width: vw(25) }]}>
                  <Progress.Circle size={vw(25)} progress={item.current / item.aim} showsText={true} textStyle={{ fontFamily: 'Nunito-Bold', fontSize: vw(5), fontWeight: 'bold' }} borderWidth={vw(0.5)} thickness={vw(3)} borderColor={colorStyle.fillBlur} strokeCap='round' color={index == 0 ? '#B64545' : index == 1 ? colorStyle.main3 : '#3275C4'} style={{ borderBottomWidth: 1, borderBottomColor: colorStyle.fillBlur, paddingBottom: vw(2) }} />
                  <Nunito18Bold style={[styles.textCenter, styles.marginTop2vw, { color: colorStyle.white }]}>{item.title}</Nunito18Bold>
                  <Nunito14Bold style={[styles.textCenter, styles.flex1, { color: index == 0 ? '#B64545' : index == 1 ? colorStyle.main3 : '#3275C4' }]}>{item.current}/{item.aim} {item.unit}</Nunito14Bold>
                </View>
              )
            })}
          </View>
        </Gradient2>

        <View style={[styles.w100, styles.paddingBottom2vw, styles.marginVertical4vw, { borderBottomWidth: 1, borderBottomColor: colorStyle.fillBlur }]}>
          <Signika20Bold style={[styles.w100, { color: colorStyle.main3 }]}>Bạn còn</Signika20Bold>
        </View>

        {aim.data.map((item, index) => {
          return (
            <View key={index} style={[styles.flexRowStartCenter, styles.gap2vw, styles.borderRadius4vw, styles.marginBottom4vw, styles.padding4vw, { backgroundColor: colorStyle.fillBlur, }]}>
              {item.icon}
              <Nunito18Bold style={[{ color: 'white' }]}>{item.aim - item.current} {item.unit}</Nunito18Bold>
              <Nunito18Reg style={[{ color: 'white' }]}>{item.title}</Nunito18Reg>
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <Gradient2 style={[styles.flex1, styles.flexColStartCenter, styles.gap4vw]}>
      <SafeAreaView>
        {/* {statusBarTransparency()} */}
        {HomeNameBar(showName, true)}
        <ScrollView
          contentContainerStyle={[styles.flexColStartCenter, styles.gap4vw]}
          style={[styles.flex1]}>
          {!showInfoForm ?
            <TouchableOpacity
              style={[styles.flex1, styles.paddingV2vw, styles.alignSelfCenter, styles.borderRadius10, styles.padding4vw, { backgroundColor: colorStyle.main3 }]}
              onPress={() => {
                setShowInfoForm(true)
              }}>
              <Signika20Bold style={[styles.textCenter]}>Chỉnh sửa thông tin</Signika20Bold>
            </TouchableOpacity> : infoForm()}
          {aimAndRemain()}
          {marginBottomForScrollView(2)}
        </ScrollView>
      </SafeAreaView>
    </Gradient2>
  )
}