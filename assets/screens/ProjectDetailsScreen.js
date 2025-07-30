import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProjectDetailScreen({ route }) {
  const { project } = route.params || { project: { title: 'Projeto', description: 'Sem descrição', category: 'Sem categoria' } };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.category}>{project.category}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.description}>{project.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 16,
    color: '#666',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});