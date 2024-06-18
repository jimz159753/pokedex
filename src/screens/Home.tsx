import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import PokemonList from '../components/PokemonList'
import { getPokemons, getTypes } from '../api/api'
import DropDown from '../components/ui/Dropdown'
import { IHome, IItem } from './Home.interface'

const Home = ({ navigation }: IHome) => {
    const [pokemons, setPokemons] = useState<IItem[]>([])
    const [filterPokemons, setFilterPokemons] = useState<IItem[]>([])
    const [types, setTypes] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result: IItem[] = await getPokemons()
        const types = await getTypes()
        setPokemons(result)
        setFilterPokemons(result)
        setTypes(types)
    }

    const filterByType = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const filter = ev.target.value
        const newList = pokemons.filter(pokemon => pokemon.types.some(innerType => innerType.type.name === filter))
        setFilterPokemons(newList)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <DropDown types={types} filterByType={filterByType} />
                <PokemonList pokemons={filterPokemons} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scroll: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10
    }
})

export default Home