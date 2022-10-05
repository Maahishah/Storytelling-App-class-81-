
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Feed from './screens/feed'
import CreateStory from './screens/createStory'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {

   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen  name ="feed" component={Feed}  options={{headerShown:false}}/>
      <Tab.Screen   name= "createStory" component={CreateStory} options={{headerShown:false}}/>
    </Tab.Navigator>
   
    
   </NavigationContainer>


}


