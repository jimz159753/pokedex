import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import PokemonDetails from './components/PokemonDetails';
import { RootStackParamList } from './components/PokemonDetails/PokemonDetails.interface';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () =>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Pokedex' }}
            />
            <Stack.Screen
                name="PokemonDetails"
                component={PokemonDetails}
                options={{ title: 'Pokemon Details' }}
            />
        </Stack.Navigator>
    </NavigationContainer>


export default Routes