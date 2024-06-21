import React from 'react'
import { StyleSheet } from 'react-native'
import { IDropdown } from './Dropdown.interface'
import { Picker } from '@react-native-picker/picker';

const Dropdown = ({ filterByType, types }: IDropdown) =>
    <Picker
        onValueChange={filterByType}
        testID='search'
        style={styles.search}>
        {
            types?.map(type => <Picker.Item key={type.name} value={type.name} label={type.name} />)
        }
    </Picker>

const styles = StyleSheet.create({
    search: {
        height: 40,
        borderWidth: 1,
        width: '80%'
    }
})

export default Dropdown