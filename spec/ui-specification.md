# UI Design Specification: Insurance Benefits Navigator (MVP)

**Document Version:** 1.0  
**Status:** Final for Development  
**Author:** Lead Product Designer  
**Date:** July 26, 2025

---

## Design Philosophy: Calm, Clarity, and Confidence

Our design philosophy centers on creating a minimalist interface that reduces user anxiety through guided actions, clear information hierarchy, and a soothing aesthetic. Every design decision is made to support our core users—older adults and those unfamiliar with insurance—in navigating their benefits with ease.

## Global Design System

### Color Palette

- **Primary Color - Vibrant Yellow:** #FFD700 (Used for primary CTAs and active states)
- **Charcoal Gray:** #2D3748 (Primary text color)
- **Soft Teal:** #4FD1C5 (Success states, progress indicators, in-network badges)
- **Gentle Pink:** #F687B3 (Attention states, due reminders)
- **Light Gray:** #E2E8F0 (AI message bubbles, disabled states)
- **White:** #FFFFFF (Card backgrounds, primary backgrounds)
- **Soft Gray Background:** #F7FAFC (Screen backgrounds)
- **Error Red:** #E53E3E (Error states, out-of-network indicators)

### Typography

- **Primary Font:** System default (San Francisco on iOS, Roboto on Android)
- **Heading Large:** 28pt, Medium weight
- **Heading Medium:** 22pt, Medium weight  
- **Body Large:** 18pt, Regular weight
- **Body Regular:** 16pt, Regular weight
- **Caption:** 14pt, Regular weight
- **Button Text:** 16pt, Bold

### Spacing & Layout

- **Screen Padding:** 16px horizontal, 24px top
- **Card Margin:** 16px
- **Card Padding:** 16px
- **Button Height:** 48px (minimum touch target)
- **Corner Radius:** 12px (cards), 8px (buttons), 24px (pills/badges)
- **Shadow:** elevation: 2 (Android), shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.1, shadowRadius: 4 (iOS)

### Component Library

Built on React Native Paper with custom theme overrides and additional custom components.

---

## 5.1. Tab 1: Home (Find Care)

**Objective:** To be the fastest, most intuitive path for a user to find care. This screen is designed to feel like a simple, powerful search engine.

### Layout & Flow

A clean, single-column vertical layout. The user's eye is drawn immediately to the central search card. Tapping "Find Care" initiates a search and navigates the user to the SearchResultsScreen. Tapping a specialty shortcut does the same but pre-fills the search query.

### Component Breakdown

#### Header
```jsx
<View style={styles.header}>
  <Text style={styles.greeting}>Welcome back, {userName}</Text>
</View>
```
- **Style:** fontSize: 28, fontWeight: '500', color: '#2D3748'
- **Padding:** 24px top, 16px horizontal

#### The Search Card
```jsx
<InfoCard style={styles.searchCard}>
  <TouchableOpacity style={styles.searchRow} onPress={openSpecialtySearch}>
    <Feather name="search" size={22} color="#2D3748" />
    <Text style={styles.placeholder}>Condition, specialty, or service</Text>
    <Feather name="chevron-right" size={20} color="#CBD5E0" />
  </TouchableOpacity>
  
  <Divider />
  
  <TouchableOpacity style={styles.searchRow} onPress={openLocationPicker}>
    <Feather name="map-pin" size={22} color="#2D3748" />
    <Text style={styles.searchText}>Near me</Text>
    <Feather name="chevron-right" size={20} color="#CBD5E0" />
  </TouchableOpacity>
  
  <Divider />
  
  <TouchableOpacity style={styles.searchRow} onPress={openPlanSelector}>
    <Feather name="credit-card" size={22} color="#2D3748" />
    <Text style={styles.searchText}>Cigna • Open Access Plus</Text>
    <Feather name="chevron-right" size={20} color="#CBD5E0" />
  </TouchableOpacity>
</InfoCard>
```

**InfoCard Styles:**
- Background: #FFFFFF
- Border Radius: 12px
- Shadow: elevation 2
- Margin: 16px horizontal, 24px top

**SearchRow Styles:**
- Height: 56px
- Padding: 16px horizontal
- Flex Direction: row
- Align Items: center
- Icon margin-right: 16px

