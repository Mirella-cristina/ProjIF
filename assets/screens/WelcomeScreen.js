import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     <Image
  source={require('./welcome-ilustration.png')}
  style={styles.image}
/>


      <Text style={styles.title}>ProjIF</Text>
      <Text style={styles.subtitle}>Exiba seus projetos com facilidade</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Register')}
      >
        <Text style={styles.buttonText}>Começar</Text>
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 8,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#d32f2f',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
