import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, RouterProvider, Routes} from "react-router-dom";
import router from './router';
import {Provider} from 'react-redux'
import {store} from './redux/index'
import styled, { ThemeProvider } from 'styled-components'

import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import App from './pages/App';

const StyledBody = styled.div`
background-color: ${(props) => props.theme.body};
`

const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6"
}

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333"
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <section className='container'>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details id={0} name={""} types={[]} weight={0} height={0} />} />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </HashRouter>
    </section>
    </Provider>
  </React.StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ThemeProvider theme={darkTheme}>
//         <StyledBody>
//           <section className='container'>
//             <RouterProvider  router={router} />
//           </section>
//         </StyledBody>
//       </ThemeProvider>
//     </Provider>
//   </React.StrictMode>
// )
