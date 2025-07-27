import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableRipple, ProgressBar, ActivityIndicator } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { InfoCard, AppButton } from '@components/common';
import { useAppSelector } from '@store/hooks';
import type { HomeScreenProps } from '@navigation/types';

interface SearchState {
  specialty: string;
  location: string;
  planId: string;
}

const HEALTH_TIPS = [
  'Your plan covers one eye exam every 24 months at no cost.',
  'Annual wellness visits are covered 100% with in-network providers.',
  'Generic medications typically cost 80% less than brand names.',
  'Telehealth visits may have lower copays than in-person visits.',
  'Preventive screenings like mammograms are covered at no cost.',
];

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { userName, activePlan } = useAppSelector((state) => state.account);
  const [isSearching, setIsSearching] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [searchState, setSearchState] = useState<SearchState>({
    specialty: '',
    location: 'Near me',
    planId: activePlan?.id || '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % HEALTH_TIPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchPress = () => {
    if (!searchState.specialty) {
      Alert.alert('Search Required', 'Please select a specialty or service to search for.');
      return;
    }
    if (!activePlan) {
      Alert.alert('Plan Required', 'Please select an insurance plan to continue.');
      return;
    }

    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      Alert.alert('Search Results', 'Search functionality will be implemented in the next phase.');
    }, 1000);
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
          <Text className="text-3xl font-medium text-charcoal">Welcome back, {userName}</Text>
        </View>

        {/* Search Card */}
        <InfoCard className="mb-4">
          <TouchableRipple
            onPress={() => {
              Alert.alert('Select Specialty', 'Choose what type of care you need', [
                {
                  text: 'Primary Care',
                  onPress: () => setSearchState({ ...searchState, specialty: 'Primary Care' }),
                },
                {
                  text: 'Specialist',
                  onPress: () => setSearchState({ ...searchState, specialty: 'Specialist' }),
                },
                {
                  text: 'Urgent Care',
                  onPress: () => setSearchState({ ...searchState, specialty: 'Urgent Care' }),
                },
                { text: 'Cancel', style: 'cancel' },
              ]);
            }}
          >
            <View className="flex-row items-center py-4 px-2">
              <Feather name="search" size={22} color="#2D3748" />
              <Text
                className={`flex-1 ml-4 text-base ${searchState.specialty ? 'text-charcoal' : 'text-gray-500'}`}
              >
                {searchState.specialty || 'Condition, specialty, or service'}
              </Text>
              <Feather name="chevron-right" size={20} color="#CBD5E0" />
            </View>
          </TouchableRipple>

          <View className="h-px bg-lightGray mx-4" />

          <TouchableRipple
            onPress={() => {
              Alert.alert('Select Location', 'Choose search radius', [
                {
                  text: 'Near me (5 miles)',
                  onPress: () => setSearchState({ ...searchState, location: 'Near me (5 miles)' }),
                },
                {
                  text: 'Within 10 miles',
                  onPress: () => setSearchState({ ...searchState, location: 'Within 10 miles' }),
                },
                {
                  text: 'Within 25 miles',
                  onPress: () => setSearchState({ ...searchState, location: 'Within 25 miles' }),
                },
                { text: 'Cancel', style: 'cancel' },
              ]);
            }}
          >
            <View className="flex-row items-center py-4 px-2">
              <Feather name="map-pin" size={22} color="#2D3748" />
              <Text className="flex-1 ml-4 text-charcoal text-base">{searchState.location}</Text>
              <Feather name="chevron-right" size={20} color="#CBD5E0" />
            </View>
          </TouchableRipple>

          <View className="h-px bg-lightGray mx-4" />

          <TouchableRipple
            onPress={() => {
              if (!activePlan) {
                Alert.alert(
                  'No Plan Selected',
                  'Please add your insurance plan in the Account section.',
                  [{ text: 'OK' }]
                );
              } else {
                Alert.alert(
                  'Current Plan',
                  `${activePlan.name}\nMember ID: ${activePlan.memberId}\nGroup: ${activePlan.groupNumber}`,
                  [{ text: 'OK' }]
                );
              }
            }}
          >
            <View className="flex-row items-center py-4 px-2">
              <Feather name="credit-card" size={22} color="#2D3748" />
              <Text className="flex-1 ml-4 text-charcoal text-base">
                {activePlan?.name || 'Select Insurance Plan'}
              </Text>
              <Feather name="chevron-right" size={20} color="#CBD5E0" />
            </View>
          </TouchableRipple>
        </InfoCard>

        <AppButton onPress={handleSearchPress} className="mx-4" disabled={isSearching}>
          {isSearching ? (
            <View className="flex-row items-center">
              <ActivityIndicator size="small" color="#2D3748" />
              <Text className="ml-2 text-charcoal font-semibold">Searching...</Text>
            </View>
          ) : (
            'Find Care'
          )}
        </AppButton>

        {/* Top Specialties Section */}
        <View className="mt-6 px-4">
          <Text className="text-lg font-medium text-charcoal mb-3">Or start with a specialty</Text>
          <View className="flex-row flex-wrap -mx-2">
            <TouchableRipple
              onPress={() => {
                setSearchState({ ...searchState, specialty: 'Primary Care' });
                handleSearchPress();
              }}
              className="w-1/2 p-2"
            >
              <View className="bg-white border border-lightGray rounded-xl p-4 items-center">
                <View className="w-12 h-12 bg-teal-50 rounded-full items-center justify-center mb-2">
                  <Feather name="heart" size={24} color="#4FD1C5" />
                </View>
                <Text className="text-sm font-medium text-charcoal">Primary Care</Text>
              </View>
            </TouchableRipple>

            <TouchableRipple
              onPress={() => {
                setSearchState({ ...searchState, specialty: 'Dentist' });
                handleSearchPress();
              }}
              className="w-1/2 p-2"
            >
              <View className="bg-white border border-lightGray rounded-xl p-4 items-center">
                <View className="w-12 h-12 bg-pink-50 rounded-full items-center justify-center mb-2">
                  <Feather name="smile" size={24} color="#F687B3" />
                </View>
                <Text className="text-sm font-medium text-charcoal">Dentist</Text>
              </View>
            </TouchableRipple>

            <TouchableRipple
              onPress={() => {
                setSearchState({ ...searchState, specialty: 'Vision' });
                handleSearchPress();
              }}
              className="w-1/2 p-2"
            >
              <View className="bg-white border border-lightGray rounded-xl p-4 items-center">
                <View className="w-12 h-12 bg-purple-50 rounded-full items-center justify-center mb-2">
                  <Feather name="eye" size={24} color="#9F7AEA" />
                </View>
                <Text className="text-sm font-medium text-charcoal">Vision</Text>
              </View>
            </TouchableRipple>

            <TouchableRipple
              onPress={() => {
                setSearchState({ ...searchState, specialty: 'Mental Health' });
                handleSearchPress();
              }}
              className="w-1/2 p-2"
            >
              <View className="bg-white border border-lightGray rounded-xl p-4 items-center">
                <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mb-2">
                  <Feather name="activity" size={24} color="#63B3ED" />
                </View>
                <Text className="text-sm font-medium text-charcoal">Mental Health</Text>
              </View>
            </TouchableRipple>
          </View>
        </View>

        {/* Plan Overview */}
        <View className="mt-6 px-4">
          <Text className="text-xl font-medium text-charcoal mb-4">Your Plan Overview</Text>

          {activePlan ? (
            <>
              <InfoCard className="mb-3">
                <Text className="text-sm font-medium text-charcoal">Deductible</Text>
                <Text className="text-lg text-charcoal mt-1">
                  ${activePlan.deductible.used.toLocaleString()} / $
                  {activePlan.deductible.individual.toLocaleString()} used
                </Text>
                <ProgressBar
                  progress={deductibleProgress}
                  color="#4FD1C5"
                  className="mt-2 h-2 rounded bg-lightGray"
                />
              </InfoCard>

              <InfoCard className="mb-3">
                <Text className="text-sm font-medium text-charcoal">Out-of-Pocket Max</Text>
                <Text className="text-lg text-charcoal mt-1">
                  ${activePlan.outOfPocketMax.reached.toLocaleString()} / $
                  {activePlan.outOfPocketMax.individual.toLocaleString()} reached
                </Text>
                <ProgressBar
                  progress={oopProgress}
                  color="#4FD1C5"
                  className="mt-2 h-2 rounded bg-lightGray"
                />
              </InfoCard>
            </>
          ) : (
            <InfoCard className="mb-3 bg-yellow-50">
              <View className="flex-row items-center">
                <Feather name="alert-circle" size={24} color="#FFD700" />
                <View className="flex-1 ml-3">
                  <Text className="text-base font-medium text-charcoal mb-1">
                    No Insurance Plan Selected
                  </Text>
                  <Text className="text-sm text-gray-600">
                    Add your insurance information in the Account section to see your benefits
                    overview.
                  </Text>
                </View>
              </View>
            </InfoCard>
          )}

          <InfoCard className="bg-green-50 mb-8">
            <View className="flex-row items-start">
              <Feather name="info" size={20} color="#FFD700" />
              <View className="flex-1 ml-2">
                <Text className="text-sm font-medium text-charcoal mb-1">Did You Know?</Text>
                <Text className="text-base text-charcoal leading-5">
                  {HEALTH_TIPS[currentTipIndex]}
                </Text>
              </View>
            </View>
          </InfoCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
