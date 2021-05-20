import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default ({navigation}) => (
  <View>
    <Text>Movie</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      Go to Detail
    </TouchableOpacity>
  </View>
);
