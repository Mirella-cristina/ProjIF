import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import ProjectCard from '../components/ProjectCard';

type Project = {
  id: string;
  title: string;
  description: string;
};

export default function HomeScreen() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const list: Project[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(list);
    }

    fetchProjects();
  }, []);

  return (
    <View>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProjectCard project={item} />}
      />
    </View>
  );
}
