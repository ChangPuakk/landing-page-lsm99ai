import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Promotion from '../Pages/Promotion'
import Casino from '../Pages/casino'
import Slot from '../Pages/slot'
import Sport from '../Pages/sport'
import Lotto from '../Pages/lotto'

export default function RoutePages() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/promotion" element={<Promotion />}></Route>
        <Route path="/casino" element={<Casino />}></Route>
        <Route path="/slot" element={<Slot />}></Route>
        <Route path="/sport" element={<Sport />}></Route>
        <Route path="/lotto" element={<Lotto />}></Route>
    </Routes>
  )
}
