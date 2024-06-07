import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Button, Input, SocialIcon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import LoginScreen_Styles from '../styles/LoginScreen_Styles';

const LoginScreen = () => {

  const navigation = useNavigation(); 
  
  return (
    <SafeAreaView style={LoginScreen_Styles.container}>
        <Text style={{ alignItems: 'flex-start', fontWeight: 'bold', fontSize: 30, marginBottom: 100, marginTop: 100 }}>Sign in</Text>
        <Input placeholder='Email' />
        <Input placeholder='Password' secureTextEntry />
        <Button
          onPress={() => navigation.navigate('Account')}
          title="Sign in"
          buttonStyle={{ backgroundColor: '#fc8e53', width: 350, borderRadius: 20,marginBottom:20 }}
        />
        <TouchableOpacity><Text style={{color:"blue"}}>Forgot Password?</Text></TouchableOpacity>
        <View  style={{ marginTop: 20, marginBottom: 20 }}>
            <Text>-OR-</Text>
        </View>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Sign in with</Text>
        <View style={{ flexDirection: 'row', width: 250, justifyContent: 'space-around' }}>
            <TouchableOpacity><SocialIcon type='google' light /></TouchableOpacity>
            <TouchableOpacity><SocialIcon type='facebook'  /></TouchableOpacity>
            <TouchableOpacity><SocialIcon type='twitter'  /></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Sign up')}><Text style={{color:"blue",margin:20}}>Don't have an account?</Text></TouchableOpacity>
    </SafeAreaView>
  );
};
export default LoginScreen;