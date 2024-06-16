import { StyleSheet, FlatList } from 'react-native';
import PokemonItem from '../PokemonItem';

const PokemonList = ({ pokemons, navigation }) =>
    <FlatList
        data={pokemons}
        renderItem={(pokemon) => <PokemonItem item={pokemon.item} navigation={navigation} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
    />

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 32,
        color: 'black'
    },
});

export default PokemonList