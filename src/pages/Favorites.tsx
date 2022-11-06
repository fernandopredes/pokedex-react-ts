import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Card, {CardProps} from "../components/Card"
import NavBar from "../components/NavBar"
import MainTitle from "../components/Title"
import { StoreState } from "../redux"
import api from "../services/api"
import styled from "styled-components";

export const List = styled.div`
  display: grid;
   grid-template-columns: repeat(3, 1fr);
   row-gap: 50px;
   column-gap: 30px;

   @media only screen and (max-width: 1000px){
    grid-template-columns: repeat(2, 1fr);

   }

   @media only screen and (max-width: 700px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Favorites = () => {

  const [pokemonList, setPokemonList] = useState<CardProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

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
    setIsLoading(false)
  }

  useEffect(() => {
    getPokemonData();
  }, [])

  if (isLoading) {
    return <p>Carregando...</p>
  } else{
    return (
      <>
      <NavBar/>
      <MainTitle text="Seus pokémons favoritos:"/>

      <List>
          {pokemonList.map((pokemon, index)=>{
            return  (<Card key={index} id={pokemon.id}  name={pokemon.name} types={pokemon.types}/>)

          })}

      </List>
      </>
    )
  }
}

export default Favorites
