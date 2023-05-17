import * as React from 'react';
import {Button, View, Text, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export function SignUpScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Sign Up Screen</Text>
      <Button
        title="Sign In"
        onPress={() => Alert.alert('Sign In Screen IN CONSTRUCTION')}
      />
    </View>
  );
}
