import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import PaginaPrincipal from './pagina-principal/Pagina-principal'
import Footer from './footer/Footer'
import Restauracao from './restauracao/Restauracao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      {/* <PaginaPrincipal /> */}
      <Restauracao />
      <Footer />
    </div>
  )
}

export default App