#### Primary Action Button
```jsx
<AppButton 
  mode="contained"
  style={styles.findCareButton}
  onPress={handleFindCare}
  labelStyle={styles.buttonLabel}
>
  Find Care
</AppButton>
```

**Button Styles:**
- Background: #FFD700
- Height: 48px
- Border Radius: 8px
- Margin: 16px
- Font: 16pt, Bold, White

#### Top Specialties Section
```jsx
<View style={styles.specialtiesSection}>
  <Text style={styles.sectionHeader}>Or start with a specialty</Text>
  <View style={styles.specialtyGrid}>
    <SpecialtyCard icon="heart" label="Primary Care" color="#4FD1C5" />
    <SpecialtyCard icon="smile" label="Dentist" color="#F687B3" />
    <SpecialtyCard icon="eye" label="Vision" color="#9F7AEA" />
    <SpecialtyCard icon="brain" label="Mental Health" color="#63B3ED" />
  </View>
</View>
```

**SpecialtyCard Component:**
```jsx
<TouchableOpacity style={styles.specialtyCard}>
  <View style={styles.iconContainer}>
    <Feather name={icon} size={32} color={color} />
  </View>
  <Text style={styles.specialtyLabel}>{label}</Text>
</TouchableOpacity>
```

**SpecialtyCard Styles:**
- Width: (screenWidth - 48) / 2
- Height: 100px
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Border Radius: 12px
- Padding: 16px
- Margin: 8px

---

## 5.2. Tab 2: Wellness Guide

**Objective:** To transform insurance from a reactive tool into a proactive health partner. The design focuses on motivation and a feeling of accomplishment.

### Layout & Flow

A vertically scrolling screen that feels like a personalized checklist. Tapping "Find a Provider" navigates to a pre-filled search. Tapping "Mark as Done" triggers an in-place state change with animation.

### Component Breakdown

#### Header
```jsx
<View style={styles.header}>
  <Text style={styles.screenTitle}>Your Wellness Guide</Text>
</View>
```

#### Progress Card
```jsx
<InfoCard style={styles.progressCard}>
  <Text style={styles.progressText}>Your Progress: 1 of 5 completed</Text>
  <ProgressBar 
    progress={0.2} 
    color="#4FD1C5"
    style={styles.progressBar}
  />
</InfoCard>
```

**Progress Styles:**
- Bar Height: 8px
- Bar Background: #E2E8F0
- Bar Fill: #4FD1C5
- Corner Radius: 4px

#### Recommendation Cards
```jsx
<InfoCard style={styles.recommendationCard}>
  <View style={styles.cardHeader}>
    <Text style={styles.itemTitle}>Annual Physical</Text>
    <Badge style={[styles.badge, isDone ? styles.doneBadge : styles.dueBadge]}>
      {isDone ? '✓ DONE' : 'DUE'}
    </Badge>
  </View>
  
  <Text style={styles.description}>
    Stay on top of your health with a yearly check-up. Most plans cover this 100%.
  </Text>
  
  <View style={styles.actionRow}>
    <AppButton 
      mode="contained"
      style={styles.primaryAction}
      onPress={handleFindProvider}
    >
      Find a Provider
    </AppButton>
    
    <AppButton 
      mode="outlined"
      style={styles.secondaryAction}
      onPress={handleMarkDone}
    >
      Mark as Done
    </AppButton>
  </View>
</InfoCard>
```

**Badge Styles:**
- Due Badge: Background #F687B3, Text White
- Done Badge: Background #4FD1C5, Text White
- Padding: 4px horizontal, 2px vertical
- Border Radius: 24px
- Font Size: 12px, Bold

**Micro-interaction Specification:**
When "Mark as Done" is tapped:
1. Badge animates scale from 1.0 to 0.8 to 1.1 to 1.0 (spring effect)
2. Badge color transitions from #F687B3 to #4FD1C5
3. Text changes from "DUE" to "✓ DONE"
4. Progress bar animates to new value over 500ms
5. Haptic feedback on completion

---

## 5.3. Tab 3: AI Assistant

**Objective:** To provide a safe, simple, and conversational space for users to get answers to questions they might feel are "too simple" to ask a human.

### Layout & Flow

A classic, familiar chat interface. The list of messages scrolls vertically, and the input bar is fixed to the bottom, pushed up by the keyboard.

### Component Breakdown

