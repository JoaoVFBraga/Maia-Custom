import './Pagina-principal.css'
import Carrossel from './carrossel/Carrossel.jsx'
import Intro from './intro/Intro.jsx'
import Servicos from './servicos/Servicos.jsx'
import SobreNos from './sobre-nos/SobreNos.jsx'

function PaginaPrincipal(props) {
  return (
    <div>
      <Intro />
      <Carrossel />
      <SobreNos />
      <Servicos setExibePaginaPrincipal={props.setExibePaginaPrincipal} setExibeRestauracao={props.setExibeRestauracao} />
      <Carrossel tema={'light'} />
    </div>
  )
}

export default PaginaPrincipal