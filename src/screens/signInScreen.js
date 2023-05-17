import * as React from 'react';
import {Button, View, Text, Alert} from 'react-native';
import {SignUpScreen} from './signUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export function SignInScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Sign In Screen</Text>
      <Button title="Sign up" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
}
