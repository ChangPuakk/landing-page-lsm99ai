import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Promotion from '../Pages/Promotion'

export default function RoutePages() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Promotion" element={<Promotion />}></Route>
    </Routes>
  )
}
