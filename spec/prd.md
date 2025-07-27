# Product Requirements Document: Insurance Benefits Navigator (MVP)

**Document Version:** 1.0 (MVP)  
**Status:** Finalized, Ready for Sprint Planning  
**Author:** Lead Product Manager  
**Date:** July 26, 2025

---

## 1. Introduction: The Vision

### 1.1 The Problem: The "Benefits Fog"

For millions of people, health insurance is a source of anxiety, not security. They pay for benefits they don't understand, can't easily access, and often forget they even have. This "Benefits Fog" leads to two critical failures:

- **Lost Value:** Billions of dollars in valuable, covered benefits (like preventive care, dental cleanings, and vision allowances) go unused each year.
- **Financial Risk:** Users either delay care due to fear of unknown costs or face surprise out-of-pocket bills from unknowingly visiting an out-of-network provider.

Our mission is to eliminate this confusion and empower users to take control of their healthcare journey.

### 1.2 Our Solution: A Personal Benefits Advocate

The Insurance Benefits Navigator is a mobile application that acts as a calm, clear, and confident guide through the complexities of health insurance. It is an **insurer-agnostic platform**, meaning it works for everyone, regardless of their provider. Our app consolidates all of a user's health, dental, and vision plans into one simple, beautiful interface, transforming their insurance policy from a confusing document into an actionable tool.

## 2. Target Audience & User Personas

Our MVP will be laser-focused on solving the core problems for these two user groups:

### Primary Persona: Bill, the Proactive Retiree (67)

- **His Story:** Bill is on Medicare supplemented by a retiree plan. He's budget-conscious and wants to stay healthy, but finds the paperwork and different provider networks overwhelming.
- **His Pain Point:** "I know I'm covered for an annual eye exam, but I don't know who to go to. I'm worried about getting a surprise bill if I pick the wrong doctor."
- **His Goal:** To quickly find a covered eye doctor near him and get reminders for his other important check-ups.

### Secondary Persona: Brenda, the Family Caregiver (42)

- **Her Story:** Brenda manages her own family's insurance and helps her aging parents with theirs. She's the "Chief Medical Officer" of her family and is constantly juggling different plans and needs.
- **Her Pain Point:** "My dad needs a podiatrist. Does he need a referral from his primary care doctor first? I don't have time to wait on hold with the insurance company to find out."
- **Her Goal:** To have all her family's insurance plans in one app, so she can instantly check coverage details and find the right care without hassle.

## 3. The Minimum Viable Product (MVP) Scope

To deliver value as quickly as possible, our first version will be tightly focused on solving the most urgent user needs: finding covered care and understanding basic benefits.

### 3.1 What is IN for the MVP:

- **Core User Journey:** A user can add their insurance plan and immediately find in-network doctors and services.
- **Plan Management:** Support for Health, Dental, and Vision plans.
- **Provider Search:** A robust search engine to find providers by specialty and location, filtered by the user's plan.
- **Basic Benefit Visibility:** A dashboard showing core plan details like deductibles and coverage categories.
- **Proactive Education:** Gentle reminders and educational prompts about common preventive care.

### 3.2 What is explicitly OUT of the MVP (Future Iterations):

- **NO AI Chatbot:** The AI assistant is a key part of our long-term vision but is not required for the initial launch.
- **NO PDF/Document Upload:** Plan setup will be handled via a simplified dropdown selection process.
- **NO Claims or Appeals Assistance:** We will not handle any part of the claims submission or dispute process.
- **NO Appointment Booking:** The app will help users find care but will not integrate with provider scheduling systems.
- **NO Advanced Cost Optimization or Bill Review.**

## 4. Detailed Feature Requirements (MVP)

This section breaks down every screen and component required for our first version.

### EPIC 1: Onboarding & Insurance Plan Setup

The user's first experience must be seamless, fast, and build immediate confidence. A minimalist user onboarding design can significantly reduce the cognitive load for users.

