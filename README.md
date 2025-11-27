# Cerope - Personalized Fashion Journey App

A modern, cross-platform fashion application built with React Native and Expo. Cerope helps users discover personalized fashion recommendations, plan weekly outfits, and explore trending styles with AI-powered suggestions.

## 🏗️ Architecture

This project is built as a **React Native App** using Expo framework, providing a unified codebase that runs seamlessly on iOS, Android, and Web platforms. The architecture follows a component-based structure with clear separation of concerns between screens, components, and navigation logic.

## 🎨 UI Implementation

The UI has been meticulously recreated from Figma designs, ensuring pixel-perfect accuracy and maintaining design consistency across all screens. The implementation includes:

- **Responsive Mobile Layouts**: All screens are designed with mobile-first approach, ensuring optimal viewing experience on various screen sizes
- **Figma Design Fidelity**: Every screen, component, and interaction matches the original Figma designs
- **Adaptive Components**: UI components adapt seamlessly between mobile and web platforms
- **Consistent Design System**: Unified color palette, typography, spacing, and component styles throughout the app

## 🎨 Features

- **User Authentication**
  - Secure registration and login system
  - Email and password validation
  - Remember me functionality
  - Local data storage using AsyncStorage

- **Home Screen**
  - Weekly outfit calendar planner
  - Trend of the Month showcase with interactive product cards
  - Body Shape and Skin Color analysis cards
  - AI-powered outfit recommendations
  - Search functionality with StyleBot integration

- **Profile Management**
  - User profile display
  - Menu options for orders, saved items, settings, and support

- **Beautiful UI/UX**
  - Gradient headers with pink-to-blue color scheme
  - Responsive design optimized for mobile and web
  - Smooth navigation between screens
  - Modern, clean interface matching Figma designs

## 🛠️ Tech Stack

- **Architecture**: React Native App
- **Framework**: React Native with Expo SDK 48
- **Language**: JavaScript (ES6+)
- **Navigation**: React Navigation (Native Stack)
- **Styling**: NativeWindCSS (Tailwind CSS for React Native) - Preferred for UI designing
- **Additional Styling**: React Native StyleSheet with Linear Gradients for complex gradients
- **Fonts**: Nunito (Regular & Bold) via @expo-google-fonts
- **Storage**: AsyncStorage for local data persistence
- **Platform Support**: iOS, Android, and Web

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (installed globally or via npx)
- For iOS development: Xcode (macOS only)
- For Android development: Android Studio

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cerope
```

2. Install dependencies:
```bash
npm install
```

3. Apply patches (if needed):
```bash
npm run postinstall
```

### Running the App

#### Start the development server:
```bash
npm start
# or
npx expo start
```

#### Run on specific platforms:

**Web:**
```bash
npm run web
# or
npx expo start --web
```

**Android:**
```bash
npm run android
# or
npx expo start --android
```

**iOS:**
```bash
npm run ios
# or
npx expo start --ios
```

## 📁 Project Structure

```
cerope/
├── App.js                 # Main app entry point with navigation setup
├── assets/
│   ├── images/           # Image assets (logos, backgrounds, product images)
│   └── icons/            # Icon assets
├── components/
│   ├── Button.js         # Reusable button component
│   └── Input.js          # Reusable input field component
├── screens/
│   ├── RegisterScreen.js # User registration screen
│   ├── LoginScreen.js    # User login screen
│   ├── HomeScreen.js     # Main home screen with all features
│   └── ProfileScreen.js  # User profile screen
├── navigation/
│   └── AppNavigator.js   # Navigation configuration
├── patches/              # Patch files for node modules
├── babel.config.js       # Babel configuration
├── package.json          # Project dependencies and scripts
└── README.md            # This file
```

## 🎯 Key Screens

### Register Screen
- Email and password registration
- Password confirmation with real-time validation
- Terms of Service agreement checkbox
- Beautiful gradient header with logo

### Login Screen
- Email/phone and password login
- Remember me option
- Forgot password link
- Google login option
- Language selector

### Home Screen
- **Header**: App header with centered profile icon
- **Search**: StyleBot search bar with camera icon
- **Weekly Calendar**: Outfit planning calendar
- **Trend of the Month**: Three overlapping product cards (Chic, Party, Casual)
- **Analysis Cards**: Body Shape and Skin Color analysis with gradient backgrounds
- **AI Recommendations**: Tabbed interface for Individual Pieces and Complete Outfits
- **Content Sections**: Additional fashion content images
- **Bottom Navigation**: Fixed navigation bar with app sections

### Profile Screen
- User profile information
- Menu options: My Orders, Saved Items, Settings, Help & Support
- Gradient header with back navigation

## 💻 Language & Code Standards

This project is written entirely in **JavaScript (ES6+)** following modern JavaScript best practices:

- **ES6+ Features**: Arrow functions, destructuring, template literals, async/await
- **Component Structure**: Functional components with React Hooks
- **Code Style**: Consistent naming conventions and code formatting
- **Comments**: Comprehensive inline comments for better code maintainability

## 🔧 Development Notes

### Font Loading
The app uses Nunito font family loaded via `@expo-google-fonts/nunito`. Fonts are loaded asynchronously and the app shows a loading indicator on mobile platforms while fonts load.

### Error Handling
The app includes an ErrorBoundary component to catch and display errors gracefully, preventing the entire app from crashing.

### Platform-Specific Code
The app includes platform-specific handling for:
- SafeAreaView (mobile) vs View (web)
- Font loading behavior
- Navigation positioning

### Data Storage
User registration data is stored locally using AsyncStorage. In a production environment, this should be replaced with a backend API.

### Styling with NativeWindCSS

This project uses **NativeWindCSS** (Tailwind CSS for React Native) as the preferred styling approach for UI design. NativeWindCSS provides:

- **Utility-First CSS**: Rapid UI development using Tailwind utility classes
- **Consistent Design System**: Pre-defined spacing, colors, and typography scales
- **Responsive Design**: Built-in responsive utilities for mobile-first development
- **Performance**: Optimized CSS that compiles to efficient React Native styles

**Styling Guidelines:**
- Use NativeWindCSS utility classes for standard UI components and layouts
- Use React Native StyleSheet for complex gradients and platform-specific styling
- Maximum width of 395px for content to prevent stretching on web
- Responsive design that works on both mobile and web
- Consistent color scheme: Purple (#4D00FF), Pink (#FD90D1), Blue (#78ACF9)

**Example NativeWindCSS Usage:**
```jsx
import { View, Text } from 'react-native';

// Using NativeWindCSS classes
<View className="flex-1 bg-white p-4">
  <Text className="text-lg font-bold text-purple-600">
    Hello World
  </Text>
</View>
```

## 📝 Available Scripts

- `npm start` - Start the Expo development server
- `npm run web` - Start the app in web browser
- `npm run android` - Start the app on Android emulator/device
- `npm run ios` - Start the app on iOS simulator/device
- `npm run postinstall` - Apply patches to node modules

## 🐛 Known Issues

- User data is stored locally (AsyncStorage) - not suitable for production
- Google login button is currently a placeholder (no actual OAuth implementation)
- Forgot password functionality is not implemented

## 🔮 Future Enhancements

- Backend API integration for user authentication
- Real Google OAuth implementation
- Forgot password functionality
- Push notifications
- Social sharing features
- Enhanced AI recommendations
- Shopping cart and checkout functionality

## 📄 License

This project is private and proprietary.
