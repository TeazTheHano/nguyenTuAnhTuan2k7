import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { clearAllData, clearExerciseAllData, clearQuizAllData } from '../data/storageFunc'
import { statusBarTransparency } from '../assets/component'

export default function Setting() {
  return (
    <SafeAreaView>
      {statusBarTransparency()}
      <Text>Setting</Text>
      <TouchableOpacity onPress={() => clearQuizAllData()}>
        <Text>clear quiz data</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearExerciseAllData()}>
        <Text>clear exercise data</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearAllData()}>
        <Text>clear all data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}