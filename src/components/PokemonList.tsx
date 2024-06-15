import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { getPokemons } from '../api/api';
import PokemonItem from './PokemonItem';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetchPokemons()
    }, [])

    const fetchPokemons = async () => {
        const result = await getPokemons()
        setPokemons(result)
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={pokemons}
                renderItem={(pokemon) => <PokemonItem item={pokemon.item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    name: {
        fontSize: 32,
        color: 'black'
    },
});

export default PokemonList