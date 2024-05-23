import { View, Text, Touchable, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import storage from '../data/storageFunc'
import colorStyle, { componentStyle, Gradient1, Gradient2 } from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { HomeNameBar } from '../assets/component'
import { coreTraining, homeBoardingPeople, infoIcon, swim1, swim2 } from '../assets/svgXml'
import { Nunito16Bold, Nunito18Bold, Signika20Bold, Signika24Bold } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()

    const [userName, setUserName] = React.useState<string>('')
    const [age, setAge] = React.useState<number>(0)

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
                                <Gradient2 style={[styles.flexColBetweenCenter, styles.gap3vw, styles.h100, styles.borderRadius16, styles.paddingH5vw, styles.paddingV3vw, styles.positionAbsolute, { width: '75%', right: vw(5), top: vw(5) }]}>
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
                        </TouchableOpacity>
                        {/* end of banner */}

                        {/* warm up */}

                        <View style={[styles.flexRowBetweenCenter, styles.paddingV4vw, styles.marginHorizontal5vw, { borderBottomWidth: 2, borderBottomColor: colorStyle.fillBlur }]}>
                            <View style={[styles.flexRowCenter, styles.gap2vw]}>
                                {swim2(vw(11), vw(11))}
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

                        {/* warm up list here */}

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

                        {/* end of training */}

                        {/* news */}

                        <View style={[styles.flexRowCenter, styles.paddingV4vw, styles.marginHorizontal5vw, { borderBottomWidth: 2, borderBottomColor: colorStyle.fillBlur }]}>
                            <Signika24Bold style={{ color: colorStyle.main3 }}>Tin tức</Signika24Bold>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Gradient2>
    )
}