import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import PaginaPrincipal from './pagina-principal/Pagina-principal'
import Footer from './footer/Footer'
import Restauracao from './restauracao/Restauracao'

function App() {
  const [count, setCount] = useState(0)
  const [exibePaginaPrincipal, setExibePaginaPrincipal] = useState(true)
  const [exibeRestauracao, setExibeRestauracao] = useState(false)

  return (
    <div>
      <Header setExibePaginaPrincipal={setExibePaginaPrincipal} setExibeRestauracao={setExibeRestauracao} exibePaginaPrincipal={exibePaginaPrincipal} />
      {exibePaginaPrincipal ? <PaginaPrincipal setExibePaginaPrincipal={setExibePaginaPrincipal} setExibeRestauracao={setExibeRestauracao} /> : null}
      {exibeRestauracao ? <Restauracao setExibePaginaPrincipal={setExibePaginaPrincipal} setExibeRestauracao={setExibeRestauracao} /> : null}
      <Footer />
    </div>
  )
}

export default App
