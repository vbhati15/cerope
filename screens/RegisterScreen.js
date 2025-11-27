// Register Screen Component
// Allows new users to create an account
// Validates input and saves user data to local storage

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen({ navigation }) {
  // State variables to store user input and form errors
  const [email, setEmail] = useState(''); // User's email address
  const [password, setPassword] = useState(''); // User's password
  const [confirmPassword, setConfirmPassword] = useState(''); // Password confirmation
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle confirm password visibility
  const [agreedToTerms, setAgreedToTerms] = useState(false); // Terms of service checkbox state
  const [passwordError, setPasswordError] = useState(''); // Error message for password field
  const [confirmPasswordError, setConfirmPasswordError] = useState(''); // Error message for confirm password field

  // Validate all form fields before registration
  // Returns error message if validation fails, null if all fields are valid
  const validate = () => {
    // Clear previous error messages
    setPasswordError('');
    setConfirmPasswordError('');
    
    // Check if all required fields are filled
    if (!email || !password || !confirmPassword) {
      return 'All fields are required';
    }
    
    // Validate email format using regex
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      return 'Invalid email';
    }
    
    // Check password length (must be at least 6 characters)
    if (password.length < 6) {
      setPasswordError('Check Again!');
      return 'Password must be at least 6 characters';
    }
    
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setPasswordError('Check Again!');
      setConfirmPasswordError('Check Again!');
      return 'Passwords do not match';
    }
    
    // Check if user agreed to terms of service
    if (!agreedToTerms) {
      return 'Please agree to the Terms of Service & Privacy Policy';
    }
    
    // All validations passed
    return null;
  };

  // Handle registration button click
  // Validates form, saves user data, and navigates to login screen
  const handleRegister = async () => {
    // Log registration attempt (for debugging)
    console.log('Sign Up button clicked');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Agreed to Terms:', agreedToTerms);
    
    // Validate all form fields
    const err = validate();
    if (err) {
      console.log('Validation error:', err);
      Alert.alert('Validation error', err);
      return;
    }
    
    try {
      console.log('Saving user to AsyncStorage...');
      // Store user data locally (no backend - for demo purposes)
      // In a real app, this would send data to a server
      await AsyncStorage.setItem('user', JSON.stringify({ email, password }));
      console.log('User saved successfully');
      
      // Navigate to Login screen after successful registration
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving user:', error);
      Alert.alert('Error', 'Failed to create account. Please try again.');
    }
  };

  // Handle password field changes
  // Updates password and checks if it matches confirm password in real-time
  const handlePasswordChange = (text) => {
    setPassword(text);
    // If confirm password is already entered, check if they match
    if (confirmPassword && text !== confirmPassword) {
      setPasswordError('Check Again!');
      setConfirmPasswordError('Check Again!');
    } else {
      // Clear errors if passwords match
      setPasswordError('');
      setConfirmPasswordError('');
    }
  };

  // Handle confirm password field changes
  // Updates confirm password and checks if it matches password in real-time
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    // If password is already entered, check if they match
    if (password && text !== password) {
      setPasswordError('Check Again!');
      setConfirmPasswordError('Check Again!');
    } else {
      // Clear errors if passwords match
      setPasswordError('');
      setConfirmPasswordError('');
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
          end={[1, 1]} // Diagonal gradient direction (135.07deg equivalent)
          locations={[0, 0.8916]} // Gradient color stops
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 60 }}
        >
          {/* App Logo - Stylized S shape from Figma design */}
          <View style={{ width: 80, height: 80, marginBottom: 16, alignItems: 'center', justifyContent: 'center' }}>
            <Image 
              source={require('../assets/images/Vector.png')} 
              style={{ width: 80, height: 80, resizeMode: 'contain' }}
            />
          </View>
          {/* App Name */}
          <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 28, color: '#FFFFFF' }}>Cerope</Text>
        </LinearGradient>
      </View>

      {/* ========== REGISTRATION FORM SECTION ========== */}
      {/* White card containing the registration form */}
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
        <Image 
          source={require('../assets/images/blur.png')} 
          style={{ 
            position: 'absolute',
            width: 369,
            height: 492,
            top: 333,
            left: 12,
            borderRadius: 10,
            opacity: 0.06, // Very low opacity for subtle effect
            resizeMode: 'cover'
          }}
        />
        
        {/* Registration Title */}
        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 24, color: '#000000', textAlign: 'center', marginBottom: 8 }}>
          Create Your Account!
        </Text>
        {/* Subtitle */}
        <Text style={{ fontFamily: 'Nunito', fontSize: 12.8, color: '#4B5563', textAlign: 'center', marginBottom: 24 }}>
          Your personalized fashion journey awaits.
        </Text>

        {/* Form Fields Container - Centered with max width */}
        <View style={{ width: '100%', maxWidth: 344, alignSelf: 'center' }}>
          {/* Email Address Input Field */}
          <Input 
            label="Email Address" 
            value={email} 
            onChangeText={setEmail} 
            placeholder="Email Address"
          />
          
          {/* Password Input Field */}
          <View style={{ width: '100%', marginBottom: 12 }}>
            <Text style={{ fontFamily: 'Nunito', fontSize: 12, color: '#4B5563', marginBottom: 6 }}>Password</Text>
            <View style={{ position: 'relative' }}>
              <TextInput
                value={password}
                onChangeText={handlePasswordChange} // Validates password match in real-time
                placeholder="Password"
                secureTextEntry={!showPassword} // Hide/show password based on state
                placeholderTextColor="#9CA3AF"
                style={{
                  width: '100%',
                  height: 40,
                  paddingHorizontal: 16,
                  paddingRight: 40, // Extra padding for eye icon
                  borderRadius: 9.6,
                  borderWidth: 1,
                  borderColor: passwordError ? '#EF4444' : '#808080', // Red border if error
                  fontFamily: 'Nunito',
                  fontSize: 14,
                  backgroundColor: '#FFFFFF'
                }}
              />
              {/* Eye icon to toggle password visibility */}
              <TouchableOpacity 
                onPress={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: 12, top: 10, width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}
              >
                <Text style={{ fontSize: 18, color: '#4D00FF' }}>
                  {showPassword ? '👁' : '👁‍🗨'}
                </Text>
              </TouchableOpacity>
            </View>
            {/* Display error message if password is invalid */}
            {passwordError ? (
              <Text style={{ color: '#EF4444', fontSize: 12, marginTop: 6, fontFamily: 'Nunito' }}>
                {passwordError}
              </Text>
            ) : null}
          </View>

          {/* Confirm Password Input Field */}
          <View style={{ width: '100%', marginBottom: 12 }}>
            <Text style={{ fontFamily: 'Nunito', fontSize: 12, color: '#4B5563', marginBottom: 6 }}>Confirm Password</Text>
            <View style={{ position: 'relative' }}>
              <TextInput
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange} // Validates password match in real-time
                placeholder="Confirm Password"
                secureTextEntry={!showConfirmPassword} // Hide/show password based on state
                placeholderTextColor="#9CA3AF"
                style={{
                  width: '100%',
                  height: 40,
                  paddingHorizontal: 16,
                  paddingRight: 40, // Extra padding for eye icon
                  borderRadius: 9.6,
                  borderWidth: 1,
                  borderColor: confirmPasswordError ? '#EF4444' : '#808080', // Red border if error
                  fontFamily: 'Nunito',
                  fontSize: 14,
                  backgroundColor: '#FFFFFF'
                }}
              />
              {/* Eye icon to toggle password visibility */}
              <TouchableOpacity 
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ position: 'absolute', right: 12, top: 10, width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}
              >
                <Text style={{ fontSize: 18, color: '#4D00FF' }}>
                  {showConfirmPassword ? '👁' : '👁‍🗨'}
                </Text>
              </TouchableOpacity>
            </View>
            {/* Display error message if passwords don't match */}
            {confirmPasswordError ? (
              <Text style={{ color: '#EF4444', fontSize: 12, marginTop: 6, fontFamily: 'Nunito' }}>
                {confirmPasswordError}
              </Text>
            ) : null}
          </View>

          {/* Terms of Service Checkbox */}
          {/* User must agree to terms before registering */}
          <TouchableOpacity 
            onPress={() => setAgreedToTerms(!agreedToTerms)}
            style={{ 
              flexDirection: 'row', 
              alignItems: 'flex-start', 
              width: '100%', 
              marginBottom: 24,
              marginTop: 8
            }}
          >
            <View style={{
              width: 20,
              height: 20,
              borderWidth: 2,
              borderColor: agreedToTerms ? '#000' : '#808080',
              borderRadius: 4,
              marginRight: 8,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: agreedToTerms ? '#000' : '#FFFFFF'
            }}>
              {/* Checkmark when checked */}
              {agreedToTerms && (
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>✓</Text>
              )}
            </View>
            <Text style={{ fontFamily: 'Nunito', fontSize: 12, color: '#4B5563', flex: 1 }}>
              I agree to Cerope's{' '}
              <Text style={{ color: '#4D00FF' }}>Terms of Service & Privacy Policy</Text>
            </Text>
          </TouchableOpacity>

          {/* Sign Up Button - Triggers handleRegister function */}
          <View style={{ width: '100%' }}>
            <Button title="Sign Up" onPress={handleRegister} />
          </View>

          {/* Login Link - Navigate to login screen for existing users */}
          <TouchableOpacity 
            onPress={() => navigation.navigate('Login')} 
            style={{ marginTop: 16 }}
          >
            <Text style={{ fontFamily: 'Nunito', fontSize: 11.2, color: '#000' }}>
              Have an account? <Text style={{ color: '#4D00FF' }}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
