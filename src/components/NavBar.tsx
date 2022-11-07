
import { useSelector} from "react-redux"
// import "./NavBar.css"
import { Nav, BtnGoBack, TotalPok } from './NavBar.style'
import rotomdex from '../assets/rotom.png'
import { StoreState } from "../redux"

type NavBarProps = {
  hasGoBack?: boolean

}

function NavBar(props: NavBarProps ) {

  const totalPokemons = useSelector((state: StoreState) => state.favorite)


  return(
    <Nav className="nav">
      <BtnGoBack to="/" className="brand">
        <h1>Pokedex</h1>
      </BtnGoBack>
      <BtnGoBack className="favorites" to='/favorites'><TotalPok>Você tem {totalPokemons.length} pokémons favoritos</TotalPok></BtnGoBack>

      {props.hasGoBack && (<BtnGoBack to="/" className="btn-goBack">Voltar</BtnGoBack>)}
    </Nav>
  )
}

export default NavBar
