export const getPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
    const pokemons = await res.json()
    return await getDetails(pokemons.results)
}

export const getDetails = async (data) => {
    const pokemonsDetail = data.map(async (el) => {
        const info = await fetch(el.url);
        const infoJson = await info.json();
        return infoJson;
    });
    const results = await Promise.all(pokemonsDetail)
    return results
}

export const getTypes = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/type/')
    const pokemonTypes = await res.json()
    return pokemonTypes.results
}