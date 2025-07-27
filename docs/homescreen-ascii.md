# HomeScreen ASCII Visualization

This is a visual representation of the current HomeScreen implementation:

```
┌─────────────────────────────────────┐
│  Welcome back, Sarah                │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ 🔍 Condition, specialty, or...  │ │
│ │─────────────────────────────────│ │
│ │ 📍 Near me                    ▶ │ │
│ │─────────────────────────────────│ │
│ │ 💳 Cigna Open Access Plus     ▶ │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │        Find Care                │ │
│ └─────────────────────────────────┘ │
│                                     │
│  Or start with a specialty          │
│                                     │
│ ┌───────────────┐ ┌───────────────┐ │
│ │      ❤️       │ │      😊       │ │
│ │ Primary Care  │ │   Dentist     │ │
│ └───────────────┘ └───────────────┘ │
│                                     │
│ ┌───────────────┐ ┌───────────────┐ │
│ │      👁️       │ │      🧠       │ │
│ │    Vision     │ │ Mental Health │ │
│ └───────────────┘ └───────────────┘ │
│                                     │
│  Your Plan Overview                 │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Deductible                      │ │
│ │ $1,250 / $3,000 used            │ │
│ │ ████████░░░░░░░░░░░░ 41%        │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Out-of-Pocket Max               │ │
│ │ $1,800 / $6,500 reached         │ │
│ │ █████░░░░░░░░░░░░░░░ 27%        │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ 💡 Did You Know?                │ │
│ │ Your plan covers one eye exam   │ │
│ │ every 24 months at no cost.     │ │
│ └─────────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘

[🔍 Find Care] [❤️ Wellness] [💬 Ask AI] [👤 Account]
```

## Key Visual Elements

- **Yellow primary button** (Find Care) - #FFD700
- **White cards** with subtle shadows
- **Teal progress bars** - #4FD1C5
- **Colored icon backgrounds** in specialty cards:
  - Teal background (Primary Care) - bg-teal-50
  - Pink background (Dentist) - bg-pink-50
  - Purple background (Vision) - bg-purple-50
  - Blue background (Mental Health) - bg-blue-50
- **Light gray background** - #F7FAFC
- **Bottom tab navigation** with yellow active state

## Features Implemented

1. **Personalized Greeting**: "Welcome back, {userName}"
2. **Search Card**: Three-row interactive search with specialty, location, and insurance plan
3. **Find Care Button**: Primary CTA with loading state
4. **Top Specialties**: 2x2 grid of quick-access specialty cards
5. **Plan Overview**: Deductible and out-of-pocket progress tracking
6. **Health Tips**: Rotating health tips that change every 5 seconds

All interactive elements are fully functional with proper state management and user feedback.