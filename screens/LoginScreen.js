// Login Screen Component
// Allows existing users to sign in with their email/password
// Validates credentials and navigates to Home screen on success

import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Alert, TouchableOpacity, TextInput } from 'react-native';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  // State variables to store user input and form errors
  const [email, setEmail] = useState(''); // User's email or phone number
  const [password, setPassword] = useState(''); // User's password
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [rememberMe, setRememberMe] = useState(false); // Remember me checkbox state
  const [emailError, setEmailError] = useState(''); // Error message for email field
  const [passwordError, setPasswordError] = useState(''); // Error message for password field

  // Handle login button click
  // Validates user input and checks credentials against stored user data
  const handleLogin = async () => {
    // Clear any previous error messages
    setEmailError('');
    setPasswordError('');
    
    // Check if all fields are filled
    if (!email || !password) {
      Alert.alert('Validation', 'Please fill all fields');
      return;
    }
    
    // Validate email format (must be valid email or 10-digit phone number)
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/;
    
    if (!emailRegex.test(email) && !phoneRegex.test(email)) {
      setEmailError('Invalid Mail');
      return;
    }
    
    // Validate password length (must be at least 6 characters)
    if (password.length < 6) {
      setPasswordError('Invalid Password');
      return;
    }
    
    try {
      // Retrieve stored user data from local storage
      const s = await AsyncStorage.getItem('user');
      if (!s) {
        Alert.alert('Not found', 'No user found. Please register first.');
        return;
      }
      const user = JSON.parse(s);
      
      // Check if email matches stored email
      if (user.email !== email && user.email !== email) {
        setEmailError('Invalid Mail');
        return;
      }
      
      // Check if password matches stored password
      if (user.password !== password) {
        setPasswordError('Invalid Password');
        return;
      }
      
      // If all checks pass, navigate to Home screen
      navigation.replace('Home');
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'Failed to login. Please try again.');
    }
  };

  return (
    <ScrollView 
      contentContainerStyle={{ 
        flexGrow: 1,
        backgroundColor: '#FFFFFF'
      }}
      style={{ flex: 1 }}
    >
      {/* ========== GRADIENT HEADER SECTION ========== */}
      {/* Pink to blue diagonal gradient header with logo and app name */}
      <View style={{ height: 358, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, overflow: 'hidden', maxWidth: 395, alignSelf: 'center', width: '100%' }}>
        <LinearGradient
          colors={['#FD90D1', '#78ACF9']} // Pink to blue gradient
          start={[0, 0]}
          end={[1, 1]} // Diagonal gradient direction
          locations={[0, 0.8916]} // Gradient color stops
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 60 }}
        >
          {/* App Logo - Stylized S shape */}
          <View style={{ width: 80, height: 80, marginBottom: 16, alignItems: 'center', justifyContent: 'center' }}>
            <Image 
              source={require('../assets/images/Vector.png')} 
              style={{ width: 80, height: 80, resizeMode: 'contain', tintColor: '#000000' }}
            />
          </View>
          {/* App Name */}
          <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 28, color: '#000000' }}>Cerope</Text>
        </LinearGradient>
      </View>

      {/* ========== LOGIN FORM SECTION ========== */}
      {/* White card containing the login form */}
      <View style={{ 
        backgroundColor: '#FFFFFF', 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        marginTop: -20, // Overlaps with header for seamless transition
        paddingTop: 24,
        paddingHorizontal: 16,
        paddingBottom: 40,
        flex: 1,
        maxWidth: 395,
        alignSelf: 'center',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative blur background image (very subtle) */}
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
          <Image 
            source={require('../assets/images/blur.png')} 
            style={{ 
              width: 369,
              height: 492,
              position: 'absolute',
              top: 333,
              left: 12,
              borderRadius: 10,
              opacity: 0.06, // Very low opacity for subtle effect
              resizeMode: 'cover'
            }}
          />
        </View>
        
        {/* Language Selector - Top right corner */}
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 16, zIndex: 1 }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Nunito', fontSize: 12, color: '#4B5563', marginRight: 4 }}>English (UK)</Text>
            <Text style={{ fontSize: 12 }}>▼</Text>
          </TouchableOpacity>
        </View>

        {/* Welcome Message */}
        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 24, color: '#000000', textAlign: 'center', marginBottom: 8, zIndex: 1 }}>
          Welcome Back To Cerope
        </Text>
        {/* Subtitle */}
        <Text style={{ fontFamily: 'Nunito', fontSize: 12.8, color: '#4B5563', textAlign: 'center', marginBottom: 24, zIndex: 1 }}>
          Your personalized fashion journey awaits.
        </Text>

        {/* Form Fields Container - Centered with max width */}
        <View style={{ width: '100%', maxWidth: 344, alignSelf: 'center', zIndex: 1 }}>
          {/* Email/Phone Input Field */}
          <View style={{ width: '100%', marginBottom: 12 }}>
            <View style={{ position: 'relative' }}>
              <TextInput
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailError(''); // Clear error when user types
                }}
                placeholder="Email address or mobile number"
                placeholderTextColor="#9CA3AF"
                style={{
                  width: '100%',
                  height: 40,
                  paddingHorizontal: 16,
                  borderRadius: 9.6,
                  borderWidth: 1,
                  borderColor: emailError ? '#EF4444' : '#808080', // Red border if error
                  fontFamily: 'Nunito',
                  fontSize: 14,
                  backgroundColor: '#FFFFFF'
                }}
              />
            </View>
            {/* Display error message if email is invalid */}
            {emailError ? (
              <Text style={{ color: '#EF4444', fontSize: 12, marginTop: 6, fontFamily: 'Nunito' }}>
                {emailError}
              </Text>
            ) : null}
          </View>

          {/* Password Input Field */}
          <View style={{ width: '100%', marginBottom: 12 }}>
            <View style={{ position: 'relative' }}>
              <TextInput
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError(''); // Clear error when user types
                }}
                placeholder="Password"
                secureTextEntry={!showPassword} // Hide/show password based on state
                placeholderTextColor="#9CA3AF"
                style={{
                  width: '100%',
                  height: 40,
                  paddingHorizontal: 16,
                  paddingRight: 40, // Extra padding for icon
                  borderRadius: 9.6,
                  borderWidth: 1,
                  borderColor: passwordError ? '#EF4444' : '#808080', // Red border if error
                  fontFamily: 'Nunito',
                  fontSize: 14,
                  backgroundColor: '#FFFFFF'
                }}
              />
              {/* Password icon on the right side */}
              <View style={{ position: 'absolute', right: 12, top: 10, width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Image 
                  source={require('../assets/images/Icon.png')} 
                  style={{ width: 20, height: 20, resizeMode: 'contain' }}
                />
              </View>
            </View>
            {/* Display error message if password is invalid */}
            {passwordError ? (
              <Text style={{ color: '#EF4444', fontSize: 12, marginTop: 6, fontFamily: 'Nunito' }}>
                {passwordError}
              </Text>
            ) : null}
          </View>

          {/* Remember Me Checkbox and Forgot Password Link */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            {/* Remember Me Checkbox */}
            <TouchableOpacity 
              onPress={() => setRememberMe(!rememberMe)}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <View style={{
                width: 20,
                height: 20,
                borderWidth: 2,
                borderColor: rememberMe ? '#000' : '#808080',
                borderRadius: 4,
                marginRight: 8,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: rememberMe ? '#000' : '#FFFFFF'
              }}>
                {/* Checkmark when checked */}
                {rememberMe && (
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>✓</Text>
                )}
              </View>
              <Text style={{ fontFamily: 'Nunito', fontSize: 12, color: '#4B5563' }}>Remember me</Text>
            </TouchableOpacity>
            
            {/* Forgot Password Link */}
            <TouchableOpacity>
              <Text style={{ fontFamily: 'Nunito', fontSize: 12, color: '#4D00FF' }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button - Triggers handleLogin function */}
          <View style={{ width: '100%', marginBottom: 16 }}>
            <Button title="Login" onPress={handleLogin} />
          </View>

          {/* OR Separator - Visual divider between login methods */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, justifyContent: 'center' }}>
            <Image 
              source={require('../assets/images/div.png')} 
              style={{ width: '100%', height: 1, resizeMode: 'contain' }}
            />
          </View>

          {/* Google Login Button - Alternative login method */}
          <TouchableOpacity 
            style={{
              width: '100%',
              height: 40,
              borderRadius: 9.6,
              borderWidth: 0.8,
              borderColor: '#000000',
              marginBottom: 16,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
              flexDirection: 'row'
            }}
          >
            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 14, color: '#000000' }}>G</Text>
            <Text style={{ fontFamily: 'Nunito', fontSize: 14, color: '#000000' }}> Google</Text>
          </TouchableOpacity>

          {/* Sign Up Link - Navigate to registration screen */}
          <TouchableOpacity 
            onPress={() => navigation.navigate('Register')} 
            style={{ alignItems: 'center' }}
          >
            <Text style={{ fontFamily: 'Nunito', fontSize: 11.2, color: '#000' }}>
              Don't have an account? <Text style={{ color: '#4D00FF' }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

