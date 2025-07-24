import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function AddProjectScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleAdd() {
    await addDoc(collection(db, "projects"), {
      title,
      description,
      createdAt: new Date()
    });
    navigation.goBack();
  }

  return (
    <View>
      <TextInput placeholder="Título" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Descrição" value={description} onChangeText={setDescription} />
      <Button title="Salvar Projeto" onPress={handleAdd} />
    </View>
  );
}
