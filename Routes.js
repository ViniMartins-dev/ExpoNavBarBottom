import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

import Home from './Home';
import Playlist from './Playlist';
import Usuarios from './Usuarios';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Playlist" 
        component={Playlist} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="note" color={color} size={size -4} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Usuarios" 
        component={Usuarios} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
