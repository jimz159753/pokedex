import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface IPokemonItem {
    navigation: NavigationProp<ParamListBase>
    item: IItem
}

export interface IItem {
    name: string
    types: IType[]
    abilities: IAbilities[]
    id: number
    sprites: IOther
    stats: IStats[]
}

export interface IType {
    slot: number
    type: { name: string }
}

interface IOther {
    other: { 'official-artwork': { 'front_default': string } }
}

export interface IStats {
    base_stat: number
    stat: { name: string }
}

export interface IAbilities {
    ability: { name: string }
}