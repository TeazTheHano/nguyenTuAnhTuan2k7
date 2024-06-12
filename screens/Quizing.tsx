import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Animated, Easing, FlatList } from 'react-native'
import React, { useEffect, useRef } from 'react'
import colorStyle, { componentStyle, Gradient1, Gradient2 } from '../assets/componentStyleSheet'
import { SafeAreaView } from 'react-native-safe-area-context'
import { marginBottomForScrollView, NavNavigation, statusBarTransparency, UlList } from '../assets/component'
import styles, { vh, vw } from '../assets/stylesheet'
import storage, { getQuiz } from '../data/storageFunc'
import { Nunito12Reg, Nunito14Bold, Nunito16Bold, Nunito18Bold, Nunito20Bold, Signika20Bold, SonsieOne100 } from '../assets/Class'
import { SvgXml } from 'react-native-svg'
import { countDown0, countDown1, countDown2, countDown3, endGameIcon, infoIcon, leftArrow, quizLogoIcon, quizPeopleIcon, rightArrow, scoreBoard } from '../assets/svgXml'

export default function Quizing({ route, navigation }: any) {
    const { cate, level } = route.params;

    const [quiz, setQuiz] = React.useState<any>({});
    const [loadingQuiz, setLoadingQuiz] = React.useState<boolean>(true);
    const [countDown, setCountDown] = React.useState<number>(4);
    const [currentStep, setCurrentStep] = React.useState<number>(0);
    const [endingCountDown, setEndingCountDown] = React.useState<number>(10);
    const [isDone, setIsDone] = React.useState<boolean>(false);
    const [currentScore, setCurrentScore] = React.useState<number>(0);
    const [startEndingCountDown, setStartEndingCountDown] = React.useState<boolean>(false);
    const [isAnswerTrue, setIsAnswerTrue] = React.useState<boolean | undefined>(undefined);
    const [selectedAnswer, setSelectedAnswer] = React.useState<number>(-1);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getQuiz(cate, level).then((res) => {
                setQuiz(res);
                setLoadingQuiz(false);
            }).catch((err) => {
                console.log(err);
            });
        });

        return unsubscribe;
    }, [navigation]);

    const countDownTimer = () => {
        if (countDown > 0) {
            setTimeout(() => {
                setCountDown(countDown - 1);
            }, 1000);
        }
    }
    countDownTimer();

    useEffect(() => {
        if (countDown == 0) {
            setStartEndingCountDown(true);
        }
    }, [countDown]);

    // const endingCountDownTimer = (endingCountDown: number) => {
    //     let x = endingCountDown - 1;
    //     if (x >= 0) {
    //         setTimeout(() => {
    //             setEndingCountDown(x);
    //             if (x == 0) {
    //                 if (currentStep < quiz.data.length - 1) {
    //                     setTimeout(() => {
    //                         setCurrentStep(currentStep + 1)
    //                         setStartEndingCountDown(false);
    //                         setTimeout(() => {
    //                             setEndingCountDown(10);
    //                             setStartEndingCountDown(true);
    //                             resetCountDownBarAnimation()
    //                         }, 500);
    //                     }, 1000);
    //                 } else {
    //                     setIsDone(true);
    //                 }
    //             }
    //             if (x > 0) {
    //                 endingCountDownTimer(x);
    //             }
    //         }, 1000);
    //     }
    // }

    useEffect(() => {
        if (startEndingCountDown) {
            // endingCountDownShortenAnimationFnc();
            // trigger endingCountDownTimer
        }
    }, [startEndingCountDown]);

    const animation = useRef(new Animated.Value(0)).current;

    const endingCountDownShortenAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [vw(70), vw(0)],
    });

    function endingCountDownShortenAnimationFnc() {
        // endingCountDownTimer(endingCountDown)
        Animated.timing(animation, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: false,
        }).start();
    }

    function resetCountDownBarAnimation() {
        Animated.timing(animation, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
        }).start();
    }

    useEffect(() => {
        // reset answer status
        setIsAnswerTrue(undefined);
        setSelectedAnswer(-1);
        // reset count down bar animation
        resetCountDownBarAnimation();

        setTimeout(() => {
            setEndingCountDown(10);
        }, 1000);

    }, [currentStep]);

    useEffect(() => {
        if (startEndingCountDown == true && endingCountDown == 10) {
            endingCountDownShortenAnimationFnc();
        }
        
        if (startEndingCountDown == true && endingCountDown > 0) {
            const timerID = setTimeout(() => {
                setEndingCountDown(endingCountDown - 1);
            }, 1000);
            return () => clearTimeout(timerID);
        }
        if (startEndingCountDown == true && endingCountDown == 0) {
            if (currentStep < quiz.data.length - 1) {
                setTimeout(() => {
                    setCurrentStep(currentStep + 1)
                    setStartEndingCountDown(false);
                    setEndingCountDown(10);
                    setTimeout(() => {
                        setStartEndingCountDown(true);
                        resetCountDownBarAnimation()
                    }, 500);
                }, 1000);
            } else {
                setIsDone(true);
            }
        }
    }, [endingCountDown, startEndingCountDown]);

    return (
        <Gradient2 style={[styles.flex1]}>
            <SafeAreaView style={[styles.flex1,]}>
                {NavNavigation('Trang chủ')}
                {/* {statusBarTransparency()} */}

                {loadingQuiz ? <ActivityIndicator /> :
                    isDone ?

                        // END GAME
                        <View style={[styles.flexColStartCenter, styles.gap6vw, styles.flex1]}>
                            <View style={[componentStyle.outerGlowL1T1White, styles.borderRadius16, styles.marginTop4vw, styles.w90, styles.alignSelfCenter]}>
                                <Gradient2 style={[styles.flexRowBetweenCenter, styles.gap3vw, styles.borderRadius16, styles.padding4vw,]}>
                                    {quizLogoIcon(vw(40), vw(20))}
                                    {quizPeopleIcon(vw(20), vw(20))}
                                </Gradient2>
                            </View>
                            <View style={[styles.alignSelfCenter, styles.w90vw, styles.padding10, { borderBottomColor: colorStyle.grey, borderBottomWidth: 1 }]}>
                                <Nunito16Bold style={{ color: colorStyle.main3 }}>{quiz.category == 1 ? 'Nhập môn' : quiz.category == 2 ? 'Nghiệp dư' : 'Kình ngư'} <Nunito14Bold style={{ color: colorStyle.white }}>| Level {quiz.level} |</Nunito14Bold> {currentScore} điểm</Nunito16Bold>
                            </View>
                            {scoreBoard(vw(80), vw(40))}
                            <SonsieOne100>{currentScore}/{quiz.data.length}</SonsieOne100>
                            <View style={[styles.flexRowBetweenCenter, styles.w90]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.goBack()
                                    }}
                                    style={[styles.border1, styles.w45, styles.marginTop2vw, styles.padding2vw, styles.borderRadius4vw, { borderColor: colorStyle.main3, marginBottom: vw(20) }]}>
                                    <Nunito16Bold style={[styles.textCenter, { color: colorStyle.white }]}>Trở lại</Nunito16Bold>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('Tab')
                                    }}
                                    style={[styles.border1, styles.w45, styles.marginTop2vw, styles.padding2vw, styles.borderRadius4vw, { borderColor: colorStyle.main3, marginBottom: vw(20) }]}>
                                    <Nunito16Bold style={[styles.textCenter, { color: colorStyle.white }]}>Về trang chủ</Nunito16Bold>
                                </TouchableOpacity>
                            </View>
                        </View>
                        // end of END GAME
                        :
                        <View style={[styles.flex1, styles.flexColBetweenCenter, styles.gap6vw,]}>

                            {/* BANNER */}
                            <View style={[componentStyle.outerGlowL1T1White, styles.borderRadius16, styles.marginTop4vw, styles.w90, styles.alignSelfCenter]}>
                                <Gradient2 style={[styles.flexRowBetweenCenter, styles.gap3vw, styles.borderRadius16, styles.padding4vw,]}>
                                    {quizLogoIcon(vw(40), vw(20))}
                                    {quizPeopleIcon(vw(20), vw(20))}
                                </Gradient2>
                            </View>
                            {/* end of BANNER */}

                            {/* QUIZ INFO */}
                            <View style={[styles.alignSelfCenter, styles.w90vw, styles.padding10, { borderBottomColor: colorStyle.grey, borderBottomWidth: 1 }]}>
                                <Nunito16Bold style={{ color: colorStyle.main3 }}>{quiz.category == 1 ? 'Nhập môn' : quiz.category == 2 ? 'Nghiệp dư' : 'Kình ngư'} <Nunito14Bold style={{ color: colorStyle.white }}>| Level {quiz.level} |</Nunito14Bold> {currentScore} điểm</Nunito16Bold>
                            </View>
                            {/* end of QUIZ INFO */}


                            <ScrollView
                                style={[styles.w100, styles.paddingV3vw, styles.flex1,]}
                                contentContainerStyle={[styles.flexColBetweenCenter, styles.gap6vw,]}>
                                {countDown ?
                                    // QUIZ START COUNT DOWN
                                    <View>
                                        <View style={[styles.alignSelfCenter, styles.w90vw, styles.padding10, styles.marginBottom4vw, { borderBottomColor: colorStyle.grey, borderBottomWidth: 1 }]}>
                                            <Nunito16Bold style={{ color: colorStyle.main3 }}>Bắt đầu bài Quiz trong...</Nunito16Bold>
                                        </View>
                                        {countDown == 4 ? countDown3(vw(100), vh(30)) : countDown == 3 ? countDown2(vw(100), vh(30)) : countDown == 2 ? countDown1(vw(100), vh(30)) : countDown0(vw(100), vh(30))}
                                    </View>
                                    // end of QUIZ START COUNT DOWN

                                    :
                                    currentStep == quiz.data.length ?

                                        // END QUIZ COUNT DOWN
                                        <View style={[styles.flexColCenter, styles.gap4vw]}>
                                            <Nunito16Bold style={{ color: colorStyle.main3 }}>Kết thúc bài Quiz trong...</Nunito16Bold>
                                            <View style={[styles.flexRowCenter, styles.paddingH4vw, styles.gap4vw]}>
                                                <Gradient1 style={[styles.borderRadius100,]}>
                                                    <View style={[styles.borderRadius100, styles.flexRowCenter, styles.borderRadius100, { backgroundColor: `#151B39`, width: vw(12), height: vw(12), margin: vw(0.75) }]}>
                                                        <Nunito20Bold style={[styles.textCenter, { color: colorStyle.white }]}>{endingCountDown}</Nunito20Bold>
                                                    </View>
                                                </Gradient1>
                                                <View style={[styles.w70vw, styles.borderRadius100, { backgroundColor: colorStyle.fillBlur, height: vw(1.5), }]}>
                                                    <Animated.View style={[styles.borderRadius100, { backgroundColor: colorStyle.main3, height: vw(1.5), width: endingCountDownShortenAnimation }]}></Animated.View>
                                                </View>
                                            </View>
                                        </View>
                                        // end of END QUIZ COUNT DOWN

                                        :
                                        <View style={[styles.flexColCenter, styles.gap2vw, { borderRadius: vw(4) }]}>

                                            {/* QUIZ PROCESS BAR */}
                                            <View style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.marginHorizontal8vw]}>
                                                <Signika20Bold style={{ color: colorStyle.main3 }}>{currentStep + 1}/{quiz.data.length}</Signika20Bold>
                                                <View style={[styles.flexRow, styles.flex1]}>
                                                    {quiz.data.map((item: any, index: number) => {
                                                        return (
                                                            <View key={index} style={[styles.borderRadius100, styles.flex1, { backgroundColor: index <= currentStep ? colorStyle.main3 : colorStyle.fillBlur, height: vw(3), margin: vw(0.75) }]}></View>
                                                        )
                                                    })}
                                                </View>
                                            </View>
                                            {/* end of QUIZ PROCESS BAR */}

                                            {/* COUNT DOWN BAR */}
                                            <View style={[styles.flexRowCenter, styles.paddingH4vw, styles.gap4vw,]}>
                                                <Gradient1 style={[styles.borderRadius100,]}>
                                                    <View style={[styles.borderRadius100, styles.flexRowCenter, styles.borderRadius100, { backgroundColor: `#151B39`, width: vw(12), height: vw(12), margin: vw(0.75) }]}>
                                                        <Nunito20Bold style={[styles.textCenter, { color: colorStyle.white }]}>{endingCountDown}</Nunito20Bold>
                                                    </View>
                                                </Gradient1>
                                                <View style={[styles.w70vw, styles.borderRadius100, { backgroundColor: colorStyle.fillBlur, height: vw(1.5), }]}>
                                                    <Animated.View style={[styles.borderRadius100, { backgroundColor: colorStyle.main3, height: vw(1.5), width: endingCountDownShortenAnimation }]}></Animated.View>
                                                </View>
                                            </View>
                                            {/* end of COUNT DOWN BAR */}

                                            {/* QUIZ QUESTION */}
                                            <View style={[componentStyle.outerGlowL1T1White]}>
                                                <View style={[styles.marginTop2vw, { width: vw(94) }]}>
                                                    <Gradient1 style={[styles.padding4vw, styles.borderRadius3vw]}>
                                                        <Nunito16Bold style={{ color: colorStyle.white }}>{quiz.data[currentStep].question}</Nunito16Bold>
                                                    </Gradient1>
                                                </View>
                                            </View>
                                            {/* end of QUIZ QUESTION */}

                                            {/* QUIZ ANSWERS */}
                                            <FlatList
                                                data={quiz.data[currentStep].options}
                                                numColumns={2}
                                                scrollEnabled={false}
                                                keyExtractor={(item, index) => index.toString()}
                                                renderItem={({ item, index }) => (
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setSelectedAnswer(index);
                                                            if (currentStep < quiz.data.length - 1) {
                                                                setEndingCountDown(0);
                                                                setTimeout(() => {
                                                                    setCurrentStep(currentStep + 1)
                                                                }, 1000);
                                                            } else {
                                                                setTimeout(() => {
                                                                    setIsDone(true);
                                                                }, 1000);
                                                            }

                                                            if (index == quiz.data[currentStep].answer) {
                                                                console.log('correct')
                                                                setCurrentScore(currentScore + 1);
                                                                quiz.score = currentScore + 1;
                                                                setIsAnswerTrue(true);
                                                            } else {
                                                                console.log('incorrect')
                                                                setIsAnswerTrue(false);
                                                            }
                                                            quiz.data[currentStep].isDone = true;
                                                            quiz.data[currentStep].lastAnswer = index;

                                                            storage.save({
                                                                key: `quiz`,
                                                                data: quiz,
                                                                id: `${cate}-${level}`,
                                                                expires: null,
                                                            });
                                                        }}
                                                        key={index}
                                                        style={[styles.borderRadius3vw, styles.paddingH4vw, styles.paddingV2vw, styles.margin2vw, { backgroundColor: isAnswerTrue === false && selectedAnswer === index ? '#D00000CC' : isAnswerTrue === true && selectedAnswer === index ? colorStyle.main3 : colorStyle.fillBlur, width: vw(40) }]}>
                                                        <Nunito16Bold style={[styles.textCenter, { color: colorStyle.white }]}>{String.fromCharCode(65 + index)}: {item}</Nunito16Bold>
                                                    </TouchableOpacity>
                                                )}
                                            />
                                            {/* end of QUIZ ANSWERS */}
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setCurrentStep(currentStep + 1);
                                                }}
                                                style={[styles.border1, styles.w80vw, styles.marginTop2vw, styles.padding2vw, styles.borderRadius4vw, { borderColor: colorStyle.main3, marginBottom: vw(20) }]}>
                                                <Nunito16Bold style={[styles.textCenter, { color: colorStyle.white }]}>Bỏ qua</Nunito16Bold>
                                            </TouchableOpacity>
                                        </View>
                                }
                                {/* {marginBottomForScrollView()} */}
                            </ScrollView>

                        </View>
                }
            </SafeAreaView >
        </Gradient2 >
    )
}