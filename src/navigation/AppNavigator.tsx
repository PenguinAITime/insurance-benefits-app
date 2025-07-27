import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import { HomeScreen } from '@features/home/HomeScreen';
import { WellnessGuideScreen } from '@features/wellness-guide/WellnessGuideScreen';
import { AIAssistantScreen } from '@features/ai-assistant/AIAssistantScreen';
import { AccountScreen } from '@features/account/AccountScreen';
import { theme } from '@theme/theme';
import type { Theme } from '@react-navigation/native';

import type { RootTabParamList, RootStackParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// Tab screen options factory to avoid inline functions
const createTabScreenOptions = (label: string, iconName: string): BottomTabNavigationOptions => ({
  tabBarLabel: label,
  tabBarIcon: ({ color, size }) => <Feather name={iconName} color={color} size={size} />,
});

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#718096',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E2E8F0',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={createTabScreenOptions('Find Care', 'search')}
      />
      <Tab.Screen
        name="WellnessGuide"
        component={WellnessGuideScreen}
        options={createTabScreenOptions('Wellness', 'heart')}
      />
      <Tab.Screen
        name="AIAssistant"
        component={AIAssistantScreen}
        options={createTabScreenOptions('Ask AI', 'message-circle')}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={createTabScreenOptions('Account', 'user')}
      />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer theme={theme as Theme}>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
