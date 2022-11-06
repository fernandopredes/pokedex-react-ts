import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { add, remove } from "../redux/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../redux";
import NavBar from "../components/NavBar";
import api from "../services/api";
import Badge from "../components/Badge";
import { Container, Image, Card, Number, Title, Pattern, DataInside, Data, Button } from "./Details.style"
import bolinhas from '../assets/bolinhas.png'


type PokemonTypeProps = {
  type: {
    name: string
  }
}

type DetailsProps = {

  id: number
  name: string
  types: Array<PokemonTypeProps>
  weight: number
  height: number
}

function Details(props: DetailsProps) {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [pokemonData, setPokemonData] = useState<DetailsProps>({} as DetailsProps);
  const [isLoading, setIsLoading] = useState(true)
  const listaPokemonsFavoritos = useSelector((state: StoreState) => state.favorite)


  function handleClickAdd() {
    dispatch(add(id))
  }

  function handleClickRemove() {
    dispatch(remove(id))
  }

  async function getPokemon() {
    const { data } = await  api.get('/pokemon/'+ id)


       setPokemonData({
        id: data.id,
        name: data.name,
        types: data.types,
        height: data.height,
        weight: data.weight
      });
      setIsLoading(false)
  }

  useEffect(() => {

    getPokemon()

  }, [])

  if (isLoading) {
    return <p>Carregando...</p>
  } else{

    return (
      <>
        <NavBar hasGoBack />
        <Container>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}  alt={pokemonData.name} />
        <div>

          <Card className={`type--${pokemonData.types[0].type.name.toLowerCase()}`}>
           <Pattern src={bolinhas}/>
            <Number>#{String(id).padStart(3,"0")}</Number>
            <Title>{pokemonData.name}</Title>
            { pokemonData.types.map((item, index) => {
              return <Badge key={index} name={item.type.name} />
            })}
            <div>
              <Data>Peso
                <div>
                  <DataInside>
                   {pokemonData.weight/100}Kg
                  </DataInside>
                </div>
              </Data>

              <Data>Tamanho
                <div>
                  <DataInside>
                   {pokemonData.height/10}m
                  </DataInside>
                </div>
              </Data>
            </div>

            {!!listaPokemonsFavoritos.find(
              pokemonId => String(pokemonId) === String(id)) ?
              (<Button onClick={handleClickRemove}>Remover dos favoritos</Button>)
               :
               (<Button onClick={handleClickAdd}>Adicionar aos favoritos</Button>)
            }

          </Card>
        </div>
        </Container>

      </>
    );
  }
}
export default Details;
