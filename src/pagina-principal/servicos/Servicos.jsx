import './Servicos.css'

function Servicos(props) {

  const exibeRestaurar = () => {
    props.setExibePaginaPrincipal(false);
    props.setExibeRestauracao(true);
  }

  return (
    <div className='servicos-container' id='servicos'>
      <div className='servicos-conteudo'>
        <div className='servicos-texto'>
          <h3>SERVIÇOS</h3>
          <p className='servicos-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit, error quod, repellendus inventore totam iusto ullam illum sunt adipisci laborum. Dolore numquam adipisci nihil veritatis ipsa. Saepe, ducimus cupiditate.</p>
          <div className='flex-cards'>
            <div className='container-cards'>
              <h4>Restauração</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempora voluptas distinctio, consectetur doloremque voluptatum error voluptatibus nihil non amet, provident a officiis quasi? Veniam facilis eaque nisi commodi voluptate?</p>
              <button onClick={exibeRestaurar}>Restaurar</button>
            </div>
            <div className='container-cards'>
              <h4>Criação</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempora voluptas distinctio, consectetur doloremque voluptatum error voluptatibus nihil non amet, provident a officiis quasi? Veniam facilis eaque nisi commodi voluptate?</p>
              <button>Criar</button>
            </div>
          </div>
        </div>
        <div className='servicos-img'>
          <img src="/img/primeira-pagina/maquina-de-costura.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Servicos