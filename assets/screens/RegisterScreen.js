import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

export default function RegisterScreen() {
  const navigation = useNavigation();

  const redirectUri = AuthSession.makeRedirectUri({
    useProxy: true,
  });
  
  console.log('Redirect URI:', redirectUri); // Isso deveria mostrar:LOG redirect URI: https://auth.expo.io/@mirella_cris/projif
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1095850614692-kgid7p1hl3vaa9sdoaoj7q3ltrn5bjta.apps.googleusercontent.com',
    androidClientId: '1095850614692-kgid7p1hl3vaa9sdoaoj7q3ltrn5bjta.apps.googleusercontent.com',
    iosClientId: '1095850614692-kgid7p1hl3vaa9sdoaoj7q3ltrn5bjta.apps.googleusercontent.com',
    redirectUri: redirectUri, 
  });
  

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('TOKEN:', authentication.accessToken);
      navigation.replace('Projetos');
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Image source={require('../ifms-logo.png')} style={styles.logo} />
      <TouchableOpacity
        style={styles.button}
        disabled={!request}
        onPress={() => promptAsync()}
      >
        <Text style={styles.buttonText}>ENTRAR COM GOOGLE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#00A859',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