**User Story:** As a new user, I want to add my insurance plan to the app in under 60 seconds so I can start getting value right away.

#### Functional Requirements:
- The app must provide a pre-populated list of major US and Canadian insurance carriers.
- Once a carrier is selected, the app must provide a list of common plan names associated with that carrier.
- Upon selection, the app must save this plan to the user's profile and make it the "active" plan for searching.

#### UI/UX Design Specification:

**Welcome Screen:** A single, clean screen with our logo and a clear value proposition: "Take control of your health benefits." Below this is a large, primary-colored button labeled "Get Started".

**Insurance Setup Flow:**
- **Screen 1: Select Your Carrier.** A screen titled "Who is your insurance provider?" with a search bar and a scrolling list of insurer logos (e.g., Cigna, Aetna, Sun Life, Manulife).
- **Screen 2: Select Your Plan.** A screen titled "Which plan do you have?" with a list of plan names (e.g., "Open Access Plus PPO," "Standard Extended Health").
- **Confirmation:** A success screen: "Great! Your Cigna plan has been added." with a button "Start Finding Care".

**Acceptance Criteria:** A user can successfully navigate the flow, select their plan, and land on the Home screen with their new plan active.

### EPIC 2: The Home Screen (Find Care)

This is the app's primary action hub. It must be intuitive and focused.

**User Story:** As a user, I want to quickly search for a type of doctor or service and see a list of covered options near me.

#### Functional Requirements:
- The screen must contain input fields for Service/Specialty, Location, and display the Active Insurance Plan.
- The "Find Care" button must trigger a search and navigate the user to the results screen.
- The screen must offer tappable shortcuts for the most common searches.

#### UI/UX Design Specification:

**Header:** A personalized greeting: "Welcome back, Bill".

**Search Card:** A prominent, white card with rounded corners and a soft shadow. It contains three distinct, tappable rows:
- **Search Input:** An icon of a magnifying glass next to the placeholder text "Condition, specialty, or doctor".
- **Location Input:** A location pin icon next to the text "Near me".
- **Insurance Display:** An insurance card icon next to the text of the user's active plan (e.g., "Cigna • Open Access Plus").

**Primary Action Button:** A full-width, vibrant yellow button labeled "Find Care".

**"Top Specialties" Section:** A grid of simple, tappable cards with icons for "Primary Care," "Dentist," "Vision," and "Mental Health."

**Acceptance Criteria:** A user can input "Podiatrist" into the search field, confirm their location and insurance, and successfully initiate a search by tapping the "Find Care" button.

### EPIC 3: Search Results & Provider Profiles

This is where the app delivers its core value: clarity on coverage.

**User Story:** As a user viewing search results, I want to instantly and easily identify which doctors are in my network to avoid unexpected costs.

#### Functional Requirements:
- The results list must be sorted to show in-network providers first.
- Each provider card must clearly state their network status.
- Tapping a provider card must navigate to a detailed profile screen.

#### UI/UX Design Specification:

**Search Results Screen:**
- The screen is titled with the search query (e.g., "Dentists near you").
- It contains a vertically scrolling list of `<ProviderCard>` components.

**The Critical UI Detail:**
- **In-Network Providers:** These cards have a distinct visual treatment. A soft teal badge with a checkmark icon and the text "✓ In-Network" is prominently displayed.
- **Out-of-Network Providers:** These cards have a grayed-out appearance and a gentle pink/red badge with a warning icon and the text "⚠️ Out-of-Network".

**Provider Profile Screen:** Displays the provider's photo, name, specialty, address (with a map view), phone number, and confirms again, "This provider is in your network."

**Acceptance Criteria:** When Bill searches for an eye doctor, the results list clearly shows "Dr. Smith" with a green "In-Network" badge and "LensCrafters" with a red "Out-of-Network" badge.

### EPIC 4: My Account & The Insurance Wallet

This is the user's control center for managing their data.

