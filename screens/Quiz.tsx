import { View, Text, Touchable, TouchableOpacity, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import storage, { getAllQuiz } from '../data/storageFunc'
import colorStyle, { componentStyle, Gradient1, Gradient2 } from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { HomeNameBar, marginBottomForScrollView, statusBarTransparency } from '../assets/component'
import { bronzeMedal, coreTraining, goldMedal, homeBoardingPeople, infoIcon, quizLogoIcon, quizPeopleIcon, rightArrow, rightArrowFill, silverMedal, swim1, swim2 } from '../assets/svgXml'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito16Bold, Nunito18Bold, Signika20Bold, Signika24Bold } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'

export default function Quiz() {
  const navigation = useNavigation()

  const [userName, setUserName] = React.useState<string>('')
  const [age, setAge] = React.useState<number>(0)
  const [quiz1, setQuiz1] = React.useState<any[]>([])
  const [quiz2, seQuiz2] = React.useState<any[]>([])
  const [quiz3, setQuiz3] = React.useState<any[]>([])
  const [loaddingExercisequiz, setLoaddingExerciseQuiz] = React.useState<boolean>(true)

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
    const unsubscribe = navigation.addListener('focus', () => {
      getAllQuiz().then(res => {
        setQuiz1(res.filter(quiz => quiz.category === 1))
        seQuiz2(res.filter(quiz => quiz.category === 2))
        setQuiz3(res.filter(quiz => quiz.category === 3))
        setLoaddingExerciseQuiz(false)
      }).catch(err => {
        console.log(err)
      })
    });

    return unsubscribe;
  }, [navigation])

  return (
    <Gradient2 style={styles.flex1}>
      {statusBarTransparency()}
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

            {quiz1.map((quiz, index) => {
              return (
                <View key={index} style={[styles.alignSelfCenter, styles.padding4vw, styles.flexRowBetweenCenter, { backgroundColor: colorStyle.fillBlur, width: vw(84), borderRadius: vw(4.5) }]}>
                  <View style={[styles.flexRowStartCenter, styles.gap3vw]}>

                    <View style={[]}>
                      <Nunito16Bold style={[styles.flex1, { color: colorStyle.main3, lineHeight: vw(8) }]}>Level {quiz.level}</Nunito16Bold>
                      <Nunito12Reg style={[{color:colorStyle.white}]}>Hoàn thành <Nunito12Bold style={{color:colorStyle.main3}}>{
                        quiz.data.filter((question: any) => question.isDone).length
                      }/{quiz.data.length}</Nunito12Bold> câu hỏi - {quiz.score} điểm</Nunito12Reg>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={[componentStyle.outerGlowL1T1White, { borderRadius: vw(2) }]}
                    onPress={() => { navigation.navigate('Quizing', { cate: 1, level: quiz.level }) }}>
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

            {quiz2.map((quiz, index) => {
              return (
                <View key={index} style={[styles.alignSelfCenter, styles.padding4vw, styles.flexRowBetweenCenter, { backgroundColor: colorStyle.fillBlur, width: vw(84), borderRadius: vw(4.5) }]}>
                  <View style={[styles.flexRowStartCenter, styles.gap3vw]}>

                    <View style={[]}>
                      <Nunito16Bold style={[styles.flex1, { color: colorStyle.main3, lineHeight: vw(8) }]}>Level {quiz.level}</Nunito16Bold>
                      <Nunito12Reg style={[{color:colorStyle.white}]}>Hoàn thành <Nunito12Bold style={{color:colorStyle.main3}}>{
                        quiz.data.filter((question: any) => question.isDone).length
                      }/{quiz.data.length}</Nunito12Bold> câu hỏi - {quiz.score} điểm</Nunito12Reg>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={[componentStyle.outerGlowL1T1White, { borderRadius: vw(2) }]}
                    onPress={() => { navigation.navigate('Quizing', { cate: 2, level: quiz.level }) }}>
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

            {quiz3.map((quiz, index) => {
              return (
                <View key={index} style={[styles.alignSelfCenter, styles.padding4vw, styles.flexRowBetweenCenter, { backgroundColor: colorStyle.fillBlur, width: vw(84), borderRadius: vw(4.5) }]}>
                  <View style={[styles.flexRowStartCenter, styles.gap3vw]}>

                    <View style={[]}>
                      <Nunito16Bold style={[styles.flex1, { color: colorStyle.main3, lineHeight: vw(8) }]}>Level {quiz.level}</Nunito16Bold>
                      <Nunito12Reg style={[{color:colorStyle.white}]}>Hoàn thành <Nunito12Bold style={{color:colorStyle.main3}}>{
                        quiz.data.filter((question: any) => question.isDone).length
                      }/{quiz.data.length}</Nunito12Bold> câu hỏi - {quiz.score} điểm</Nunito12Reg>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={[componentStyle.outerGlowL1T1White, { borderRadius: vw(2) }]}
                    onPress={() => { navigation.navigate('Quizing', { cate: 2, level: quiz.level }) }}>
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