#### Chat Header
```jsx
<View style={styles.chatHeader}>
  <View style={styles.assistantInfo}>
    <View style={styles.avatarContainer}>
      <Feather name="message-circle" size={24} color="#4FD1C5" />
    </View>
    <Text style={styles.assistantName}>Benefits Assistant</Text>
  </View>
</View>
```

#### Chat History
```jsx
<FlatList
  inverted
  data={messages}
  renderItem={({item}) => (
    <MessageBubble 
      message={item.text}
      isUser={item.isUser}
      timestamp={item.timestamp}
    />
  )}
  keyExtractor={item => item.id}
  contentContainerStyle={styles.messageList}
/>
```

**MessageBubble Component:**
```jsx
<View style={[
  styles.messageBubble,
  isUser ? styles.userBubble : styles.aiBubble
]}>
  <Text style={styles.messageText}>{message}</Text>
  <Text style={styles.timestamp}>{timestamp}</Text>
</View>
```

**Message Bubble Styles:**
- AI Bubble: Background #E2E8F0, Align left, Max width 80%
- User Bubble: Background #FFD700, Align right, Max width 80%
- Padding: 12px
- Border Radius: 16px
- Font Size: 16px
- Timestamp: 12px, Color #718096

#### Suggested Prompts
```jsx
<ScrollView 
  horizontal 
  showsHorizontalScrollIndicator={false}
  style={styles.suggestedPrompts}
>
  <Chip onPress={() => sendMessage("Am I covered for physiotherapy?")}>
    Am I covered for physiotherapy?
  </Chip>
  <Chip onPress={() => sendMessage("Do I need a referral for a specialist?")}>
    Do I need a referral?
  </Chip>
  <Chip onPress={() => sendMessage("What's my deductible?")}>
    What's my deductible?
  </Chip>
</ScrollView>
```

**Chip Styles:**
- Border: 1px solid #CBD5E0
- Background: Transparent
- Padding: 8px horizontal, 4px vertical
- Border Radius: 24px
- Margin: 4px

#### Input Bar
```jsx
<View style={styles.inputBar}>
  <TextInput
    style={styles.textInput}
    placeholder="Ask me anything about your benefits..."
    value={inputText}
    onChangeText={setInputText}
    multiline
    maxHeight={100}
  />
  <IconButton
    icon="send"
    size={24}
    color="#FFD700"
    onPress={handleSend}
    disabled={!inputText.trim()}
  />
</View>
```

**Input Bar Styles:**
- Background: #FFFFFF
- Border Top: 1px solid #E2E8F0
- Padding: 8px
- TextInput: Flex 1, Background #F7FAFC, Border Radius 20px, Padding 12px

---

## 5.4. Tab 4: My Account & The Insurance Wallet

**Objective:** To be the clean, organized, and predictable "control center" for the user's data. The design prioritizes clarity and ease of navigation.

### Layout & Flow

A simple list-based navigation stack. Tapping an item slides a new screen in from the right.

### Component Breakdown (Account Screen)

#### Header
```jsx
<View style={styles.header}>
  <Text style={styles.screenTitle}>My Account</Text>
</View>
```

#### Navigation List
```jsx
<List.Section>
  <List.Item
    title="Insurance"
    left={() => <List.Icon icon="credit-card" color="#2D3748" />}
    right={() => <List.Icon icon="chevron-right" color="#CBD5E0" />}
    onPress={navigateToInsurance}
    style={styles.listItem}
  />
  
  <List.Item
    title="Profile"
    left={() => <List.Icon icon="user" color="#2D3748" />}
    right={() => <List.Icon icon="chevron-right" color="#CBD5E0" />}
    onPress={navigateToProfile}
    style={styles.listItem}
  />
  
  <List.Item
    title="Settings"
    left={() => <List.Icon icon="settings" color="#2D3748" />}
    right={() => <List.Icon icon="chevron-right" color="#CBD5E0" />}
    onPress={navigateToSettings}
    style={styles.listItem}
  />
  
  <Divider style={styles.divider} />
  
  <List.Item
    title="Log Out"
    left={() => <List.Icon icon="log-out" color="#E53E3E" />}
    onPress={handleLogout}
    style={styles.listItem}
    titleStyle={styles.logoutText}
  />
</List.Section>
```

### Component Breakdown (Insurance Wallet Screen)

