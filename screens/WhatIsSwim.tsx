import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import colorStyle, { componentStyle, Gradient1, Gradient2 } from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { NavNavigation, UlList } from '../assets/component'
import { Nunito16Bold, Nunito18Bold } from '../assets/Class'

export default function WhatIsSwim() {
    const [currentScreen, setCurrentScreen] = React.useState<number>(0)

    interface dataItem {
        title: string,
        content: string
        imgAddress: string
    }

    let data = [
        []
    ]

    return (
        <Gradient2 style={[styles.flex1]}>
            <SafeAreaView style={[styles.flex1,]}>
                {NavNavigation('Trang chủ')}

                <ScrollView style={[styles.flex1, styles.paddingH4vw, { backgroundColor: colorStyle.fillBlur }]}>
                    {/* <View> */}
                    {UlList(data, Nunito18Bold, Nunito18Bold, 'a', '\u2045', vw(2))}
                    {/* </View> */}

                    <View style={[componentStyle.outerGlowL1T1White, { backgroundColor: 'black' }]}>
                        <Text style={[styles.textCenter, styles.paddingV4vw, { color: colorStyle.white }]}>
                            adsfjkasdfjkas
                        </Text>
                    </View>

                </ScrollView>

                <View style={[styles.flexRowBetweenCenter, styles.paddingH10vw, styles.gap8vw, styles.paddingV4vw]}>
                    <TouchableOpacity
                        onPress={() => { }}>
                        <Gradient1 style={[styles.paddingV2vw, styles.paddingH10, styles.borderRadius3vw, { width: vw((100 - 20 - 5 - 8) / 2) }]}>
                            <Nunito16Bold style={[styles.textCenter, { color: colorStyle.white }]}>Quay lại</Nunito16Bold>
                        </Gradient1>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}>
                        <Gradient1 style={[styles.paddingV2vw, styles.paddingH10, styles.borderRadius3vw, { width: vw((100 - 20 - 5 - 8) / 2) }]}>
                            <Nunito16Bold style={[styles.textCenter, { color: colorStyle.white }]}>Tiếp theo</Nunito16Bold>
                        </Gradient1>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Gradient2>
    )
}