**User Story:** As a user with multiple types of insurance, I want one place where I can add and view my Health, Dental, and Vision plans.

#### Functional Requirements:
- The app must provide a dedicated section for managing insurance plans.
- The UI must clearly differentiate between Health, Dental, and Vision plan slots.
- The user must have a clear path to add a plan to an empty slot.

#### UI/UX Design Specification:

**Account Tab:** A simple, clean list of navigation items, with "Insurance" at the top.

**Insurance Wallet Screen:**
- Titled "Your Insurance Wallet".
- The screen is organized with clear headings: "Health," "Dental," "Vision."
- **If a plan is added:** A white card appears under the heading displaying the Plan Name and Member ID.
- **If a slot is empty:** A large, inviting, yellow button appears under the heading with the text "+ Add Dental Insurance". This design makes it obvious what the user should do next to complete their profile.

**Acceptance Criteria:** Brenda can navigate to her account, see her added Health plan, and tap the "+ Add Dental Insurance" button to begin the setup flow for her dental plan.

## 5. Success Metrics for MVP

We will measure the success of our MVP with these key performance indicators (KPIs):

- **Activation Rate:** The percentage of new users who successfully add at least one insurance plan within their first session. (Target: >70%)
- **Core Task Completion Rate:** The percentage of active users who perform at least one successful provider search per week. (Target: >50%)
- **App Store Rating:** Our initial rating in the App Stores. (Target: >4.5 stars)

## 6. Health Insurance Management App UX Design Brief

### Project Vision

Design a mobile application focused on helping users—especially older adults and those unfamiliar with insurance—understand and manage their health insurance benefits effectively. The app should be designed with accessibility in mind, incorporating features like adjustable text size and screen reader compatibility.

### Target Users

- Older adults with limited digital literacy.
- People unfamiliar with insurance terminology and processes.
- Anyone seeking simplified insurance management.

### Core User Problems

- Difficulty understanding coverage details.
- Uncertainty about in-network providers.
- Lack of awareness about unused benefits.
- Confusion around referral requirements.

### Design Principles

- **Elegant minimalism with intuitive navigation:** A simple, logical workflow is key, with frequently used functions in accessible locations to minimize clicks.
- **Accessible interface suitable for all ages:** This includes using large font sizes, high contrast between foreground and background colors, and clearly showing which elements are touchable.
- **Clear visual hierarchy and information presentation:** This helps users navigate complex information without feeling overwhelmed.
- Modular card-based layouts with rounded corners
- Soft gradient backgrounds and thoughtful accent colors
- Comfortable padding and spacing
- Consistent iconography

### Core User Journey

1. Onboard and select insurance plan.
2. Find in-network providers.
3. View coverage and deductible information.
4. Receive benefit usage reminders.

### Required Screens & Elements

#### 1. Onboarding Experience
- Visual introduction explaining app functionality.
- Primary CTA: "Get Started".
- Option to skip intro after first launch.

#### 2. Insurance Plan Selection
- Searchable dropdown of insurers and plans.
- Display for plan details (deductibles, copays, coverage categories).
- Edit/confirm plan information interface.
- Plan switching capability.

#### 3. Provider Search
- Search interface with filters (specialty, name, location).
- Network status filtering capability.
- Results displayed as cards showing:
  - Provider details (name, specialty, distance).
  - Network status with visual indicators.
  - Estimated costs when relevant.
  - Map preview and contact options.
- Bookmark functionality.

#### 4. Coverage Dashboard
- Visual representations of:
  - Deductible progress.
  - Out-of-pocket maximum status.
  - Remaining visit allocations.
  - Coverage percentages.
- Categorized benefits list with coverage details.

#### 5. Preventive Care Section
- Age/gender-appropriate preventive care checklist.
- Coverage indicators for each service.
- Interactive completion tracking.
- Educational tooltips about coverage details.

#### 6. Settings/Profile
- Profile management interface.
- Plan switching controls.
- Notification preferences.
- Privacy and terms access.

