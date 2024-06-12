import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { Linking } from 'react-native'
import React, { useEffect } from 'react'
import storage, { clearAllData, clearExerciseAllData, clearQuizAllData } from '../data/storageFunc'
import { HomeNameBar, statusBarTransparency } from '../assets/component'
import colorStyle, { componentStyle, Gradient2 } from '../assets/componentStyleSheet'
import { contactIcon, deleteIcon, logOutIcon, rightArrow } from '../assets/svgXml'
import styles, { vw } from '../assets/stylesheet'
import { Nunito16Bold } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'

export default function Setting() {
  const [userName, setUserName] = React.useState<string>('')
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      storage.load({
        key: 'userInfo',
        autoSync: true,
        syncInBackground: true,
      }).then(res => {
        setUserName(res.name)
      }).catch(err => {
        console.log(err)
      })
    })
    return unsubscribe
  }, [])

  interface BtnProps {
    title: string
    onPress: () => void
    icon: any
  }

  let BtnData: BtnProps[] = [
    {
      title: 'Liên lạc với chúng tôi',
      onPress: () => {
        Linking.openURL('mailto:' + 'teaz.pseg@gmail.com' + '?subject=Feed back&body=Your message')
      },
      icon: contactIcon(vw(6), vw(6)),
    },
    {
      title: 'Đặt lại dữ liệu bài kiểm tra',
      onPress: clearQuizAllData,
      icon: deleteIcon(vw(6), vw(6))
    },
    {
      title: 'Đặt lại dữ liệu bài tập',
      onPress: clearExerciseAllData,
      icon: deleteIcon(vw(6), vw(6))
    },
    {
      title: 'Xoá dữ liệu người dùng',
      onPress: () => {
        let clear = async () => {
          await clearAllData()
          navigation.navigate('Login', { state: true })
        }
        clear()
      },

      icon: logOutIcon(vw(6), vw(6))
    }
  ]

  const BtnGen = (data: BtnProps[]) => {
    return (
      <View style={[styles.flexCol, styles.borderRadius16, styles.w90, styles.alignSelfCenter, styles.paddingV2vw, { backgroundColor: colorStyle.fillBlur }]}>
        {
          data.map((item, index) => {
            return (
              <TouchableOpacity
                style={[styles.padding4vw, styles.flexRowBetweenCenter, { borderBottomWidth: index < data.length - 1 ? 1 : 0, borderBottomColor: colorStyle.fillBlur }]}
                key={index} onPress={item.onPress}>
                <View style={[styles.flexRowStartCenter, styles.gap2vw,]}>
                  {item.icon}
                  <Nunito16Bold style={{ color: colorStyle.main3 }}>{item.title}</Nunito16Bold>
                </View>
                {rightArrow(vw(6), vw(6), 'white')}
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  return (
    <Gradient2 style={{ flex: 1 }}>
      <SafeAreaView>
        {statusBarTransparency()}
        {HomeNameBar(userName)}

        {BtnGen(BtnData)}
      </SafeAreaView>
    </Gradient2>
  )
}