#### Header
```jsx
<View style={styles.header}>
  <Text style={styles.screenTitle}>Your Insurance Wallet</Text>
</View>
```

#### Insurance Sections
```jsx
<ScrollView style={styles.container}>
  {/* Health Insurance Section */}
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Health</Text>
    {healthPlan ? (
      <InfoCard style={styles.planCard}>
        <View style={styles.planHeader}>
          <Text style={styles.planName}>{healthPlan.name}</Text>
          <IconButton 
            icon="pencil" 
            size={20} 
            onPress={editHealthPlan}
          />
        </View>
        <Text style={styles.planDetail}>Member ID: {healthPlan.memberId}</Text>
      </InfoCard>
    ) : (
      <AppButton
        mode="contained"
        icon="plus"
        style={styles.addButton}
        onPress={addHealthPlan}
      >
        Add Health Insurance
      </AppButton>
    )}
  </View>
  
  {/* Dental Insurance Section */}
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Dental</Text>
    {dentalPlan ? (
      <InfoCard style={styles.planCard}>
        <View style={styles.planHeader}>
          <Text style={styles.planName}>{dentalPlan.name}</Text>
          <IconButton 
            icon="pencil" 
            size={20} 
            onPress={editDentalPlan}
          />
        </View>
        <Text style={styles.planDetail}>Member ID: {dentalPlan.memberId}</Text>
      </InfoCard>
    ) : (
      <AppButton
        mode="contained"
        icon="plus"
        style={styles.addButton}
        onPress={addDentalPlan}
      >
        Add Dental Insurance
      </AppButton>
    )}
  </View>
  
  {/* Vision Insurance Section */}
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Vision</Text>
    {visionPlan ? (
      <InfoCard style={styles.planCard}>
        <View style={styles.planHeader}>
          <Text style={styles.planName}>{visionPlan.name}</Text>
          <IconButton 
            icon="pencil" 
            size={20} 
            onPress={editVisionPlan}
          />
        </View>
        <Text style={styles.planDetail}>Member ID: {visionPlan.memberId}</Text>
      </InfoCard>
    ) : (
      <AppButton
        mode="contained"
        icon="plus"
        style={styles.addButton}
        onPress={addVisionPlan}
      >
        Add Vision Insurance
      </AppButton>
    )}
  </View>
</ScrollView>
```

**Section Styles:**
- Section Title: fontSize 20, fontWeight '600', color #2D3748, marginBottom 12px
- Add Button: Height 56px, Background #FFD700, Full width

**Plan Card Styles:**
- Background: #FFFFFF
- Padding: 16px
- Border Radius: 12px
- Shadow: elevation 2

---

## 5.5. Navigation Components

### Bottom Tab Bar
```jsx
<Tab.Navigator
  screenOptions={{
    tabBarStyle: styles.tabBar,
    tabBarActiveTintColor: '#FFD700',
    tabBarInactiveTintColor: '#718096',
    tabBarLabelStyle: styles.tabLabel,
  }}
>
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
      tabBarIcon: ({color, size}) => (
        <Feather name="search" size={size} color={color} />
      ),
      tabBarLabel: 'Find Care',
    }}
  />
  
  <Tab.Screen
    name="Wellness"
    component={WellnessScreen}
    options={{
      tabBarIcon: ({color, size}) => (
        <Feather name="heart" size={size} color={color} />
      ),
    }}
  />
  
  <Tab.Screen
    name="Assistant"
    component={AssistantScreen}
    options={{
      tabBarIcon: ({color, size}) => (
        <Feather name="message-circle" size={size} color={color} />
      ),
      tabBarLabel: 'Ask AI',
    }}
  />
  
  <Tab.Screen
    name="Account"
    component={AccountScreen}
    options={{
      tabBarIcon: ({color, size}) => (
        <Feather name="user" size={size} color={color} />
      ),
    }}
  />
</Tab.Navigator>
```

**Tab Bar Styles:**
- Height: 60px (+ safe area)
- Background: #FFFFFF
- Border Top: 1px solid #E2E8F0
- Label Font Size: 12px

---

## 5.6. Search Results & Provider Detail Screens

### Search Results Screen

