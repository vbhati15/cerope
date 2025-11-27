// Button Component
// Reusable button component with two variants: primary (dark) and secondary (outlined)
// Used throughout the app for consistent button styling

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button({ title, onPress, variant = 'primary', disabled }) {
  // Base styles shared by all button variants
  const baseStyle = {
    width: '100%',
    height: 40,
    borderRadius: 9.6,
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Primary button variant - Dark background with white text
  // Used for main actions like "Sign Up" and "Login"
  if (variant === 'primary') {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled} style={[baseStyle, { backgroundColor: '#202020' }]}>
        <Text style={{ color: '#FFFFFF', fontFamily: 'Nunito', fontSize: 14, fontWeight: '600' }}>{title}</Text>
      </TouchableOpacity>
    );
  }

  // Secondary button variant - White background with border
  // Used for alternative actions
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[baseStyle, { backgroundColor: '#FFFFFF', borderWidth: 0.8, borderColor: '#808080' }]}>
      <Text style={{ color: '#000000', fontFamily: 'Nunito', fontSize: 14 }}>{title}</Text>
    </TouchableOpacity>
  );
}
