import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Home';
import Alerta from './Alerta';
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
        name="Alerta" 
        component={Alerta} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
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
