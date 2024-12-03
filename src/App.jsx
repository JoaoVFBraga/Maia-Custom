import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import PaginaPrincipal from './pagina-principal/Pagina-principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <PaginaPrincipal />
    </div>
  )
}

export default App