#### Layout
```jsx
<View style={styles.container}>
  <View style={styles.searchHeader}>
    <TouchableOpacity onPress={goBack}>
      <Feather name="arrow-left" size={24} color="#2D3748" />
    </TouchableOpacity>
    <Text style={styles.searchQuery}>{searchQuery} near you</Text>
    <TouchableOpacity onPress={openFilters}>
      <Feather name="filter" size={24} color="#2D3748" />
    </TouchableOpacity>
  </View>
  
  <FlatList
    data={providers}
    renderItem={({item}) => <ProviderCard provider={item} />}
    keyExtractor={item => item.id}
    contentContainerStyle={styles.resultsList}
  />
</View>
```

#### ProviderCard Component
```jsx
<TouchableOpacity style={styles.providerCard} onPress={openProviderDetail}>
  <View style={styles.providerInfo}>
    <Text style={styles.providerName}>{provider.name}</Text>
    <Text style={styles.providerSpecialty}>{provider.specialty}</Text>
    <Text style={styles.providerDistance}>{provider.distance} miles away</Text>
  </View>
  
  <View style={styles.networkBadgeContainer}>
    <View style={[
      styles.networkBadge,
      provider.isInNetwork ? styles.inNetworkBadge : styles.outOfNetworkBadge
    ]}>
      {provider.isInNetwork ? (
        <>
          <Feather name="check" size={16} color="#FFFFFF" />
          <Text style={styles.networkBadgeText}>In-Network</Text>
        </>
      ) : (
        <>
          <Feather name="alert-circle" size={16} color="#FFFFFF" />
          <Text style={styles.networkBadgeText}>Out-of-Network</Text>
        </>
      )}
    </View>
  </View>
  
  <TouchableOpacity 
    style={styles.bookmarkButton}
    onPress={(e) => {
      e.stopPropagation();
      toggleBookmark(provider.id);
    }}
  >
    <Feather 
      name={provider.isBookmarked ? "bookmark" : "bookmark"} 
      size={20} 
      color={provider.isBookmarked ? "#FFD700" : "#CBD5E0"}
      fill={provider.isBookmarked ? "#FFD700" : "none"}
    />
  </TouchableOpacity>
</TouchableOpacity>
```

**Network Badge Styles:**
- In-Network: Background #4FD1C5, Text White
- Out-of-Network: Background #E53E3E, Text White, Card opacity 0.7
- Padding: 6px horizontal, 4px vertical
- Border Radius: 24px

### Provider Detail Screen

```jsx
<ScrollView style={styles.container}>
  <View style={styles.header}>
    <TouchableOpacity onPress={goBack}>
      <Feather name="arrow-left" size={24} color="#2D3748" />
    </TouchableOpacity>
    <TouchableOpacity onPress={toggleBookmark}>
      <Feather 
        name="bookmark" 
        size={24} 
        color={isBookmarked ? "#FFD700" : "#CBD5E0"}
        fill={isBookmarked ? "#FFD700" : "none"}
      />
    </TouchableOpacity>
  </View>
  
  <View style={styles.providerHeader}>
    {provider.photo && (
      <Image source={{uri: provider.photo}} style={styles.providerPhoto} />
    )}
    <Text style={styles.providerName}>{provider.name}</Text>
    <Text style={styles.providerSpecialty}>{provider.specialty}</Text>
    
    <View style={[
      styles.networkBadge,
      provider.isInNetwork ? styles.inNetworkBadge : styles.outOfNetworkBadge
    ]}>
      <Text style={styles.networkStatusText}>
        {provider.isInNetwork ? '✓ This provider is in your network' : '⚠️ This provider is out-of-network'}
      </Text>
    </View>
  </View>
  
  <InfoCard style={styles.contactCard}>
    <TouchableOpacity style={styles.contactRow} onPress={callProvider}>
      <Feather name="phone" size={20} color="#2D3748" />
      <Text style={styles.contactText}>{provider.phone}</Text>
    </TouchableOpacity>
    
    <Divider />
    
    <TouchableOpacity style={styles.contactRow} onPress={openMap}>
      <Feather name="map-pin" size={20} color="#2D3748" />
      <Text style={styles.contactText}>{provider.address}</Text>
    </TouchableOpacity>
    
    {provider.website && (
      <>
        <Divider />
        <TouchableOpacity style={styles.contactRow} onPress={openWebsite}>
          <Feather name="globe" size={20} color="#2D3748" />
          <Text style={styles.contactText}>Visit Website</Text>
        </TouchableOpacity>
      </>
    )}
  </InfoCard>
  
  {provider.hours && (
    <InfoCard style={styles.hoursCard}>
      <Text style={styles.cardTitle}>Office Hours</Text>
      {Object.entries(provider.hours).map(([day, hours]) => (
        <View key={day} style={styles.hoursRow}>
          <Text style={styles.dayText}>{day}</Text>
          <Text style={styles.hoursText}>{hours}</Text>
        </View>
      ))}
    </InfoCard>
  )}
</ScrollView>
```

