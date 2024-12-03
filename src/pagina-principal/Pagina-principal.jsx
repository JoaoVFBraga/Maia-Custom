import './Pagina-principal.css'
import Carrossel from './carrossel/Carrossel.jsx'
import Intro from './intro/Intro.jsx'
import SobreNos from './sobre-nos/SobreNos.jsx'

function PaginaPrincipal() {
  return (
    <div>
      <Intro />
      <Carrossel />
      <SobreNos />
    </div>
  )
}

export default PaginaPrincipal