import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonList from './src/components/PokemonList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={PokemonList}
          options={{ title: 'Pokemons' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
