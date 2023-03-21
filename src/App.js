import React from 'react'
import { Provider } from 'react-redux'

import { Route,Routes } from 'react-router-dom'
import { Form } from './components/Form'
import { Bienvenue } from './components/Bienvenue'
import { store } from './redux'


export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
      <Route path = "/" element={<Form/>} />
      <Route path = "/bienvenue" element={<Bienvenue/>} />
      </Routes>
    </Provider>
  )
}