import React from 'react';
import { TextInput, View, Text } from 'react-native';

const input = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

export { input };
