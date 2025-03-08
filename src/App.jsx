import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import PaginaPrincipal from './pagina-principal/Pagina-principal'
import Footer from './footer/Footer'
import Restauracao from './restauracao/Restauracao'
import Criacao from './criacao/Criacao'
import CadastroCostureira from './paginas-login/cadastro-costureira/CadastroCostureira'

function App() {
  const [exibePaginaPrincipal, setExibePaginaPrincipal] = useState(true)
  const [exibeRestauracao, setExibeRestauracao] = useState(false)

  return (
    <div>
      <Header setExibePaginaPrincipal={setExibePaginaPrincipal} setExibeRestauracao={setExibeRestauracao} exibePaginaPrincipal={exibePaginaPrincipal} />
      {exibePaginaPrincipal ? <PaginaPrincipal setExibePaginaPrincipal={setExibePaginaPrincipal} setExibeRestauracao={setExibeRestauracao} /> : null}
      {exibeRestauracao ? <Restauracao setExibePaginaPrincipal={setExibePaginaPrincipal} setExibeRestauracao={setExibeRestauracao} /> : null}
      {/* <CadastroCostureira /> */}
      {/* <Criacao /> */}
      <Footer />
    </div>
  )
}

export default App
