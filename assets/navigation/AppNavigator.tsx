import HomeScreen from '../screens/HomeScreen';
import AddProjectScreen from '../screens/AddProjectScreen';
import ProjectDetailScreen from '../screens/ProjectDetailsScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Projetos" component={HomeScreen} />
        <Stack.Screen name="Novo Projeto" component={AddProjectScreen} />
        <Stack.Screen name="Detalhes" component={ProjectDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
