import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, RouterProvider, Routes} from "react-router-dom";
import router from './router';
import {Provider} from 'react-redux'
import {store} from './redux/index'


import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import App from './pages/App';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details id={0} name={""} types={[]} weight={0} height={0} />} />
            <Route path='/favorites' element={<Favorites />} />
          </Route>
        </Routes>
      </HashRouter>
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
