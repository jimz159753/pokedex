import React from 'react'
import { StyleSheet } from 'react-native'
import { IDropdown } from './Dropdown.interface'

const Dropdown = ({ filterByType, types }: IDropdown) =>
    <select
        onChange={filterByType}
        name="pokemons"
        id='search'
        style={styles.search}>
        {
            types?.map(type => <option key={type.name} value={type.name}>
                {type.name}
            </option>)
        }
    </select>

const styles = StyleSheet.create({
    search: {
        height: 40,
        borderWidth: 1,
        width: '80%'
    }
})

export default Dropdown