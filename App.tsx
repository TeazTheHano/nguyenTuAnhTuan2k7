import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen import
import Login from './screens/Login';
import Home from './screens/Home';
import Tab from './assets/BottomTab';
import User from './screens/User';
import Quiz from './screens/Quiz';
import Setting from './screens/Setting';

import WhatIsSwim from './screens/WhatIsSwim';
// import Add from './screens/Add';

// ____________________END OF IMPORT_______________________

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Setting" component={Setting} />
        
        <Stack.Screen name="WhatIsSwim" component={WhatIsSwim} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;