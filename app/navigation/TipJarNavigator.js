import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TipJarScreen from '../screens/TipJarScreen';




const Stack = createStackNavigator();

const TipJarNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="TipJarScreen" component={TipJarScreen} options={{ headerShown: false, }}  />
        
        

    </Stack.Navigator>
);

export default TipJarNavigator;