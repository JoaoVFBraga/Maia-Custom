import './Pagina-principal.css'
import Carrossel from './carrossel/Carrossel.jsx'
import Footer from './footer/Footer.jsx'
import Intro from './intro/Intro.jsx'
import Servicos from './servicos/Servicos.jsx'
import SobreNos from './sobre-nos/SobreNos.jsx'

function PaginaPrincipal() {
  return (
    <div>
      <Intro />
      <Carrossel />
      <SobreNos />
      <Servicos />
      <Carrossel tema={'light'} />
      <Footer />
    </div>
  )
}

export default PaginaPrincipal