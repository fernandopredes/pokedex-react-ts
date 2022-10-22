import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import api from "../services/api";
import Badge from "../components/Badge";
import { Container, Image, Card, Number, Title, Pattern, DataInside, Data } from "./Details.style"
import { CardProps } from "../components/Card";
import bolinhas from '../assets/bolinhas.png'

function Details() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState<CardProps>({} as CardProps);
  const [isLoading, setIsLoading] = useState(true)


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
                   {Math.round(pokemonData.weight/100)}Kg
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

          </Card>
        </div>
        </Container>

      </>
    );
  }
}
export default Details;
