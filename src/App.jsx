/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Cart from './components/Cart';
import Products from './components/Products';
import RootLayout from './components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<DashBoard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