---

## 5.7. Global Components

### InfoCard Component
```jsx
const InfoCard = ({children, style, ...props}) => (
  <Card style={[styles.infoCard, style]} {...props}>
    <Card.Content style={styles.cardContent}>
      {children}
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    padding: 16,
  },
});
```

### AppButton Component
```jsx
const AppButton = ({children, style, labelStyle, ...props}) => (
  <Button
    style={[styles.appButton, style]}
    labelStyle={[styles.buttonLabel, labelStyle]}
    contentStyle={styles.buttonContent}
    {...props}
  >
    {children}
  </Button>
);

const styles = StyleSheet.create({
  appButton: {
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  buttonContent: {
    height: 48,
  },
});
```

---

## 5.8. Accessibility Specifications

### Touch Targets
- All interactive elements maintain minimum 48x48dp touch targets
- Additional padding added where necessary to meet requirements

### Screen Reader Support
```jsx
<TouchableOpacity 
  accessible={true}
  accessibilityLabel="Find care button"
  accessibilityHint="Double tap to search for healthcare providers"
  accessibilityRole="button"
>
```

### Color Contrast
- All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Interactive elements have distinct focus states

### Text Scaling
- All text components support dynamic type scaling up to 200%
- Layouts adjust gracefully to prevent text truncation

---

## 5.9. Animation & Micro-interactions

### Page Transitions
- Stack navigation: Slide from right (300ms, ease-in-out)
- Modal presentations: Slide from bottom (250ms, ease-out)

### Button Press States
```jsx
const animatedScale = useRef(new Animated.Value(1)).current;

const handlePressIn = () => {
  Animated.spring(animatedScale, {
    toValue: 0.95,
    useNativeDriver: true,
  }).start();
};

const handlePressOut = () => {
  Animated.spring(animatedScale, {
    toValue: 1,
    friction: 3,
    tension: 40,
    useNativeDriver: true,
  }).start();
};
```

### Loading States
- Skeleton screens for content loading
- Activity indicators for actions
- Progress bars for multi-step processes

### Success Feedback
- Checkmark animation on completion
- Haptic feedback (iOS: impact light, Android: vibrate 10ms)
- Color transitions from action to success state

---

## 5.10. Empty States & Error Handling

### Empty States
```jsx
<View style={styles.emptyState}>
  <Feather name="search" size={64} color="#CBD5E0" />
  <Text style={styles.emptyTitle}>No providers found</Text>
  <Text style={styles.emptyDescription}>
    Try adjusting your search filters or expanding your search area
  </Text>
  <AppButton mode="contained" onPress={adjustFilters}>
    Adjust Filters
  </AppButton>
</View>
```

### Error States
```jsx
<View style={styles.errorState}>
  <Feather name="alert-circle" size={64} color="#E53E3E" />
  <Text style={styles.errorTitle}>Something went wrong</Text>
  <Text style={styles.errorDescription}>
    We couldn't load your information. Please try again.
  </Text>
  <AppButton mode="contained" onPress={retry}>
    Try Again
  </AppButton>
</View>
```

---

## Implementation Notes

### Performance Considerations
- Use FlatList for all scrollable lists with proper keyExtractor
- Implement image caching for provider photos
- Lazy load screens not immediately visible
- Memoize expensive computations

### Platform-Specific Adaptations
- iOS: Use native navigation gestures
- Android: Implement proper back button handling
- Respect platform-specific design patterns while maintaining brand consistency

### Testing Requirements
- Test on devices with various screen sizes (including SE and tablets)
- Verify with screen readers (VoiceOver/TalkBack)
- Test with large text settings
- Verify touch targets with accessibility inspector

---

This comprehensive UI specification provides the complete blueprint needed to implement the Insurance Benefits Navigator MVP with a focus on accessibility, usability, and a calming user experience designed specifically for our target audience.