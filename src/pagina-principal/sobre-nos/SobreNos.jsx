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
              <span className='dados-numeros'>92 milhões</span>
              <span className='dados-descricao'>Dos 100 bilhões de peças de vestuário produzidas a cada ano, acabam em aterros sanitários.</span>
            </div>
            <div className='dados-container'>
              <span className='dados-numeros'>De 7 a 10 vezes</span>
              <span className='dados-descricao'>É o número de vezes que muitos itens são usados antes de serem jogados fora. Isso é um declínio de mais de 35% em apenas 15 anos.</span>
            </div>
            <div className='dados-container'>
              <span className='dados-numeros'>20% da poluição</span>
              <span className='dados-descricao'>Global da água se deve ao tingimento e acabamento das roupas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreNos