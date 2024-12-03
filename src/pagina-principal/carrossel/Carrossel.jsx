import './Carrossel.css'

function Carrossel(props) {
  return (
    <div className='carrossel'>
      <div className={`container-carrossel ${props.tema === 'light' ? 'background-claro' : ''}`}>
        <div className='container-logo'>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
        </div>
        <div className='container-logo'>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
          <span className={props.tema === 'light' ? 'light' : ''}>MAIA CUSTOM</span>
        </div>
      </div>
    </div>
  )
}

export default Carrossel