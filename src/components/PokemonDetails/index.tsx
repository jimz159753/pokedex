import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { formatNumber, getTypeColor } from '../../utils/helpers'

export default function PokemonDetails({ route }) {
    const { item } = route.params
    const color = getTypeColor(item.types[0].type.name)
    const styles = getStyles(color)
    const number = formatNumber(item.id)
    console.log('ITEM', item)
    return (
        <View>
            <View style={styles.item} onClick={() => navigation.navigate('PokemonDetails', { item: item })}>
                <Image style={styles.image} source={{ uri: item.sprites.other['official-artwork'].front_default }} />
                <View style={[styles.info, styles.header]}>
                    <Text style={[styles.text, styles.name]}>{item.name}</Text>
                    <Text style={styles.text}>#{number}</Text>
                </View>
            </View>
            <View style={styles.types}>
                {
                    item.types?.map(el => <Text key={el.slot} style={[styles.text, styles.type]}>{el.type.name}</Text>)
                }
            </View>
            <View>
                {
                    item.stats.map(el => <Text>{el.stat.name}: {el.base_stat}</Text>)
                }
            </View>
            <View>
                <Text>Habilities</Text>
                {
                    item.abilities.map(el => <Text>{el.ability.name}</Text>)
                }
            </View>
        </View>
    )
}

const getStyles = (typeColor: string) =>
    StyleSheet.create({
        item: {
            padding: 10,
            alignItems: 'center',
            backgroundColor: typeColor,
        },
        name: {
            fontSize: 18,
        },
        image: {
            height: 250,
            width: 250
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