import { useState } from 'react';
import './Restauracao.css'

export default function Restauracao() {

  const tabelaDePrecos = {
    'camisa': {
      restauracao: 10,
      customizacao: 20,
      criacao: 30
    },
    'camiseta': {
      restauracao: 10,
      customizacao: 20,
      criacao: 30
    },
    'blusa': {
      restauracao: 10,
      customizacao: 20,
      criacao: 30
    },
    'vestido': {
      restauracao: 10,
      customizacao: 20,
      criacao: 30
    },
    'saia': {
      restauracao: 10,
      customizacao: 20,
      criacao: 30
    },
    'calça': {
      restauracao: 10,
      customizacao: 20,
      criacao: 30
    },
    'short': {
      restauracao: 10,
      customizacao: 20,
      criacao: 30
    },
  }

  const chaves = Object.keys(tabelaDePrecos);

  const [tipo, setTipo] = useState('');
  const [servico, setServico] = useState('');
  const [descricao, setDescricao] = useState('');
  const [formulario, setFormulario] = useState(true);
  const [confirmaFormulario, setConfirmaFormulario] = useState(false);
  const [agradecimento, setAgradecimento] = useState(false);
  const [valorTotal, setValorTotal] = useState(0)

  const mudaTipo = (e) => {
    setTipo(e.target.id);
  }

  const mudaServico = (e) => {
    setServico(e.target.id);
  }

  const mudaDescricao = (e) => {
    setDescricao(e.target.value)
  }

  const fazerOrcamento = (e) => {
    e.preventDefault();
    if (tipo === '' | servico === '' | descricao === '') {
      alert('Preencha todos os campos')
    } else {
      setValorTotal(tabelaDePrecos[tipo][servico]);
      setFormulario(false);
      setConfirmaFormulario(true);
    }
  }

  const voltarOrcamento = () => {
    setFormulario(true);
    setConfirmaFormulario(false);
    setTipo('');
    setServico('');
    setDescricao('');
  }

  const mostrarAgradecimento = () => {
    setConfirmaFormulario(false);
    setAgradecimento(true);
  }

  return (
    <div className='restauracao-background'>
      <div className='restauracao-container'>
        <h2>Restaure/Customize uma peça</h2>
        <p>Preencha os campos abaixo e faça seu orçamento</p>
        {formulario ?
          <form action="#" className='formulario-restauracao' onSubmit={fazerOrcamento}>
            <p>1- Selecione o tipo da peça:</p>
            <div className='container-radio'>
              {chaves.map((tipo) => (
                <div className='item-radio' key={tipo}>
                  <input type="radio" name="roupa" id={tipo} onChange={mudaTipo} />
                  <label htmlFor={tipo}>{tipo}</label>
                </div>
              ))}
            </div>
            <p>2- Selecione o tipo de serviço:</p>
            <div className='container-radio'>
              <div className='item-radio'>
                <input type="radio" name="servico" id='restauracao' onChange={mudaServico} />
                <label htmlFor='restauracao'>Restauração</label>
              </div>
              <div className='item-radio'>
                <input type="radio" name="servico" id='customizacao' onChange={mudaServico} />
                <label htmlFor='customizacao'>Customização</label>
              </div>
            </div>
            <p>3- Descreva como deseja que o serviço seja feito:</p>
            <textarea className='area-de-texto' onChange={mudaDescricao}></textarea>
            <button className='btn-orcamento'>Fazer orçamento</button>
          </form> : null
        }
        {confirmaFormulario ?
          <div className='confirmacao-restauracao'>
            <div className='container-valor'>
              <h3>Valor Total: </h3>
              <span className='valor-total'>R$ {valorTotal}</span>
            </div>
            <div className='btn-valor'>
              <button className='btn-voltar' onClick={voltarOrcamento}>Voltar</button>
              <button className='btn-orcamento' onClick={mostrarAgradecimento}>Continuar</button>
            </div>
          </div> : null
        }
        {agradecimento ?
          <div className='confirmacao-restauracao agreadecimento-restauracao'>
            <h3>Agradeçemos a confiança!</h3>
            <p>Um dos nossos atendentes entrará em contato para finalizar o atendimento</p>
            <button>Finalizar</button>
          </div> : null
        }
      </div>
    </div>
  )
}