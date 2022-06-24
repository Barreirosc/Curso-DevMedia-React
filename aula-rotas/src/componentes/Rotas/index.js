import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PaginaInicial from '../PaginaInicial'
import PaginaFrontEnd from '../PaginaFrontEnd'
import PaginaBackend from '../PaginaBackEnd'

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<PaginaInicial />} />
      <Route exact path="/front-end" element={<PaginaFrontEnd />} />
      <Route exact path="/back-end" element={<PaginaBackend />} />
    </Routes>
  </BrowserRouter>
)

export default Rotas
