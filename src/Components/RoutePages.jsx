import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

export default function RoutePages() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}
