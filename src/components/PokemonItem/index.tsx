import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { formatNumber, getTypeColor } from '../../utils/helpers'
import { IPokemonItem } from './PokemonItem.interface'

const PokemonItem = ({ item, navigation }: IPokemonItem) => {
    const color = getTypeColor(item.types[0].type.name)
    const styles = getStyles(color)
    const number = formatNumber(item.id)

    return (
        <TouchableHighlight style={styles.item} onPress={() => navigation.navigate('PokemonDetails', { item: item })}>
            <View>
                <Image style={styles.image} source={{ uri: item.sprites.other['official-artwork'].front_default }} />
                <View style={styles.header}>
                    <Text style={[styles.text, styles.name]}>{item.name}</Text>
                    <Text style={styles.text}>#{number}</Text>
                </View>
                <View style={styles.types}>
                    {
                        item.types?.map(el => <Text key={el.slot} style={[styles.text, styles.type]}>{el.type.name}</Text>)
                    }
                </View>
            </View>
        </TouchableHighlight>
    )
}

const getStyles = (typeColor: string) =>
    StyleSheet.create({
        item: {
            flex: 1,
            padding: 10,
            margin: 10,
            alignItems: 'center',
            backgroundColor: typeColor,
            borderRadius: 8
        },
        name: {
            fontSize: 18,
        },
        image: {
            height: 160,
            width: 160
        },
        text: {
            color: 'black',
            fontSize: 12,
            display: 'flex',
            alignItems: 'center'
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
        },
        types: {
            marginTop: 10,
            width: '100%',
            flexDirection: 'row',
        },
        type: {
            opacity: 0.5,
            borderRadius: 25,
            backgroundColor: 'white',
            paddingHorizontal: 8,
            paddingVertical: 2,
            marginRight: 2
        }
    });

export default PokemonItem