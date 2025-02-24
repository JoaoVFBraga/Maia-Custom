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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aperiam reprehenderit temporibus incidunt ullam perspiciatis ab delectus at odio beatae quisquam magni repellat sed, eius recusandae earum, quo ut molestias?</p>
          <div className='sobre-nos-dados'>
            <div className='dados-container'>
              <span className='dados-numeros'>100 milhões</span>
              <span className='dados-descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div className='dados-container'>
              <span className='dados-numeros'>100 milhões</span>
              <span className='dados-descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div className='dados-container'>
              <span className='dados-numeros'>100 milhões</span>
              <span className='dados-descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreNos