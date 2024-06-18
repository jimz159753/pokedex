import PokemonList from '..';
import { render } from '@testing-library/react-native';
import { pokemons } from "./mockData";

test('render PokemonList component', () => {
    const { useNavigation } = jest.requireActual("@react-navigation/native")

    const tree = render(<PokemonList pokemons={pokemons} navigation={useNavigation} />)
    expect(tree).toBeTruthy()
});

