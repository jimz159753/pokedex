import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { formatNumber, getTypeColor } from '../../utils/helpers'

export default function PokemonDetails({ route, navigation }) {
    const { item } = route.params
    const color = getTypeColor(item.types[0].type.name)
    const styles = getStyles(color)
    const number = formatNumber(item.id)
    const pokeballImg = require('../../../assets/pokeball.png')
    console.log('item', item)
    return (
        <View>
            <View style={styles.item} onClick={() => navigation.navigate('PokemonDetails', { item: item })}>
                <Image style={styles.pokeball} source={pokeballImg} />
                <Image style={styles.image} source={{ uri: item.sprites.other['official-artwork'].front_default }} />
                <View style={[styles.info, styles.header]}>
                    <Text style={[styles.text]}>{item.name}</Text>
                    <Text style={styles.text}>#{number}</Text>
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.types}>
                    {
                        item.types?.map(el => <Text
                            key={el.slot}
                            style={[styles.text, styles.type, { backgroundColor: getTypeColor(el.type.name) }]}>
                            {el.type.name}
                        </Text>)
                    }
                </View>
                <View style={styles.stats}>
                    {
                        item.stats.map(el => <Text style={styles.textDescription}>{el.stat.name}: {el.base_stat}</Text>)
                    }
                </View>
                <View style={styles.abilities}>
                    <Text style={styles.abilitiesHeader}>Abilities</Text>
                    <View style={styles.abilitiesContainer}>
                        {
                            item.abilities.map(el => <Text style={styles.textDescription}>{el.ability.name}</Text>)
                        }
                    </View>
                </View>
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
        image: {
            height: 250,
            width: 250
        },
        text: {
            color: 'white',
            fontSize: 20,
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
            gap: 10,
            width: '100%',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center'
        },
        type: {
            borderRadius: 25,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingBottom: 5,
            marginRight: 2
        },
        details: {
            paddingHorizontal: 50
        },
        stats: {
            marginTop: 30,

        },
        textDescription: {
            fontSize: 25
        },
        abilitiesHeader: {
            marginVertical: 30,
            fontSize: 30
        },
        abilities: {
            display: 'flex',
            alignItems: 'center'
        },
        abilitiesContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 15

        },
        pokeball: {
            position: 'absolute',
            height: 280,
            width: 300
        }
    });