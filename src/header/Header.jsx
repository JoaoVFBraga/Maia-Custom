import './Header.css'

function Header(props) {

  const exibeRestaurar = () => {
    props.setExibePaginaPrincipal(false);
    props.setExibeRestauracao(true);
  }

  const voltaAoInicio = () => {
    props.setExibePaginaPrincipal(true);
    props.setExibeRestauracao(false);
  }

  return (
    <header className='header'>
      <nav className='header-nav'>
        {props.exibePaginaPrincipal ? <ul className='nav-primeira-pagina'>
          <li><a href="#sobrenos">Sobre nós</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul> : null}
        <h1 onClick={voltaAoInicio}>MAIA CUSTOM</h1>
        <ul className='nav-servicos'>
          <li><button onClick={exibeRestaurar}>Restaure uma peça</button></li>
          <li><button>Crie uma peça</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header