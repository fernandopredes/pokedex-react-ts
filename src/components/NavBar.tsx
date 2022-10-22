import { Nav, BtnGoBack } from './NavBar.style'
import rotomdex from '../assets/rotom.png'

type NavBarProps = {
  hasGoBack?: boolean

}

function NavBar(props: NavBarProps ) {
  return(
    <Nav className="nav">
      <BtnGoBack to="/" className="brand">
        <img src={rotomdex} alt="" />
      </BtnGoBack>

      {props.hasGoBack && (<BtnGoBack to="/" className="btn-goBack">Voltar</BtnGoBack>)}
    </Nav>
  )
}

export default NavBar
