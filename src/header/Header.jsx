import { useState } from 'react';
import './Header.css'

function Header(props) {

  const exibeRestaurar = () => {
    props.setExibePaginaPrincipal(false);
    props.setExibeRestauracao(true);
  }

  const voltaAoInicio = () => {
    props.setExibePaginaPrincipal(true);
    props.setExibeRestauracao(false);
    props.setExibeLogin(false);
  }

  const abrePaginaDeLogin = () => {
    props.setExibePaginaPrincipal(false);
    props.setExibeRestauracao(false);
    props.setExibeLogin(true);
    setExibeLogin(false);
  }

  const controlaLogin = () => {
    if (exibeLogin === false) {
      setExibeLogin(true)
    } else {
      setExibeLogin(false)
    }
  }

  const defineCliente = () => {
    props.setTipoDeLogin('cliente')
  }

  const defineCostureira = () => {
    props.setTipoDeLogin('costureira')
  }

  const [exibeLogin, setExibeLogin] = useState(false)

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
          <li id='botao-login' onClick={controlaLogin}><button><img src="/img/icones/icone-usuario.png" alt="" />Entrar</button></li>
          {exibeLogin ?
            <div className='lista-login'>
              <div onClick={() => {
                abrePaginaDeLogin();
                defineCliente();
              }}>Sou cliente <img src="/img/icones/seta-direita.png" alt="" /></div>
              <div onClick={() => {
                abrePaginaDeLogin();
                defineCostureira();
              }}>Sou costureira <img src="/img/icones/seta-direita.png" alt="" /></div>
            </div> : null
          }

        </ul>
      </nav>
    </header>
  )
}

export default Header