import { View, Text, Touchable, TouchableOpacity, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import storage, { getAllExerciseCourse } from '../data/storageFunc'
import colorStyle, { componentStyle, Gradient1, Gradient2 } from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { HomeNameBar, marginBottomForScrollView } from '../assets/component'
import { bronzeMedal, coreTraining, goldMedal, homeBoardingPeople, infoIcon, quizLogoIcon, quizPeopleIcon, rightArrow, rightArrowFill, silverMedal, swim1, swim2 } from '../assets/svgXml'
import { Nunito12Reg, Nunito14Bold, Nunito16Bold, Nunito18Bold, Signika20Bold, Signika24Bold } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'

export default function Quiz() {
  const navigation = useNavigation()

  const [userName, setUserName] = React.useState<string>('')
  const [age, setAge] = React.useState<number>(0)
  const [exerciseCourseCate1, setExerciseCourseCate1] = React.useState<any[]>([])
  const [exerciseCourseCate2, setExerciseCourseCate2] = React.useState<any[]>([])
  const [loaddingExerciseCourse, setLoaddingExerciseCourse] = React.useState<boolean>(true)

  useEffect(() => {
    storage.load({
      key: 'userInfo',
      autoSync: true,
      syncInBackground: true,
    }).then(res => {
      setUserName(res.name)
      setAge(res.age)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    getAllExerciseCourse().then(res => {
      setExerciseCourseCate1(res.filter(course => course.category === 1))
      console.log(exerciseCourseCate1);

      setExerciseCourseCate2(res.filter(course => course.category === 2))
      console.log(exerciseCourseCate2);
      setLoaddingExerciseCourse(false)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <Gradient2 style={styles.flex1}>
      <SafeAreaView>
        {HomeNameBar(userName)}
        <ScrollView style={[]}>
          <View style={[styles.flexCol, styles.gap4vw]}>
            {/* banner */}

            <View style={[componentStyle.outerGlowL1T1White, styles.borderRadius16, styles.marginTop4vw, styles.w90, styles.alignSelfCenter]}>
              <Gradient2 style={[styles.flexRowBetweenCenter, styles.gap3vw, styles.borderRadius16, styles.padding4vw,]}>
                {quizLogoIcon(vw(40), vw(20))}
                {quizPeopleIcon(vw(20), vw(20))}
              </Gradient2>
            </View>


            {/* boarding people */}
            <View style={[styles.flexRowBetweenCenter, styles.paddingV4vw, styles.marginHorizontal8vw, { borderBottomWidth: 2, borderBottomColor: colorStyle.fillBlur }]}>
              <View style={[styles.flexRowCenter, styles.gap2vw]}>
                <Signika20Bold style={{ color: colorStyle.main3 }}>Nhập môn</Signika20Bold>
                {bronzeMedal(vw(11), vw(11))}
              </View>
            </View>

            {exerciseCourseCate1.map((course, index) => {
              return (
                <View key={index} style={[styles.alignSelfCenter, styles.padding3vw, styles.flexRowBetweenCenter, { backgroundColor: colorStyle.fillBlur, width: vw(84), borderRadius: vw(4.5), paddingRight: vw(5) }]}>
                  <View style={[styles.flexRowStartCenter, styles.gap3vw]}>

                    <View style={[]}>
                      <Nunito16Bold style={[styles.flex1, { color: colorStyle.main3, lineHeight: vw(8) }]}>{course.name}</Nunito16Bold>
                      <Nunito12Reg style={[styles.flex1, { color: colorStyle.white }]}>{course.step.length} bước | {course.time} phút</Nunito12Reg>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={[componentStyle.outerGlowL1T1White, { borderRadius: vw(2) }]}
                    onPress={() => { navigation.navigate('Quizing', { cate: 1, index: index }) }}>
                    <Gradient2
                      style={[styles.flexRowCenter, styles.gap2vw, styles.paddingH2vw, styles.paddingV1vw, { borderRadius: vw(2) }]}>
                      <Nunito14Bold style={{ color: colorStyle.white }}>Play</Nunito14Bold>
                      {rightArrowFill(vw(6), vw(6), 'white')}
                    </Gradient2>
                  </TouchableOpacity>
                </View>
              )
            })}
            {/* end of boarding people */}

            {/* inter */}
            <View style={[styles.flexRowBetweenCenter, styles.paddingV4vw, styles.marginHorizontal8vw, { borderBottomWidth: 2, borderBottomColor: colorStyle.fillBlur }]}>
              <View style={[styles.flexRowCenter, styles.gap2vw]}>
                <Signika20Bold style={{ color: colorStyle.main3 }}>Nghiệp dư</Signika20Bold>
                {silverMedal(vw(11), vw(11))}
              </View>
            </View>

            {exerciseCourseCate2.map((course, index) => {
              return (
                <View key={index} style={[styles.alignSelfCenter, styles.padding3vw, styles.flexRowBetweenCenter, { backgroundColor: colorStyle.fillBlur, width: vw(84), borderRadius: vw(4.5), paddingRight: vw(5) }]}>
                  <View style={[styles.flexRowStartCenter, styles.gap3vw]}>
                    
                    <View style={[]}>
                      <Nunito16Bold style={[styles.flex1, { color: colorStyle.main3, lineHeight: vw(8) }]}>{course.name}</Nunito16Bold>
                      <Nunito12Reg style={[styles.flex1, { color: colorStyle.white }]}>{course.step.length} bước | {course.time} phút</Nunito12Reg>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={[componentStyle.outerGlowL1T1White, { borderRadius: vw(2) }]}
                    onPress={() => { navigation.navigate('Quizing', { cate: 2, index: index }) }}>
                    <Gradient2
                      style={[styles.flexRowCenter, styles.gap2vw, styles.paddingH2vw, styles.paddingV1vw, { borderRadius: vw(2) }]}>
                      <Nunito14Bold style={{ color: colorStyle.white }}>Play</Nunito14Bold>
                      {rightArrowFill(vw(6), vw(6), 'white')}
                    </Gradient2>
                  </TouchableOpacity>
                </View>
              )
            })}
            {/* end of inter */}

            {/* advance */}
            <View style={[styles.flexRowBetweenCenter, styles.paddingV4vw, styles.marginHorizontal8vw, { borderBottomWidth: 2, borderBottomColor: colorStyle.fillBlur }]}>
              <View style={[styles.flexRowCenter, styles.gap2vw]}>
                <Signika20Bold style={{ color: colorStyle.main3 }}>Kình ngư</Signika20Bold>
                {goldMedal(vw(11), vw(11))}
              </View>
            </View>

            {exerciseCourseCate2.map((course, index) => {
              return (
                <View key={index} style={[styles.alignSelfCenter, styles.padding3vw, styles.flexRowBetweenCenter, { backgroundColor: colorStyle.fillBlur, width: vw(84), borderRadius: vw(4.5), paddingRight: vw(5) }]}>
                  <View style={[styles.flexRowStartCenter, styles.gap3vw]}>
                   
                    <View style={[]}>
                      <Nunito16Bold style={[styles.flex1, { color: colorStyle.main3, lineHeight: vw(8) }]}>{course.name}</Nunito16Bold>
                      <Nunito12Reg style={[styles.flex1, { color: colorStyle.white }]}>{course.step.length} bước | {course.time} phút</Nunito12Reg>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={[componentStyle.outerGlowL1T1White, { borderRadius: vw(2) }]}
                    onPress={() => { navigation.navigate('Quizing', { cate: 2, index: index }) }}>
                    <Gradient2
                      style={[styles.flexRowCenter, styles.gap2vw, styles.paddingH2vw, styles.paddingV1vw, { borderRadius: vw(2) }]}>
                      <Nunito14Bold style={{ color: colorStyle.white }}>Play</Nunito14Bold>
                      {rightArrowFill(vw(6), vw(6), 'white')}
                    </Gradient2>
                  </TouchableOpacity>
                </View>
              )
            })}
            {/* end of advance */}

          </View>
          {marginBottomForScrollView(4)}
        </ScrollView>
      </SafeAreaView >
    </Gradient2 >
  )
}