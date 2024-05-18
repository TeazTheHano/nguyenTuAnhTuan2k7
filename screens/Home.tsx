import { View, Text, Touchable, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import storage from '../data/storageFunc'

export default function Home() {

    const [name, setName] = React.useState<string>('')
    const [age, setAge] = React.useState<number>(0)

    useEffect(() => {
        storage.load({
            key: 'userInfo',
            autoSync: true,
            syncInBackground: true,
        }).then(res => {
            setName(res.name)
            setAge(res.age)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <SafeAreaView>
            <Text>{name}, {age}</Text>
            <TouchableOpacity onPress={() => {
                storage.remove({
                    key: 'userInfo'
                })
            }
            }>
                <Text>Remove</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}