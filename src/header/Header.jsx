import './Header.css'

function Header(props) {

  const exibeRestaurar = () => {
    props.setExibePaginaPrincipal(false);
    props.setExibeRestauracao(true);
  }

  return (
    <header className='header'>
      <nav className='header-nav'>
        {props.exibePaginaPrincipal ? <ul className='nav-primeira-pagina'>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul> : null}
        <h1>MAIA CUSTOM</h1>
        <ul className='nav-servicos'>
          <li><button onClick={exibeRestaurar}>Restaure uma peça</button></li>
          <li><button>Crie uma peça</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header