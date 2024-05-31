import { View, Text, Touchable, TouchableOpacity, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import storage, { getAllExerciseCourse } from '../data/storageFunc'
import colorStyle, { componentStyle, Gradient1, Gradient2 } from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { HomeNameBar, marginBottomForScrollView } from '../assets/component'
import { coreTraining, homeBoardingPeople, infoIcon, rightArrow, swim1, swim2 } from '../assets/svgXml'
import { Nunito12Reg, Nunito16Bold, Nunito18Bold, Signika20Bold, Signika24Bold } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'

export default function Home() {
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
                        <TouchableOpacity onPress={() => { navigation.navigate('WhatIsSwim') }}>
                            <View style={[styles.positionRelative, styles.padding5vw, styles.positionRelative, { backgroundColor: colorStyle.fillBlur }]}>
                                <View style={{ zIndex: 2 }}>{homeBoardingPeople(vw(30), vw(50))}</View>
                                <View style={[componentStyle.outerGlowL1T1White, styles.h100, styles.borderRadius16, styles.positionAbsolute, { width: '75%', right: vw(5), top: vw(5) }]}>
                                    <Gradient2 style={[styles.flexColBetweenCenter, styles.gap3vw, styles.borderRadius16, styles.h100, styles.paddingH5vw, styles.paddingV3vw,]}>
                                        <Nunito18Bold style={[styles.textCenter, { color: colorStyle.white }]}>Những điều bạn cần biết về</Nunito18Bold>
                                        <View style={[styles.flexRowBetweenCenter]}>
                                            <Signika20Bold style={{ fontSize: vw(11), color: colorStyle.main3 }}>Bơi lội</Signika20Bold>
                                            {swim1(vw(22.5), vw(18.25))}
                                        </View>
                                        <Gradient1 style={{ width: '100%', borderRadius: vw(3) }}>
                                            <Nunito16Bold style={[styles.textCenter, styles.padding2vw, { color: colorStyle.white }]}>Xem ngay</Nunito16Bold>
                                        </Gradient1>
                                    </Gradient2>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={[styles.flexRowBetweenCenter, styles.paddingV4vw, styles.marginHorizontal5vw, { borderBottomWidth: 2, borderBottomColor: colorStyle.fillBlur }]}>
                            <View style={[styles.flexRowCenter, styles.gap2vw]}>
                                {swim2(vw(11), vw(11))}
                                <Signika20Bold style={{ color: colorStyle.main3 }}>Khởi động</Signika20Bold>
                            </View>
                            <TouchableOpacity
                                style={[componentStyle.outerGlowL1T1White, { borderRadius: vw(3) }]}
                                onPress={() => { storage.clearMapForKey('exerciseCourse') }}>
                                <Gradient2
                                    style={[styles.padding10, { borderRadius: vw(3), }]}>
                                    {infoIcon(vw(6), vw(6))}
                                </Gradient2>
                            </TouchableOpacity>
                        </View>

                        {/* warm up list here */}
                        {exerciseCourseCate1.map((course, index) => {
                            return (
                                <View key={index} style={[styles.alignSelfCenter, styles.padding3vw, styles.flexRowBetweenCenter, { backgroundColor: colorStyle.fillBlur, width: vw(84), borderRadius: vw(4.5), paddingRight: vw(5) }]}>
                                    <View style={[styles.flexRowStartCenter, styles.gap3vw]}>
                                        <View style={[{ width: vw(15), height: vw(18), backgroundColor: colorStyle.fillBlur, borderRadius: vw(3), padding: vw(1) }]}>
                                            <SvgXml xml={course.image} width={'100%'} height={'100%'} />
                                        </View>
                                        <View>
                                            <Nunito16Bold style={[{ color: colorStyle.main3, lineHeight: vw(8) }]}>{course.name}</Nunito16Bold>
                                            <Nunito12Reg style={[{ color: colorStyle.white }]}>{course.step.length} bước | {course.time} phút</Nunito12Reg>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={[componentStyle.outerGlowL1T1White, styles.borderRadius100]}
                                        onPress={() => { navigation.navigate('ExerciseCourse', { cate: 1, index: index }) }}>
                                        <Gradient2
                                            style={[styles.padding3vw, styles.borderRadius100]}>
                                            {rightArrow(vw(6), vw(6), 'white')}
                                        </Gradient2>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                        {/* end of warm up */}

                        {/* training */}

                        {/* core training */}

                        <View style={[styles.flexRowBetweenCenter, styles.paddingV4vw, styles.marginHorizontal5vw, { borderBottomWidth: 2, borderBottomColor: colorStyle.fillBlur }]}>
                            <View style={[styles.flexRowCenter, styles.gap2vw]}>
                                {coreTraining(vw(11), vw(11))}
                                <Signika20Bold style={{ color: colorStyle.main3 }}>Khởi động</Signika20Bold>
                            </View>
                            <TouchableOpacity
                                style={[componentStyle.outerGlowL1T1White, { borderRadius: vw(3) }]}
                                onPress={() => { console.log('clicked') }}>
                                <Gradient2
                                    style={[styles.padding10, { borderRadius: vw(3), }]}>
                                    {infoIcon(vw(6), vw(6))}
                                </Gradient2>
                            </TouchableOpacity>
                        </View>

                        {/* core training list here */}
                        {exerciseCourseCate2.map((course, index) => {
                            return (
                                <View key={index} style={[styles.alignSelfCenter, styles.padding3vw, styles.flexRowBetweenCenter, { backgroundColor: colorStyle.fillBlur, width: vw(84), borderRadius: vw(4.5), paddingRight: vw(5) }]}>
                                    <View style={[styles.flexRowStartCenter, styles.gap3vw]}>
                                        <View style={[{ width: vw(15), height: vw(18), backgroundColor: colorStyle.fillBlur, borderRadius: vw(3), padding: vw(1) }]}>
                                            <SvgXml xml={course.image} width={'100%'} height={'100%'} />
                                        </View>
                                        <View>
                                            <Nunito16Bold style={[{ color: colorStyle.main3, lineHeight: vw(8) }]}>{course.name}</Nunito16Bold>
                                            <Nunito12Reg style={[{ color: colorStyle.white }]}>{course.step.length} bước | {course.time} phút</Nunito12Reg>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={[componentStyle.outerGlowL1T1White, styles.borderRadius100]}
                                        onPress={() => { navigation.navigate('ExerciseCourse', { cate: 2, index: index }) }}>
                                        <Gradient2
                                            style={[styles.padding3vw, styles.borderRadius100]}>
                                            {rightArrow(vw(6), vw(6), 'white')}
                                        </Gradient2>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}

                        {/* end of training */}

                        {/* news */}

                        <View style={[styles.flexRowCenter, styles.paddingV4vw, styles.marginHorizontal5vw, { borderBottomWidth: 2, borderBottomColor: colorStyle.fillBlur }]}>
                            <Signika24Bold style={{ color: colorStyle.main3 }}>Tin tức</Signika24Bold>
                        </View>
                        {/* {loaddingExerciseCourse? <ActivityIndicator/> : <Text style={{color:'white'}}>{JSON.stringify(exerciseCourse)}</Text>} */}

                    </View>
                    {marginBottomForScrollView(4)}
                </ScrollView>
            </SafeAreaView >
        </Gradient2 >
    )
}