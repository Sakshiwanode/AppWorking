import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from "../Auth/Login";
import OTPScreen from '../screens/MobileOTPVerify/OTPVerify';
import LoanApplyScreen from '../screens/Loan Apply/LoanApply';

 const Stack = createNativeStackNavigator();

 const AppNavigator = () => {   return (
    <Stack.Navigator>

       <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="OTPVerify"
        component={OTPScreen}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="LoanApply"
        component={LoanApplyScreen}
        options={{headerShown: false}}
      />

</Stack.Navigator>
   );
};
export default AppNavigator;
