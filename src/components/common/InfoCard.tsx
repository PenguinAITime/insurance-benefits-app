import React from 'react';
import { View, Pressable } from 'react-native';

interface InfoCardProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

export const InfoCard: React.FC<InfoCardProps> = ({ children, className = '', onPress }) => {
  return (
    <Pressable onPress={onPress} disabled={!onPress}>
      <View className={`bg-white rounded-xl mx-4 my-2 p-4 shadow-sm ${className}`}>{children}</View>
    </Pressable>
  );
};
