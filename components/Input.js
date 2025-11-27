// Input Component
// Reusable text input component matching Figma design specifications
// Supports labels, placeholders, password fields, and error messages
// Used in registration and login forms

import React from 'react';
import { TextInput, View, Text } from 'react-native';

export default function Input({ label, value, onChangeText, placeholder, secureTextEntry, error }) {
  return (
    <View style={{ marginBottom: 12 }}>
      {/* Optional label above the input field */}
      {label ? <Text style={{ fontFamily: 'Nunito', fontSize: 12, color: '#4B5563', marginBottom: 6 }}>{label}</Text> : null}
      
      {/* Text input field */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} // Hides text for password fields
        placeholderTextColor="#9CA3AF"
        style={{
          width: '100%',
          height: 40,
          paddingHorizontal: 16,
          borderRadius: 9.6,
          borderWidth: 1,
          borderColor: error ? '#EF4444' : '#808080', // Red border if there's an error
          fontFamily: 'Nunito',
          fontSize: 14,
          backgroundColor: '#FFFFFF'
        }}
        accessibilityLabel={label || placeholder} // For screen readers
      />
      
      {/* Error message displayed below the input if there's an error */}
      {error ? <Text style={{ color: '#EF4444', fontSize: 12, marginTop: 6, fontFamily: 'Nunito' }}>{error}</Text> : null}
    </View>
  );
}
