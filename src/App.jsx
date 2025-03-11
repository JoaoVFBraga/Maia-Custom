import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import PaginaPrincipal from './pagina-principal/Pagina-principal'
import Footer from './footer/Footer'
import Restauracao from './restauracao/Restauracao'
import Criacao from './criacao/Criacao'
import CadastroCostureira from './paginas-login/cadastro-costureira/CadastroCostureira'
import PaginasLogin from './paginas-login/PaginasLogin'

function App() {
  const [exibePaginaPrincipal, setExibePaginaPrincipal] = useState(true)
  const [exibeRestauracao, setExibeRestauracao] = useState(false)
  const [exibeLogin, setExibeLogin] = useState(false)
  const [tipoDeLogin, setTipoDeLogin] = useState('')

  return (
    <div>
      <Header setExibePaginaPrincipal={setExibePaginaPrincipal} setExibeRestauracao={setExibeRestauracao} exibePaginaPrincipal={exibePaginaPrincipal} setTipoDeLogin={setTipoDeLogin} setExibeLogin={setExibeLogin} />

      {exibePaginaPrincipal ? <PaginaPrincipal setExibePaginaPrincipal={setExibePaginaPrincipal} setExibeRestauracao={setExibeRestauracao} /> : null}

      {exibeRestauracao ? <Restauracao setExibePaginaPrincipal={setExibePaginaPrincipal} setExibeRestauracao={setExibeRestauracao} /> : null}

      {exibeLogin ? <PaginasLogin tipoDeLogin={tipoDeLogin} setTipoDeLogin={setTipoDeLogin} setExibePaginaPrincipal={setExibePaginaPrincipal} setExibeLogin={setExibeLogin} /> : null}
      {/* <Criacao /> */}
      <Footer />
    </div>
  )
}

export default App
