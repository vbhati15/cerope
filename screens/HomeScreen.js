// Home Screen Component
// This is the main screen users see after logging in
// It displays the weekly outfit planner, trending items, analysis cards, and outfit recommendations

import React, { useState } from 'react';
import { View, ScrollView, Image, Platform, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  // Track which tab is selected in the "Outfits For You By AI" section
  const [selectedTab, setSelectedTab] = useState('Individual Pieces');

  return (
    // Main container - Centers content and sets background color
    <View style={{ flex: 1, backgroundColor: '#F3F4F6', alignItems: 'center' }}>
      {/* Content wrapper - Limits width to 395px to prevent stretching on web */}
      <View style={{ 
        width: '100%', 
        maxWidth: 395, 
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'center'
      }}>
        {/* Scrollable content area - Allows users to scroll through all sections */}
        <ScrollView 
          contentContainerStyle={{ 
            paddingBottom: 105, // Extra padding at bottom to account for fixed navigation bar
            flexGrow: 1
          }}
          style={{ flex: 1 }}
        >
          {/* ========== HEADER SECTION ========== */}
          {/* Header image with profile icon overlay */}
          <View style={{ width: '100%', position: 'relative' }}>
            {/* Main header image */}
            <Image 
              source={require('../assets/images/Frame 2.png')}
              style={{ 
                width: '100%',
                height: 100,
                resizeMode: 'cover'
              }}
            />
            {/* Profile Icon - Clickable button in the center of header */}
            {/* Clicking this navigates to the Profile screen */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Profile')}
              style={{
                position: 'absolute',
                top: Platform.OS === 'web' ? 20 : 50,
                left: '50%',
                marginLeft: -18, // Center the icon (half of width 36px)
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: '#E5E7EB',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                borderWidth: 2,
                borderColor: '#fff'
              }}
            >
              <Text style={{ fontSize: 20 }}>👤</Text>
            </TouchableOpacity>
          </View>

          {/* ========== SEARCH BOX SECTION ========== */}
          {/* Search bar with "Ask StyleBot" placeholder and camera icon */}
          <View style={{ padding: 16, backgroundColor: '#fff' }}>
            <View style={{ 
              width: '100%',
              height: 50,
              borderRadius: 20,
              backgroundColor: '#F3F4F6',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 16,
              justifyContent: 'space-between'
            }}>
              <Text style={{ 
                fontFamily: 'Nunito', 
                fontSize: 14,
                color: '#6B7280'
              }}>
                Ask StyleBot
              </Text>
              {/* Camera icon on the right side of search box */}
              <Text style={{ fontSize: 20 }}>📷</Text>
            </View>
          </View>

          {/* ========== WEEKLY CALENDAR SECTION ========== */}
          {/* Weekly outfit planner calendar image */}
          <View style={{ padding: 16, backgroundColor: '#fff' }}>
            <Image 
              source={require('../assets/images/Weekly calender _page-0001 1.png')}
              style={{ 
                width: '100%',
                height: 300,
                resizeMode: 'contain'
              }}
            />
          </View>

          {/* ========== TREND OF THE MONTH SECTION ========== */}
          {/* Displays trending fashion items with overlapping card layout */}
          <View style={{ 
            padding: 16, 
            marginTop: 8,
            backgroundColor: '#F3F4F6'
          }}>
            {/* Title Banner - Light purple background with white text */}
            <View style={{ 
              backgroundColor: '#E9D5FF',
              borderRadius: 16,
              paddingVertical: 20,
              paddingHorizontal: 24,
              marginBottom: -10, // Negative margin to overlap with cards below
              alignItems: 'center',
              zIndex: 10,
              position: 'relative'
            }}>
              <Text style={{ 
                fontFamily: 'Nunito-Bold', 
                fontSize: 22, 
                color: '#FFFFFF'
              }}>
                Trend Of The Month
              </Text>
            </View>

            {/* Three product cards arranged horizontally with overlapping effect */}
            {/* Cards are positioned absolutely to create the overlapping layout */}
            <View style={{ 
              height: 320,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              marginTop: -10,
              paddingHorizontal: 8
            }}>
              {/* Left Card - Chic Style */}
              {/* Positioned on the left side, behind the middle card */}
              <View style={{ 
                position: 'absolute',
                left: 0,
                zIndex: 1 // Lower z-index so it appears behind middle card
              }}>
                <View style={{ 
                  width: 160, 
                  height: 280,
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 8,
                  elevation: 5
                }}>
                  {/* Product image */}
                  <Image 
                    source={require('../assets/images/Group 1171276668.png')}
                    style={{ 
                      width: '100%', 
                      height: '100%'
                    }}
                    resizeMode="cover"
                  />
                  {/* Price and category tag overlay */}
                  <View style={{ 
                    position: 'absolute', 
                    top: 12, 
                    left: 12
                  }}>
                    <View style={{ 
                      backgroundColor: '#4D00FF', 
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 6,
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 6
                    }}>
                      <Text style={{ 
                        fontFamily: 'Nunito-Bold', 
                        fontSize: 11, 
                        color: '#fff' 
                      }}>
                        ₹1,199.00
                      </Text>
                      <Text style={{ 
                        fontFamily: 'Nunito-Bold', 
                        fontSize: 11, 
                        color: '#fff' 
                      }}>
                        |
                      </Text>
                      <Text style={{ 
                        fontFamily: 'Nunito-Bold', 
                        fontSize: 11, 
                        color: '#fff' 
                      }}>
                        Chic
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Middle Card - Party Style (Most Prominent) */}
              {/* Positioned in the center, largest card, appears on top */}
              <View style={{ 
                position: 'absolute',
                zIndex: 3, // Highest z-index so it appears on top
                left: '50%',
                marginLeft: -90 // Center the card (half of width 180px)
              }}>
                <View style={{ 
                  width: 180, 
                  height: 300,
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 8,
                  elevation: 5
                }}>
                  {/* Product image */}
                  <Image 
                    source={require('../assets/images/Rectangle 7959.png')}
                    style={{ 
                      width: '100%', 
                      height: '100%'
                    }}
                    resizeMode="cover"
                  />
                  {/* Price and category tag overlay */}
                  <View style={{ 
                    position: 'absolute', 
                    top: 12, 
                    left: 12
                  }}>
                    <View style={{ 
                      backgroundColor: '#4D00FF', 
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 6,
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 6
                    }}>
                      <Text style={{ 
                        fontFamily: 'Nunito-Bold', 
                        fontSize: 11, 
                        color: '#fff' 
                      }}>
                        ₹1,199.00
                      </Text>
                      <Text style={{ 
                        fontFamily: 'Nunito-Bold', 
                        fontSize: 11, 
                        color: '#fff' 
                      }}>
                        |
                      </Text>
                      <Text style={{ 
                        fontFamily: 'Nunito-Bold', 
                        fontSize: 11, 
                        color: '#fff' 
                      }}>
                        Party
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Right Card - Casual Style */}
              {/* Positioned on the right side, behind the middle card */}
              <View style={{ 
                position: 'absolute',
                right: 0,
                zIndex: 2 // Medium z-index, appears behind middle but in front of left
              }}>
                <View style={{ 
                  width: 160, 
                  height: 280,
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 8,
                  elevation: 5
                }}>
                  {/* Product image */}
                  <Image 
                    source={require('../assets/images/Group 1171276667.png')}
                    style={{ 
                      width: '100%', 
                      height: '100%'
                    }}
                    resizeMode="cover"
                  />
                  {/* Price and category tag overlay */}
                  <View style={{ 
                    position: 'absolute', 
                    top: 12, 
                    left: 12
                  }}>
                    <View style={{ 
                      backgroundColor: '#4D00FF', 
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 6,
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 6
                    }}>
                      <Text style={{ 
                        fontFamily: 'Nunito-Bold', 
                        fontSize: 11, 
                        color: '#fff' 
                      }}>
                        ₹1,199.00
                      </Text>
                      <Text style={{ 
                        fontFamily: 'Nunito-Bold', 
                        fontSize: 11, 
                        color: '#fff' 
                      }}>
                        |
                      </Text>
                      <Text style={{ 
                        fontFamily: 'Nunito-Bold', 
                        fontSize: 11, 
                        color: '#fff' 
                      }}>
                        Casual
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* ========== ANALYSIS CARDS SECTION ========== */}
          {/* Two cards side-by-side for body shape and skin color analysis */}
          <View style={{ 
            padding: 16, 
            backgroundColor: '#fff', 
            marginTop: 8,
            flexDirection: 'row',
            gap: 12
          }}>
            {/* Left Card - Body Shape Analysis */}
            {/* Gradient background from light yellow to light pink */}
            <LinearGradient
              colors={['#FFF9E6', '#FCE7F3']}
              start={[0, 0]}
              end={[1, 1]}
              style={{
                flex: 1,
                borderRadius: 12,
                padding: 16,
                minHeight: 150,
                position: 'relative',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              {/* Text on the left side */}
              <View style={{ flex: 1 }}>
                <Text style={{ 
                  fontFamily: 'Nunito-Bold', 
                  fontSize: 14, 
                  color: '#000',
                  marginBottom: 8
                }}>
                  Body Shape{'\n'}Analysis
                </Text>
              </View>
              {/* Illustration on the right side */}
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Image 
                  source={require('../assets/images/image 314.png')}
                  style={{ 
                    width: 100, 
                    height: 120,
                    resizeMode: 'contain'
                  }}
                />
              </View>
            </LinearGradient>

            {/* Right Card - Skin Color Analysis */}
            {/* Gradient background from light yellow to light pink */}
            <LinearGradient
              colors={['#FFF9E6', '#FCE7F3']}
              start={[0, 0]}
              end={[1, 1]}
              style={{
                flex: 1,
                borderRadius: 12,
                padding: 16,
                minHeight: 150,
                position: 'relative',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              {/* Text on the left side (takes 60% of space) */}
              <View style={{ flex: 0.6 }}>
                <Text style={{ 
                  fontFamily: 'Nunito-Bold', 
                  fontSize: 14, 
                  color: '#000',
                  marginBottom: 8
                }}>
                  Skin Color{'\n'}Analysis
                </Text>
              </View>
              {/* Illustration on the right side (takes 40% of space, shifted right) */}
              <View style={{ flex: 0.4, alignItems: 'flex-end', paddingRight: 8 }}>
                <Image 
                  source={require('../assets/images/woman.png')}
                  style={{ 
                    width: 80, 
                    height: 100,
                    resizeMode: 'contain'
                  }}
                />
              </View>
            </LinearGradient>
          </View>

          {/* ========== OUTFITS FOR YOU BY AI SECTION ========== */}
          {/* AI-powered outfit recommendations with tab navigation */}
          <View style={{ padding: 16, backgroundColor: '#F3F4F6', marginTop: 8 }}>
            {/* Section title */}
            <Text style={{ 
              fontFamily: 'Nunito-Bold', 
              fontSize: 18, 
              color: '#4D00FF',
              marginBottom: 16
            }}>
              Outfits For You By AI:
            </Text>

            {/* Tab Navigation */}
            {/* Users can switch between "Individual Pieces" and "Complete Outfits" */}
            <View style={{ 
              flexDirection: 'row', 
              marginBottom: 16,
              borderBottomWidth: 2,
              borderBottomColor: '#E5E7EB'
            }}>
              {/* Individual Pieces Tab */}
              {/* Active tab has purple underline and bold text */}
              <TouchableOpacity 
                onPress={() => setSelectedTab('Individual Pieces')}
                style={{
                  paddingBottom: 8,
                  marginRight: 24,
                  borderBottomWidth: selectedTab === 'Individual Pieces' ? 2 : 0,
                  borderBottomColor: selectedTab === 'Individual Pieces' ? '#4D00FF' : 'transparent',
                  marginBottom: -2
                }}
              >
                <Text style={{ 
                  fontFamily: 'Nunito-Bold', 
                  fontSize: 14,
                  color: selectedTab === 'Individual Pieces' ? '#4D00FF' : '#6B7280'
                }}>
                  Individual Pieces
                </Text>
              </TouchableOpacity>
              
              {/* Complete Outfits Tab */}
              {/* Active tab has purple underline */}
              <TouchableOpacity 
                onPress={() => setSelectedTab('Complete Outfits')}
                style={{
                  paddingBottom: 8,
                  borderBottomWidth: selectedTab === 'Complete Outfits' ? 2 : 0,
                  borderBottomColor: selectedTab === 'Complete Outfits' ? '#4D00FF' : 'transparent',
                  marginBottom: -2
                }}
              >
                <Text style={{ 
                  fontFamily: 'Nunito', 
                  fontSize: 14,
                  color: selectedTab === 'Complete Outfits' ? '#4D00FF' : '#6B7280'
                }}>
                  Complete Outfits
                </Text>
              </TouchableOpacity>
            </View>

          </View>

          {/* ========== ADDITIONAL CONTENT SECTIONS ========== */}
          {/* Frame 1171276066.png - Additional content image */}
          <View style={{ padding: 16, backgroundColor: '#fff', marginTop: 8 }}>
            <Image 
              source={require('../assets/images/Frame 1171276066.png')}
              style={{ 
                width: '100%',
                height: 200,
                resizeMode: 'contain'
              }}
            />
          </View>

          {/* Frame 1171276065.png - Additional content image */}
          <View style={{ padding: 16, backgroundColor: '#fff', marginTop: 8 }}>
            <Image 
              source={require('../assets/images/Frame 1171276065.png')}
              style={{ 
                width: '100%',
                height: 200,
                resizeMode: 'contain'
              }}
            />
          </View>

          {/* Frame 1171276160.png - Additional content image */}
          <View style={{ padding: 16, backgroundColor: '#fff', marginTop: 8 }}>
            <Image 
              source={require('../assets/images/Frame 1171276160.png')}
              style={{ 
                width: '100%',
                height: 200,
                resizeMode: 'contain'
              }}
            />
          </View>
        </ScrollView>

        {/* ========== BOTTOM NAVIGATION BAR ========== */}
        {/* Fixed navigation bar at the bottom of the screen */}
        {/* Contains navigation icons: Home, For you!, AI Pal, Hire an Artist, All Features */}
        <View style={{ 
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 105,
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'transparent'
        }}>
          <Image 
            source={require('../assets/images/Bottom Nav Bar.png')}
            style={{ 
              width: '100%',
              maxWidth: 393,
              height: 72,
              resizeMode: 'contain'
            }}
          />
        </View>
      </View>
    </View>
  );
}
