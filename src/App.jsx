import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import { store } from './utils/store';
import {Provider} from "react-redux"

function App() {


  return (
    <Provider store={store}>
       <Header />
       <Outlet />

     
    </Provider>
  )
}

export default App
