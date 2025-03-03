import './SobreNos.css'

function SobreNos() {
  return (
    <div className='sobre-nos-container' id='sobrenos'>
      <div className='sobre-nos-conteudo'>
        <div className='sobre-nos-img'>
          <img src="/img/primeira-pagina/vestido-azul.jpg" alt="" />
        </div>
        <div className='sobre-nos-texto'>
          <h3>SOBRE NÓS</h3>
          <p>A MAIA CUSTOM nasce com uma proposta inovadora, criativa e sustentável, transformando suas roupas de maneira única e personalizada. Em parceria com costureiras locais, buscamos promover a evolução da economia local, incentivando um consumo mais consciente e responsável.
          Nosso compromisso vai além de oferecer um serviço de alta qualidade: valorizamos a experiência individual de cada cliente, criando soluções que refletem autenticidade e estilo, ao mesmo tempo em que respeitam o meio ambiente. 
          </p>
          <div className='sobre-nos-dados'>
            <div className='dados-container'>
              <span className='dados-numeros'>92 milhões.</span>
              <span className='dados-descricao'>Dos 100 bilhões de peças de vestuário produzidas a cada ano, 92 milhões de toneladas acabam em aterros sanitários.</span>
            </div>
            <div className='dados-container'>
              <span className='dados-numeros'>35% em apenas 15 anos.</span>
              <span className='dados-descricao'>Atualmente, muitos itens são usados ​​apenas de sete a dez vezes antes de serem jogados fora. Isso é um declínio de mais de 35% em apenas 15 anos.</span>
            </div>
            <div className='dados-container'>
              <span className='dados-numeros'>20% das águas residuais globais.</span>
              <span className='dados-descricao'>Tingimento e acabamento são responsáveis ​​por 3% das emissões globais de CO2, bem como por mais de 20% da poluição global da água.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreNos