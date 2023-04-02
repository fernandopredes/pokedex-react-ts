import Card, {CardProps} from "../components/Card"
import NavBar from "../components/NavBar"
import { Title, List, Input, Ghost} from './Home.style'
import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {


  const [isLoading, setIsLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState<CardProps[]>([])
  const [textoBusca, setTextoBusca] = useState('')


  async function getPokemon() {
    const { data } = await  api.get('/pokemon?limit=905')


    const dadosCompletos = await Promise.all(
      data.results.map(async (result: { url: string }) => {

        const { data } = await  api.get(result.url)


       return {
        id: data.id,
        name: data.name,
        types: data.types
      }})
    )
    // console.log(dadosCompletos)

    setPokemonList(dadosCompletos)

    setIsLoading(false)
  }

  useEffect(() => {

    getPokemon()

  }, [])

  let list
  if (textoBusca === "") {
    list = <p></p>
  } else if(Number(textoBusca) > 1010) {
    list = <Ghost className="404" src="404.png" alt="Lavander Town Ghost" />
  } else{
    list = <List className="list">
    {pokemonList.slice(0,1010)
      .filter((pokemon) => pokemon.name.includes(textoBusca.toLowerCase()) || String(pokemon.id) === textoBusca)
      .map((pokemon) => (<Card id={pokemon.id} key={pokemon.id} name={pokemon.name} types={pokemon.types}/>))}
    </List>
  }

  if (isLoading) {
    return <p>Carregando...</p>
  } else{
    return (
      <>
      <NavBar />
      <Title>Encontre todos os pokémons em um só lugar</Title>

      <Input type="text" placeholder="Procure por um pokémon ou dex number." value={textoBusca} onChange={(event)=>{setTextoBusca(event.target.value)}}/>

      {list}

      {textoBusca === "" ?
        <List className="list">
        {pokemonList.slice(0,151)
          .map((pokemon) => (<Card id={pokemon.id} key={pokemon.id} name={pokemon.name} types={pokemon.types}/>))}
        </List>
      :
        <p></p>
      }
      </>
      )

  }


}

export default Home
