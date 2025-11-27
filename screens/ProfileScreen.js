// Profile Screen Component
// Displays user profile information and menu options
// Users can access their orders, saved items, settings, and help

import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#F3F4F6', alignItems: 'center' }}>
      <View style={{ 
        width: '100%', 
        maxWidth: 395, 
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'center'
      }}>
        <ScrollView 
          contentContainerStyle={{ 
            paddingBottom: 20,
            flexGrow: 1
          }}
          style={{ flex: 1 }}
        >
          {/* Header */}
          <LinearGradient
            colors={['#E9D5FF', '#FCE7F3']}
            start={[0, 0]}
            end={[1, 0]}
            style={{ 
              paddingTop: Platform.OS === 'web' ? 20 : 50,
              paddingBottom: 24,
              paddingHorizontal: 16,
              alignItems: 'center'
            }}
          >
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={{ 
                alignSelf: 'flex-start',
                marginBottom: 16
              }}
            >
              <Text style={{ fontSize: 24 }}>←</Text>
            </TouchableOpacity>
            <Text style={{ 
              fontFamily: 'Nunito-Bold', 
              fontSize: 24, 
              color: '#000'
            }}>
              Profile
            </Text>
          </LinearGradient>

          {/* Profile Content */}
          <View style={{ padding: 16, backgroundColor: '#fff' }}>
            {/* Profile Picture */}
            <View style={{ alignItems: 'center', marginBottom: 24 }}>
              <View style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                backgroundColor: '#E5E7EB',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16
              }}>
                <Image 
                  source={require('../assets/images/woman.png')}
                  style={{ 
                    width: 120, 
                    height: 120,
                    borderRadius: 60,
                    resizeMode: 'cover'
                  }}
                />
              </View>
              <Text style={{ 
                fontFamily: 'Nunito-Bold', 
                fontSize: 20, 
                color: '#000',
                marginBottom: 4
              }}>
                User Name
              </Text>
              <Text style={{ 
                fontFamily: 'Nunito', 
                fontSize: 14, 
                color: '#6B7280'
              }}>
                user@example.com
              </Text>
            </View>

            {/* Profile Options */}
            <View style={{ gap: 12 }}>
              <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 16,
                backgroundColor: '#F9FAFB',
                borderRadius: 12
              }}>
                <Text style={{ 
                  fontFamily: 'Nunito', 
                  fontSize: 16, 
                  color: '#000'
                }}>
                  My Orders
                </Text>
                <Text style={{ fontSize: 18 }}>→</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 16,
                backgroundColor: '#F9FAFB',
                borderRadius: 12
              }}>
                <Text style={{ 
                  fontFamily: 'Nunito', 
                  fontSize: 16, 
                  color: '#000'
                }}>
                  Saved Items
                </Text>
                <Text style={{ fontSize: 18 }}>→</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 16,
                backgroundColor: '#F9FAFB',
                borderRadius: 12
              }}>
                <Text style={{ 
                  fontFamily: 'Nunito', 
                  fontSize: 16, 
                  color: '#000'
                }}>
                  Settings
                </Text>
                <Text style={{ fontSize: 18 }}>→</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 16,
                backgroundColor: '#F9FAFB',
                borderRadius: 12
              }}>
                <Text style={{ 
                  fontFamily: 'Nunito', 
                  fontSize: 16, 
                  color: '#000'
                }}>
                  Help & Support
                </Text>
                <Text style={{ fontSize: 18 }}>→</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

