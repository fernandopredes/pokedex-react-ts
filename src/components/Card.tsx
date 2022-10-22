import { Link } from "react-router-dom";
import Badge from "./Badge";
import { Cards, Image, Title, Number } from './Card.style'
import minipattern from '../assets/minipattern.png'

type PokemonTypeProps = {
  type: {
    name: string
  }
}

export type CardProps = {

  id: number
  name: string
  types: Array<PokemonTypeProps>
  weight: number
  height: number
}

const Card = (props: CardProps) => {
  return (
    <Link to={`/details/${props.id}`}>
      <Cards className={`card type--${props.types[0].type.name.toLowerCase()}`}>
        <div>
          <img className="pattern" src={minipattern} alt="bolinhas" />
          <Number>#{props.id.toString().padStart(3,"0")}</Number>
          <Title>{props.name}</Title>
        </div>
        {props.types.map((item, index) => {
          return <Badge key={index} name={item.type.name} />
        })}
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} alt={props.name} />
      </Cards>
    </Link>
  )
}

export default Card

// parei em 05:26
