import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Card, {CardProps} from "../components/Card"
import NavBar from "../components/NavBar"
import MainTitle from "../components/Title"
import { StoreState } from "../redux"
import api from "../services/api"






const Favorites = () => {

  const [pokemonList, setPokemonList] = useState<CardProps[]>([])

  const listaPokemonsFavoritos = useSelector((state: StoreState) => state.favorite)

  async function getPokemonData() {
    const dadosCompletos = await Promise.all(
      listaPokemonsFavoritos.map(async (pokemonId) => {
        const { data } =await api.get('pokemon/' + pokemonId)

        return {
          id: data.id,
          name: data.name,
          types: data.types,
        }
      })
    )
    setPokemonList(dadosCompletos)
    console.log(dadosCompletos)
  }

  useEffect(() => {
    getPokemonData();
  }, [])


  return (
    <>
    <NavBar/>
    <MainTitle text="Seus pokémons favoritos:"/>

    {pokemonList.map((pokemon, index)=>{
      return  (<Card key={index} id={pokemon.id}  name={pokemon.name} types={pokemon.types}/>)

    })}
    </>
  )
}

export default Favorites
