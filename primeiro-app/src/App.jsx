import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Header from './componentes/Header';
import Footer from './componentes/Footer';
import HomePage from './componentes/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <HomePage />
      <Footer />
      
    </div>
  )
}

export default App