### Accessibility Requirements

- **Clear contrast ratios:** Text should have a color contrast ratio of at least 4.5:1.
- **Sufficient touch targets:** Interactive elements should have a touch target size of at least 48x48 dp.
- **Screen reader compatibility:** Ensure the app works well with screen readers to assist users with visual impairments.
- **Adjustable text sizing:** Allow users to resize text up to 200% without loss of content or functionality.
- Simple, direct language avoiding insurance jargon.

### Success Metrics

The design should enable users to:
- Configure their insurance plan with minimal friction.
- Easily identify in-network providers.
- Understand their coverage at a glance.
- Keep track of preventive care opportunities.
- Feel confident managing their benefits without insurance expertise.

## 7. Full Page-by-Page Breakdown for MVP Design

This breakdown lists the distinct screens/views the designer needs to create.

### Group 1: Onboarding & Setup

1. **Splash Screen:** (Optional but standard) App logo/name while loading.

2. **Onboarding Screen 1:** Welcome message, brief value proposition (e.g., "Understand Your Insurance Easily"). Visual element. Navigation dot (1 of X). Next button. Skip button.

3. **Onboarding Screen 2:** Highlight Feature 1 (e.g., "Find Doctors in Your Network"). Visual element. Navigation dot (2 of X). Next button. Skip button.

4. **Onboarding Screen 3:** Highlight Feature 2 (e.g., "Track Your Coverage & Limits"). Visual element. Navigation dot (3 of X). Next button. Skip button.

5. **Onboarding Screen 4:** Highlight Feature 3 (e.g., "Get Preventive Care Reminders"). Visual element. Navigation dot (4 of X). Get Started button.

6. **Insurance Plan - Selection Screen:** Title (e.g., "Select Your Insurance"). Searchable dropdown/list for Insurer. Conditional dropdown/list for Plan Type/Year. Continue/Next button (enabled after selection). Option for "I can't find my plan" (MVP might just show a message, no complex flow).

7. **Insurance Plan - Details Confirmation/Edit Screen:** Title (e.g., "Confirm Your Plan Details"). Displays pre-filled (or default) Deductible, OOP Max, common Co-pays. Simple editable fields for these key numbers. Basic category toggles/display (Dental: Yes/No, Vision: Yes/No). Confirm & Save Plan button. Back button.

8. **(Optional but Recommended) Profile Setup Screen:** Title (e.g., "A Little About You"). Simple fields for Age/Birth Year and Gender. Clear explanation: "This helps us suggest relevant preventive care." Save Profile / Skip button.

### Group 2: Core App Usage

9. **Dashboard (Home Screen):**
   - Greeting (e.g., "Hello [User]").
   - Selected Plan Name Display (non-interactive or links to Plan Details).
   - Visual Module 1: Deductible Progress (e.g., progress bar Used $X / Total $Y).
   - Visual Module 2: Out-of-Pocket Max Progress (similar visual).
   - Visual Module 3 (Optional): Quick summary of key usage limits (e.g., Card showing "Physio: 2/6 used", "Chiro: 0/10 used").
   - Quick Links/Cards: Buttons/Cards linking to "Find a Provider", "View Benefits", "Preventive Care Checklist".
   - (Bottom Navigation Bar - Persistent)

10. **Provider Search - Main Screen:**
    - Prominent Search Bar (placeholder: "Search provider, specialty...").
    - Filters button/icon.
    - Map View toggle/button (optional, could be integrated later).
    - List area for recent searches or popular specialties (optional).
    - (Bottom Navigation Bar)

11. **Provider Search - Filters Modal/Screen:**
    - Filter by Specialty (list/search).
    - Filter by Location (zip/city input, "Use Current Location" button).
    - **Crucial Filter:** "Network Status" (Toggle/Radio buttons: In-Network [Default], Out-of-Network, All).
    - Apply Filters button. Clear Filters button. Close/Done button.

