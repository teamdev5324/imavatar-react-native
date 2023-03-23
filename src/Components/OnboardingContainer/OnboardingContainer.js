import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';

const OnboardingContainer = ({
  children,
  title,
  description,
  onPrevBtnPress,
  onNextBtnPress,
  isNextBtnDisabled,
  nextBtnTitle = 'Next',
  img,
}) => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#FEEDE0'}}
      showsVerticalScrollIndicator={false}>
      <Image
        source={img}
        style={{alignSelf: 'center', marginVertical: 20, width: '70%'}}
      />
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 28,
          paddingTop: 32,
          paddingBottom: 22,
          height: Dimensions.get('window').height * 0.85,
        }}>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 25}}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <Text style={{color: '#F47A1E'}}>Need help</Text>
          <View style={{marginVertical: 35}}>
            <Text
              style={{
                color: '#333',
                fontSize: 30,
                fontWeight: '500',
                marginBottom: 23,
              }}>
              {title}
            </Text>
            <Text
              style={{
                color: '#999999',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 20,
              }}>
              {description}
            </Text>
          </View>
          {children}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
          paddingHorizontal: 30,
        }}>
        <View>
          {onPrevBtnPress && (
            <TouchableOpacity onPress={onPrevBtnPress}>
              <Text style={{color: '#333', fontSize: 16, fontWeight: '500'}}>
                Previous
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: isNextBtnDisabled ? '#999999' : '#F47A1E',
            borderRadius: 4,
            paddingHorizontal: 45,
            paddingVertical: 12,
          }}
          onPress={onNextBtnPress}
          disabled={isNextBtnDisabled}>
          <Text style={{color: '#fff'}}>{nextBtnTitle}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OnboardingContainer;
