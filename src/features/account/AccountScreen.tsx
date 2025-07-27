import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { AccountScreenProps } from '@navigation/types';

export const AccountScreen: React.FC<AccountScreenProps> = () => {
  return (
    <SafeAreaView className="flex-1 bg-softGray">
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl text-charcoal">My Account</Text>
      </View>
    </SafeAreaView>
  );
};
