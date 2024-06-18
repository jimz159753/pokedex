import PokemonDetails from '..';
import { render } from '@testing-library/react-native';
import { mockData } from './mockData';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../PokemonDetails.interface';



test('render PokemonDetails component', () => {
    const { useNavigation } = jest.requireActual("@react-navigation/native")
    const mockRoute: RouteProp<RootStackParamList, 'PokemonDetails'> = {
        key: 'PokemonDetails',
        name: 'PokemonDetails',
        params: { item: mockData },
    };
    const tree = render(<PokemonDetails route={mockRoute} navigation={useNavigation} />)
    expect(tree).toBeTruthy()
});

