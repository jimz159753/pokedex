import PokemonItem from '..';
import { render } from '@testing-library/react-native';
import { mockData } from './mockData';


test('render PokemonItem component', () => {
    const { useNavigation } = jest.requireActual("@react-navigation/native")
    const tree = render(<PokemonItem item={mockData} navigation={useNavigation} />)
    expect(tree).toBeTruthy()
});

