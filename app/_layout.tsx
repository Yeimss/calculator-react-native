import { Slot } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const RootLayout = () => {
    return (
      <View>
        <Text> textInComponent </Text>
        <Slot />
      </View>
    )
}

export default RootLayout;