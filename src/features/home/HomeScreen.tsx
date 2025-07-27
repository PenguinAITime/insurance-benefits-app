import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableRipple, ProgressBar } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { InfoCard, AppButton } from '@components/common';
import { useAppSelector } from '@store/hooks';
import type { HomeScreenProps } from '@navigation/types';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { userName, activePlan } = useAppSelector((state) => state.account);

  const handleSearchPress = () => {
    // TODO: Navigate to search results
    console.log('Search pressed');
  };

  const deductibleProgress = activePlan
    ? activePlan.deductible.used / activePlan.deductible.individual
    : 0;

  const oopProgress = activePlan
    ? activePlan.outOfPocketMax.reached / activePlan.outOfPocketMax.individual
    : 0;

  return (
    <SafeAreaView className="flex-1 bg-softGray">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-4 pt-6 pb-4">
          <Text className="text-3xl font-medium text-charcoal">Hello, {userName}</Text>
        </View>

        {/* Search Card */}
        <InfoCard className="mb-4">
          <TouchableRipple onPress={() => console.log('Specialty search')}>
            <View className="flex-row items-center py-4 px-2">
              <Feather name="search" size={22} color="#2D3748" />
              <Text className="flex-1 ml-4 text-gray-500 text-base">
                Condition, specialty, or service
              </Text>
              <Feather name="chevron-right" size={20} color="#CBD5E0" />
            </View>
          </TouchableRipple>

          <View className="h-px bg-lightGray mx-4" />

          <TouchableRipple onPress={() => console.log('Location picker')}>
            <View className="flex-row items-center py-4 px-2">
              <Feather name="map-pin" size={22} color="#2D3748" />
              <Text className="flex-1 ml-4 text-charcoal text-base">Near me</Text>
              <Feather name="chevron-right" size={20} color="#CBD5E0" />
            </View>
          </TouchableRipple>

          <View className="h-px bg-lightGray mx-4" />

          <TouchableRipple onPress={() => console.log('Plan selector')}>
            <View className="flex-row items-center py-4 px-2">
              <Feather name="credit-card" size={22} color="#2D3748" />
              <Text className="flex-1 ml-4 text-charcoal text-base">
                {activePlan?.name || 'Select Insurance Plan'}
              </Text>
              <Feather name="chevron-right" size={20} color="#CBD5E0" />
            </View>
          </TouchableRipple>
        </InfoCard>

        <AppButton onPress={handleSearchPress} className="mx-4">
          Find Care
        </AppButton>

        {/* Plan Overview */}
        <View className="mt-6 px-4">
          <Text className="text-xl font-medium text-charcoal mb-4">Your Plan Overview</Text>

          <InfoCard className="mb-3">
            <Text className="text-sm font-medium text-charcoal">Deductible</Text>
            <Text className="text-lg text-charcoal mt-1">
              ${activePlan?.deductible.used.toLocaleString()} / $
              {activePlan?.deductible.individual.toLocaleString()} used
            </Text>
            <ProgressBar
              progress={deductibleProgress}
              color="#4FD1C5"
              className="mt-2 h-2 rounded"
              style={{ backgroundColor: '#E2E8F0' }}
            />
          </InfoCard>

          <InfoCard className="mb-3">
            <Text className="text-sm font-medium text-charcoal">Out-of-Pocket Max</Text>
            <Text className="text-lg text-charcoal mt-1">
              ${activePlan?.outOfPocketMax.reached.toLocaleString()} / $
              {activePlan?.outOfPocketMax.individual.toLocaleString()} reached
            </Text>
            <ProgressBar
              progress={oopProgress}
              color="#4FD1C5"
              className="mt-2 h-2 rounded"
              style={{ backgroundColor: '#E2E8F0' }}
            />
          </InfoCard>

          <InfoCard className="bg-green-50 mb-8">
            <View className="flex-row items-start">
              <Feather name="info" size={20} color="#FFD700" />
              <View className="flex-1 ml-2">
                <Text className="text-sm font-medium text-charcoal mb-1">Did You Know?</Text>
                <Text className="text-base text-charcoal leading-5">
                  Your plan covers one eye exam every 24 months at no cost.
                </Text>
              </View>
            </View>
          </InfoCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
