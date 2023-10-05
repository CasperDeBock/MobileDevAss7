// App.js file contents
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Screens
import HomeScreen from './screens/Home';
import SuperDrawSection from './screens/SuperDrawSection';
import DiceSection from './screens/DiceSection';
import DetailArticle from './screens/DetailNews';
import Results from './screens/Results';

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={HomeScreen} />
      <Stack.Screen name="News Article" component={DetailArticle} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'; 
            } else if (route.name === 'Super Draw') {
              iconName = 'gift'; 
            } else if (route.name === 'Dice Roll') {
              iconName = 'dice'; 
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray', 
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Super Draw" component={SuperDrawSection} />
        <Tab.Screen name="Dice Roll" component={DiceSection} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
