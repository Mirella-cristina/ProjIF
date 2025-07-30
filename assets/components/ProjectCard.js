import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProjectCard({ project }) {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.navigate('Detalhes', { project });
  };
  
  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.category}>{project.category}</Text>
      <Text numberOfLines={2} style={styles.description}>{project.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  category: {
    color: '#666',
    fontSize: 14,
    marginBottom: 8,
  },
  description: {
    color: '#333',
    fontSize: 14,
  },
});