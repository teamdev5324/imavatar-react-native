import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CatalogNavBar = ({ind, bulk, navigation}) => {
  const data = [
    {name: 'Product Vital Info', route: 'CatalogAddProductInfo'},
    {name: 'Pricing', route: 'PricingInfo'},
    {name: 'Description', route: 'DescriptionInfo'},
    {name: 'Images/Videos', route: 'CatalogImages'},
    {name: 'Variations', route: 'VariationsInfo'},
  ];

  const secondData = [
    {name: 'Create your catalog', route: 'AddBulkProductInfo'},
    {name: 'View QC status', route: 'ViewQcStauts'},
    {name: 'View successful listing', route: 'ViewSuccessfulListing'},
  ];
  return (
    <View>
      <FlatList
        horizontal
        contentContainerStyle={{alignSelf: 'center', width: '100%'}}
        showsHorizontalScrollIndicator={false}
        data={bulk ? secondData : data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item.route !== '') {
                  navigation.navigate(item.route);
                }
              }}
              style={{
                width: bulk
                  ? Dimensions.get('window').width / 3.1 - 8
                  : Dimensions.get('window').width / 5 - 8,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderTopColor: '#D9D9D9',
                borderBottomColor: '#D9D9D9',
                borderRightWidth: 1,
                borderRightColor: '#D9D9D9',
                borderLeftWidth: index === 0 ? 1 : 0,
                borderLeftColor: index === 0 ? '#D9D9D9' : 'transparent',
                paddingHorizontal: 1,
                paddingVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: ind === index ? '#FF6658' : '#000',
                  fontWeight: ind === index ? '700' : '400',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CatalogNavBar;

const styles = StyleSheet.create({});
