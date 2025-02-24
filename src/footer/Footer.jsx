import './Footer.css'

function Footer() {
  return (
    <div className='container-footer' id='contato'>
      <h4 className='logo-footer'>MAIA CUSTOM</h4>
      <div className='contatos-container'>
        <h4>Redes Sociais</h4>
        <a href="#"><img src="/img/icones/icone-facebook.png" alt="" />Facebook</a>
        <a href="#"><img src="/img/icones/icone-instagram.png" alt="" />Instagram</a>
        <a href="#"><img src="/img/icones/icone-tiktok.png" alt="" />TikTok</a>
        <a href="#"><img src="/img/icones/icone-twitter.png" alt="" />Twitter</a>
        <a href="#"><img src="/img/icones/icone-youtube.png" alt="" />YouTube</a>
      </div>
      <div className='contatos-container'>
        <h4>Contato</h4>
        <a href="#"><img src="/img/icones/icone-telefone.png" alt="" />(19)99999-9999</a>
        <a href="#"><img src="/img/icones/icone-whatsapp.png" alt="" />(19)99999-9999</a>
        <a href="#"><img src="/img/icones/icone-email.png" alt="" />maiacustom@email.com</a>
      </div>
      <div className='app-container'>
        <h4>Baixe o nosso App</h4>
        <a href="#"><img src="/img/lojas-de-aplicativos/appstore.webp" alt="" /></a>
        <a href="#"><img src="/img/lojas-de-aplicativos/applestore.svg" alt="" /></a>
      </div>
    </div>
  )
}

export default Footer