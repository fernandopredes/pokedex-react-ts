import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './index.css'
import { RouterProvider} from "react-router-dom";
import router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section className='container'>
    <RouterProvider router={router} />

    </section>
  </React.StrictMode>
)
