import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { getTypeColor } from '../utils/helpers'

interface IPokemonItem {
    name: string
}

const PokemonItem = ({ item }: IPokemonItem) => {
    const color = getTypeColor(item.types[0].type.name)
    const styles = getStyles(color)
    return (
        <View style={styles.item}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: item.sprites.other['official-artwork'].front_default }} />
                <View style={[styles.info, styles.header]}>
                    <Text style={[styles.text, styles.name]}>{item.name}</Text>
                    <Text style={styles.text}>{item.id}</Text>
                </View>
                <View style={styles.types}>
                    {
                        item.types?.map(el => <Text key={el.slot} style={[styles.text, styles.type]}>{el.type.name}</Text>)
                    }
                </View>
            </View>

        </View>
    )
}

const getStyles = (typeColor: string) =>
    StyleSheet.create({
        item: {
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        card: {
            width: '100%',
            alignItems: 'center',
            padding: 30,
            backgroundColor: typeColor,
        },
        name: {
            fontSize: 45,
        },
        image: {
            height: 200,
            width: 200
        },
        text: {
            color: 'white',
            fontSize: 18
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
        },
        types: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center'
        },
        type: {
            opacity: 0.5,
            borderColor: 'white',
            borderRadius: 8,
            marginHorizontal: 10
        }
    });

export default PokemonItem