import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootTabParamList = {
  Home: undefined;
  WellnessGuide: undefined;
  AIAssistant: undefined;
  Account: undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
  ProviderDetail: { providerId: string };
  SearchSpecialty: undefined;
  LocationPicker: undefined;
  PlanSelector: undefined;
  InsuranceWallet: undefined;
  SearchResults: {
    specialty?: string;
    location?: string;
  };
};

// Composed types for screens
export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

export type WellnessGuideScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'WellnessGuide'>,
  StackScreenProps<RootStackParamList>
>;

export type AIAssistantScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'AIAssistant'>,
  StackScreenProps<RootStackParamList>
>;

export type AccountScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Account'>,
  StackScreenProps<RootStackParamList>
>;

// Global navigation type for useNavigation
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
