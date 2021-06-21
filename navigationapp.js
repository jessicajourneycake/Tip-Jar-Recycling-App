import React from 'react';
import {Text, Button, StyleSheet} from 'react-native';
import Screen from './app/components/Screen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AuthNavigator from './app/navigation/AuthNavigator';

const Link = () => {
  const navigation = useNavigation();
  return(
    <Button
      title="Click"
      onPress={() => navigation.navigate('TweetDetails')} />
  )
}
const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button 
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", {id: 1})} />
  </Screen>
);
const Account = ({navigation}) => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const TweetDetails = ({route}) => (
  <Screen>
  <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Tweets" 
      component={Tweets} 
      options={{
        headerStyle: {backgroundColor: 'dodgerblue'},
        headerTintColor: "white",
        //headerShown: false,

      }}/>
    <Stack.Screen name="TweetDetails" component={TweetDetails} options={{ title: "Tweet Details"}}/>

  </Stack.Navigator>
);


const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'grey',
      activeTintColor: 'white',
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
      labelStyle: {
        fontSize: 14,
        paddingBottom: 3,
      }
      
    }}>
    <Tab.Screen 
      name="Feed" 
      component={StackNavigator}
      options={{
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="home" size={25} color={color} style={{margin: 5}}/>
        
      }} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);


function App(props) {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
