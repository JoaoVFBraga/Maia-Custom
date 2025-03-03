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
          <p className='servicos-p'>Na MAIA CUSTOM, cada peça é tratada com cuidado e dedicação, contribuindo para um futuro mais sustentável e para o fortalecimento da nossa comunidade local.</p>
          <div className='flex-cards'>
            <div className='container-cards'>
              <h4>Restauração/Customização</h4>
              <p>Conserto de costuras, ajustes no caimento, troca de zíper ou botões,
Correção de danos, como rasgos, desgastes, manchas ou desbotamento,
reparo de tecidos danificados. Garantindo que a peça volte a ser funcional e confortável.</p>
              <button onClick={exibeRestaurar}>Restaurar</button>
            </div>
            <div className='container-cards'>
              <h4>Criação</h4>
              <p>Desenvolvemos uma peça única e exclusiva, totalmente personalizada para você. Cada detalhe é cuidadosamente descrito e desenhado de acordo com suas preferências e necessidades. Para garantir um entendimento completo do projeto, você poderá anexar imagens ao desenho, tornando o processo ainda mais claro e preciso.</p>
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