import {  Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Profile from './Pages/Profile'

export const RouteS = () => (
  <Routes>

    <Route path='/' element={<Home />}></Route>
    <Route path='/profile/:id' element={<Profile profile={null} />}></Route>
    <Route path='/product/:id' element={<Product profile={null} />}></Route>

  </Routes>
)
