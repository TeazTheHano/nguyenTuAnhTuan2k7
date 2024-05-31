import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import colorStyle, { componentStyle, Gradient1, Gradient2 } from '../assets/componentStyleSheet'
import { SafeAreaView } from 'react-native-safe-area-context'
import { marginBottomForScrollView, NavNavigation } from '../assets/component'
import styles, { vh, vw } from '../assets/stylesheet'
import { getExerciseCourse } from '../data/storageFunc'
import { Nunito12Reg, Nunito14Bold, Nunito16Bold, Nunito18Bold, Nunito20Bold, Signika20Bold } from '../assets/Class'
import { SvgXml } from 'react-native-svg'
import { countDown0, countDown1, countDown2, countDown3, endGameIcon, infoIcon, leftArrow, rightArrow } from '../assets/svgXml'

export default function ExerciseCourse({ route, navigation }: any) {
    const { cate, index } = route.params;

    const [excerise, setExcerise] = React.useState<any>({});
    const [loadingExcerise, setLoadingExcerise] = React.useState<boolean>(true);
    const [countDown, setCountDown] = React.useState<number>(4);
    const [currentStep, setCurrentStep] = React.useState<number>(0);
    const [endingCountDown, setEndingCountDown] = React.useState<number>(10);
    const [isDone, setIsDone] = React.useState<boolean>(false);

    useEffect(() => {
        getExerciseCourse(cate, index).then((res) => {
            setExcerise(res);
            setLoadingExcerise(false);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const countDownTimer = () => {
        if (countDown > 0) {
            setTimeout(() => {
                setCountDown(countDown - 1);
            }, 1000);
        }
    }
    countDownTimer();

    const endingCountDownTimer = (endingCountDown: number) => {
        let x = endingCountDown - 1;
        if (x >= 0) {
            setTimeout(() => {
                setEndingCountDown(x);
                if (x == 0) {
                    setTimeout(() => {
                        setIsDone(true);
                    }, 1000);
                }
                if (x > 0) {
                    endingCountDownTimer(x);
                }
            }, 1000);
        }
    }

    const animation = useRef(new Animated.Value(0)).current;

    const countDownShortenAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [vw(70), vw(0)],
    });

    const countDownShorten = () => {
        endingCountDownTimer(endingCountDown)
        Animated.timing(animation, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: false,
        }).start();
    }

    const endGameAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const endGameAnimationFnc = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }

    useEffect(() => {
        if (isDone) {
            endGameAnimationFnc();
        }
    }, [isDone]);

    return (
        <Gradient2 style={[styles.flex1]}>
            <SafeAreaView style={[styles.flex1,]}>
                {NavNavigation('Trang chủ')}

                {loadingExcerise ? <ActivityIndicator /> :
                    isDone ?
                        <View style={[styles.flexColCenter, styles.gap6vw, styles.flex1]}>
                            <View style={[styles.flexColCenter]}>
                                <Animated.View style={[{ transform: [{ scale: endGameAnimation }] }]}>
                                    {endGameIcon(vw(50), vw(50))}
                                </Animated.View>
                                <View style={[styles.w40vw, styles.h10vw, { backgroundColor: `#FFDB09` }]}></View>
                            </View>

                            <View style={[styles.flexColCenter, styles.w80vw, styles.padding5vw, styles.paddingH10, styles.borderRadius4vw, { backgroundColor: colorStyle.fillBlur }]}>
                                <Nunito18Bold style={{ color: colorStyle.white }}>Bạn đã hoàn thành</Nunito18Bold>
                                <Signika20Bold style={{ color: colorStyle.main3 }}>{excerise.name}</Signika20Bold>
                            </View>

                            <View style={[styles.flexRowBetweenCenter, styles.gap8vw, styles.paddingV4vw]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.goBack();
                                        setCountDown(4);
                                        setCurrentStep(0);
                                        setEndingCountDown(10);
                                        isDone ? setIsDone(false) : null;
                                    }}
                                    style={[componentStyle.outerGlowL1T1White, styles.borderRadius3vw]}>
                                    <Gradient1 style={[styles.paddingV2vw, styles.paddingH10, styles.borderRadius3vw,]}>
                                        <Nunito16Bold style={[styles.textCenter, { color: colorStyle.white }]}>Trở lại trang chủ</Nunito16Bold>
                                    </Gradient1>

                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[componentStyle.outerGlowL1T1White, styles.borderRadius3vw]}>
                                    <Gradient1 style={[styles.paddingV2vw, styles.paddingH10, styles.borderRadius3vw, styles.flexRowCenter, styles.gap3vw]}>
                                        <Nunito16Bold style={[styles.textCenter, { color: colorStyle.white }]}>
                                            Tới bài tiếp theo
                                        </Nunito16Bold>
                                        {rightArrow(vw(6), vw(6), colorStyle.white)}
                                    </Gradient1>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View style={[styles.flex1, styles.flexColBetweenCenter, styles.gap6vw,]}>
                            <View style={[styles.alignSelfCenter, styles.w90vw, styles.padding10, { borderBottomColor: colorStyle.grey, borderBottomWidth: 1 }]}>
                                <Nunito16Bold style={{ color: colorStyle.main3 }}>Khởi động <Nunito14Bold style={{ color: colorStyle.white }}>| {excerise.name}</Nunito14Bold></Nunito16Bold>
                            </View>

                            {countDown ?
                                <View>
                                    <View style={[styles.alignSelfCenter, styles.w90vw, styles.padding10, styles.marginBottom4vw, { borderBottomColor: colorStyle.grey, borderBottomWidth: 1 }]}>
                                        <Nunito16Bold style={{ color: colorStyle.main3 }}>Bắt đầu bài khởi động trong...</Nunito16Bold>
                                    </View>

                                    {countDown == 4 ? countDown3(vw(100), vh(30)) : countDown == 3 ? countDown2(vw(100), vh(30)) : countDown == 2 ? countDown1(vw(100), vh(30)) : countDown0(vw(100), vh(30))}

                                </View>
                                :
                                <View style={[styles.w100vw]}>
                                    <SvgXml xml={currentStep == excerise.step.length ? excerise.image : excerise.step[currentStep].image} width={vw(100)} height={vh(30)} />
                                </View>}

                            <ScrollView
                                style={[styles.w100, styles.paddingV3vw,]}
                                contentContainerStyle={[styles.flexColBetweenCenter, styles.gap6vw,]}>
                                {countDown ?
                                    null :
                                    currentStep == excerise.step.length ?
                                        <View style={[styles.flexColCenter, styles.gap4vw]}>
                                            <Nunito16Bold style={{ color: colorStyle.main3 }}>Kết thúc bài khởi động trong...</Nunito16Bold>
                                            <View style={[styles.flexRowCenter, styles.paddingH4vw, styles.gap4vw]}>
                                                <Gradient1 style={[styles.borderRadius100,]}>
                                                    <View style={[styles.borderRadius100, styles.flexRowCenter, styles.borderRadius100, { backgroundColor: `#151B39`, width: vw(12), height: vw(12), margin: vw(0.75) }]}>
                                                        <Nunito20Bold style={[styles.textCenter, { color: colorStyle.white }]}>{endingCountDown}</Nunito20Bold>
                                                    </View>
                                                </Gradient1>
                                                <View style={[styles.w70vw, styles.borderRadius100, { backgroundColor: colorStyle.fillBlur, height: vw(1.5), }]}>
                                                    <Animated.View style={[styles.borderRadius100, { backgroundColor: colorStyle.main3, height: vw(1.5), width: countDownShortenAnimation }]}></Animated.View>
                                                </View>
                                            </View>
                                        </View>
                                        :
                                        <View style={[styles.alignSelfCenter, styles.w90, componentStyle.outerGlowL1T1White, { borderRadius: vw(4) }]}>
                                            <Gradient2 style={[styles.flexRowCenter, styles.paddingH4vw, { borderRadius: vw(4) }]}>
                                                <TouchableOpacity
                                                    disabled={currentStep === 0}
                                                    style={[styles.paddingV8vw]}
                                                    onPress={() => { setCurrentStep(currentStep - 1) }}>
                                                    <View style={[styles.padding3vw, styles.borderRadius3vw, { backgroundColor: colorStyle.fillBlur, opacity: currentStep === 0 ? 0.2 : 1 }]}>
                                                        {leftArrow(vw(6), vw(6), colorStyle.white)}
                                                    </View>
                                                </TouchableOpacity>
                                                <Nunito16Bold style={[styles.padding3vw, styles.flex1, styles.textCenter, { color: colorStyle.white }]}>{excerise.step[currentStep].description}</Nunito16Bold>
                                                <TouchableOpacity
                                                    // disabled={currentStep === excerise.step.length - 1}
                                                    style={[styles.paddingV8vw]}
                                                    onPress={() => { setCurrentStep(currentStep + 1); currentStep === excerise.step.length - 1 ? countDownShorten() : null }}>
                                                    <View style={[styles.padding3vw, styles.borderRadius3vw, { backgroundColor: colorStyle.fillBlur, }]}>
                                                        {rightArrow(vw(6), vw(6), colorStyle.white)}
                                                    </View>
                                                </TouchableOpacity>
                                            </Gradient2>
                                        </View>
                                }

                                <View style={[styles.flexRowBetweenCenter, styles.gap3vw, styles.w80, styles.paddingV4vw, styles.paddingH5vw, styles.borderRadius4vw, { backgroundColor: colorStyle.fillBlur }]}>
                                    {infoIcon(vw(6), vw(6))}
                                    <Nunito12Reg style={[styles.flex1, styles.textJustify, { color: colorStyle.white }]}>{excerise.description}</Nunito12Reg>
                                </View>
                            </ScrollView>

                            {marginBottomForScrollView(0.5)}
                        </View>
                }
            </SafeAreaView >
        </Gradient2 >
    )
}