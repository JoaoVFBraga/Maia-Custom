import './Header.css'

function Header() {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='nav-primeira-pagina'>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
        <h1>MAIA CUSTOM</h1>
        <ul className='nav-servicos'>
          <li><button>Restaure uma peça</button></li>
          <li><button>Crie uma peça</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header