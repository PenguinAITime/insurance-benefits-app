# Insurance Benefits Navigator

A modern React Native application designed to help users navigate their insurance benefits with ease. Built with TypeScript, Redux Toolkit, and NativeWind.

🔗 **Repository**: [https://github.com/PenguinAITime/insurance-benefits-app](https://github.com/PenguinAITime/insurance-benefits-app)

## 🚀 Features

- **Find Care**: Search for in-network providers by specialty, location, and insurance plan
- **Wellness Guide**: Personalized wellness recommendations and preventive care reminders
- **AI Assistant**: Smart insurance assistant to answer questions about coverage and benefits
- **Insurance Wallet**: Digital storage for insurance cards and important documents

## 🛠️ Tech Stack

- **React Native 0.80.2** - Cross-platform mobile development
- **TypeScript** - Type-safe development with strict mode
- **Redux Toolkit & RTK Query** - State management and API calls
- **React Navigation** - Navigation with bottom tabs
- **NativeWind** - Tailwind CSS for React Native
- **React Native Paper** - Material Design 3 components

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── features/        # Feature-based modules
│   ├── account/     # Account management
│   ├── ai-assistant/# AI chat assistant
│   ├── home/        # Home/Find Care screen
│   └── wellness-guide/ # Wellness recommendations
├── navigation/      # Navigation configuration
├── services/        # API services with RTK Query
├── store/          # Redux store configuration
├── theme/          # Theme and styling
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## 🚦 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- React Native development environment set up
- Android Studio / Xcode (for device testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PenguinAITime/insurance-benefits-app.git
cd insurance-benefits-app
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS dependencies (macOS only):
```bash
cd ios && pod install && cd ..
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## 🧪 Development Scripts

```bash
# Type checking
npm run typecheck

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Run all checks
npm run check-all

# Testing
npm test
```

## 🎨 Design System

The app uses a vibrant, accessible color palette:

- **Primary**: #FFD700 (Vibrant Yellow)
- **Secondary**: #4FD1C5 (Soft Teal)
- **Tertiary**: #F687B3 (Gentle Pink)
- **Text**: #2D3748 (Charcoal)
- **Background**: #F7FAFC (Soft Gray)

## 📱 Screens

### Home (Find Care)
- Search for providers by specialty
- Location-based search
- Insurance plan selection
- Plan overview with deductible tracking

### Wellness Guide
- Personalized wellness tips
- Preventive care reminders
- Health tracking features

### AI Assistant
- Chat interface for insurance questions
- Coverage explanations
- Claim assistance

### My Account
- Insurance wallet
- Digital insurance cards
- Personal information management

## 🔧 Configuration

### Path Aliases

The project uses path aliases for cleaner imports:

```typescript
import { Button } from '@components/common';
import { useAppSelector } from '@store/hooks';
```

### Linting & Formatting

- ESLint with TypeScript and React Native rules
- Prettier for consistent code formatting
- Husky pre-commit hooks (currently disabled for Windows compatibility)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with React Native and the amazing open-source community
- Design inspired by modern healthcare UX patterns
- Icons from Feather Icons