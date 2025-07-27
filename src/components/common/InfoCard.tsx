import React from 'react';
import { View, Pressable } from 'react-native';

interface InfoCardProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

export const InfoCard: React.FC<InfoCardProps> = ({ children, className = '', onPress }) => {
  const content = (
    <View className={`bg-white rounded-xl mx-4 my-2 p-4 shadow-sm ${className}`}>{children}</View>
  );

  if (onPress) {
    return <Pressable onPress={onPress}>{content}</Pressable>;
  }

  return content;
};