12. **Provider Search - Results Screen:**
    - Displays list of providers as Cards.
    - Each Provider Card includes: Name, Specialty, Distance, **Prominent Network Status Badge (Color-coded)**, Bookmark Icon (toggle state).
    - Loading indicator while searching.
    - Empty state message ("No providers found matching your criteria.").
    - Map View (if implemented) showing pins for results.
    - (Bottom Navigation Bar)

13. **Provider Search - Provider Detail Screen:**
    - Full Provider Details: Name, Photo (if available), Specialty, Address (link to map), Phone (tap-to-call), Website (link).
    - **Prominent Network Status Badge.**
    - Office Hours (if available).
    - Bookmark Icon (reflecting saved state).
    - Back button.

14. **Coverage/Benefits - Overview Screen:** (Accessed from Dashboard or Nav)
    - Title (e.g., "Your Benefits").
    - Displays key co-pay/coinsurance rates prominently (e.g., Primary Visit: $20 Copay, Specialist: 30% Coinsurance).
    - Categorized list of benefits (Primary Care, Specialists, Hospital, Mental Health, Dental, Vision, Pharmacy, etc.). Each item might show a simple coverage indicator (e.g., "Covered", "Check Details", "Not Covered").
    - Link/Tap to view more details for a category (optional for MVP, could just be informational list).
    - (Bottom Navigation Bar)

15. **Preventive Care - Checklist Screen:** (Accessed from Dashboard or Nav)
    - Title (e.g., "Preventive Care").
    - Brief explanation of importance.
    - List of recommended services based on profile (e.g., Flu Shot, Annual Physical, Eye Exam, Colonoscopy).
    - For each item: Service Name, Recommended Frequency, Coverage Indication ("Likely Covered"), Checkbox (user marks completion).
    - Visual progress indicator (e.g., "You've completed X of Y recommended tasks").
    - (Bottom Navigation Bar)

### Group 3: Settings & Profile

16. **Settings - Main Screen:**
    - Title ("Settings").
    - Link to Profile (Age, Gender).
    - Link to Insurance Plan (View/Change).
    - Link/Toggle for Notification Preferences.
    - Link to Privacy Policy.
    - Link to Terms of Service.
    - Link to Help/Support (optional MVP).
    - App Version info.
    - (Bottom Navigation Bar)

17. **Settings - Profile Screen:**
    - Editable fields for Age/Gender (as set up initially). Save button.

18. **Settings - Insurance Plan Screen:**
    - Displays currently selected plan details (summary).
    - Change Plan button (returns user to Plan Selection Screen).

19. **Settings - Notification Preferences Screen:**
    - Simple toggle: "Enable Preventive Care Reminders" (On/Off).

20. **Settings - Legal Text Screen (Privacy/Terms):**
    - Standard scrollable text view displaying the relevant policy. Back/Done button.

### Group 4: Common Elements/States (Need Design)

21. **Bottom Navigation Bar:** Consistent component with 3-5 icons/labels for key sections (e.g., Dashboard, Providers, Benefits, Preventive, Settings). Clear indication of the active tab.

22. **Push Notification Banner/Alert Design:** How notifications appear on the device.

23. **Loading State:** Indicator used when data is being fetched (e.g., spinner, skeleton screen).

24. **Empty State:** Design for screens before data is entered or when searches yield no results (e.g., Dashboard before plan setup, empty search results).

25. **Error State:** Design for when something goes wrong (e.g., network error, data fetch failure). Needs clear message and potentially a retry option.

This detailed breakdown should give the UX designer a clear blueprint of all the necessary screens and their core components for the MVP.

**Goal:** Create a design system that is clean, accessible (WCAG AA+), intuitive for older adults, and trustworthy.

---

## Document Control

- **Author:** Lead Product Manager
- **Last Updated:** July 26, 2025
- **Next Review:** Post-MVP Launch
- **Distribution:** Development Team, Design Team, Stakeholders