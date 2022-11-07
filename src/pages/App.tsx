import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import styled, { ThemeProvider } from 'styled-components'
import test from '../assets/Pokeball.png'

import './App.css'
import { useState } from 'react'
import Switch from '../components/Switch'


const StyledBody = styled.div`
background-color: ${(props) => props.theme.body};
background-image: ${(props) => props.theme.image};
  background-repeat: no-repeat ;
  background-position: top;
h1 {
  color: ${(props) => props.theme.title};
}
span{
  color: ${(props) => props.theme.title}

}

a{
  color: ${(props) => props.theme.title}
}

input{
  background-color: ${(props) => props.theme.inputbg};
  color: ${(props) => props.theme.inputcol};
  border: 2px solid ${(props) => props.theme.inputborder};
}
`

const darkTheme = {
  body: "#343333",
  title: "#ffffff",
  image: "url(Pokeballdark.png)",
  inputbg:"#9e9e9e",
  inputcol:"#000000",
  inputborder:"#9e9e9e"
}

const lightTheme = {
  body: "#fff",
  image: "url(Pokeball.png)",
  inputborder:"#9e9e9e"

}

function App() {
  const [theme, setTheme] = useState("light")
  const isDarkTheme = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledBody>
        <section className='container'>
          <div className="App">
            <Switch toggleTheme={toggleTheme}/>
            <Outlet/>
          </div>
        </section>
      </StyledBody>
    </ThemeProvider>
  )
}

export default App
