// Main App Entry Point
// This file sets up the navigation and loads fonts for the entire application

import React from 'react';
import { View, ActivityIndicator, Platform, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

// Create a stack navigator to handle screen navigation
const Stack = createNativeStackNavigator();

// Error Boundary Component
// This catches any errors that occur in the app and displays a friendly error message
// instead of crashing the entire app
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Something went wrong</Text>
          <Text style={{ fontSize: 12, color: '#666' }}>{this.state.error?.toString()}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

// Main App Component
// This is the root component that loads fonts and sets up navigation
export default function App() {
  // Load Nunito font family (regular and bold) for use throughout the app
  const [fontsLoaded, fontError] = useFonts({
    'Nunito': Nunito_400Regular,
    'Nunito-Bold': Nunito_700Bold
  });

  // Log font loading status in development mode only
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    console.log('Fonts loaded:', fontsLoaded, 'Font error:', fontError);
  }

  // Show loading spinner while fonts are loading (only on mobile, web loads fonts asynchronously)
  if (!fontsLoaded && Platform.OS !== 'web') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // Use regular View on web, SafeAreaView on mobile to handle notches/safe areas
  const Container = Platform.OS === 'web' ? View : SafeAreaView;
  
  return (
    <ErrorBoundary>
      <Container style={{ flex: 1, backgroundColor: '#fff', minHeight: '100vh' }}>
        {/* Navigation Container - Manages all screen navigation */}
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{ headerShown: false }}
            initialRouteName="Register"
          >
            {/* Register Screen - First screen users see when opening the app */}
            <Stack.Screen name="Register" component={RegisterScreen} />
            {/* Login Screen - For existing users to sign in */}
            <Stack.Screen name="Login" component={LoginScreen} />
            {/* Home Screen - Main app screen after login */}
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* Profile Screen - User profile and settings */}
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </ErrorBoundary>
  );
}
