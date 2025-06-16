import { useState } from 'react'
import './Criacao.css'
import ExcalidrawComponent from './excalidraw/ExcalidrawComponent'
import Costureira from '../restauracao/Costureira/Costureira';

export default function Criacao(props) {

    const [agradecimentoCriacao, setAgradecimentoCriacao] = useState(false);
    const [tipoDeRoupa, setTipoDeRoupa] = useState('');
    const [costureiraSelecionada, setCostureiraSelecionada] = useState('');

    const finalizaCriacao = () => {
        props.setExibePaginaPrincipal(true);
        props.setExibeCriacao(false);
    }

    const defineRoupa = (e) => {
        setTipoDeRoupa(e.target.id)
        console.log(e.target.id)
    }

    const alteraAgradecimento = () => {
        setAgradecimentoCriacao(true)
    }

    return (
        <div className='criacao-background'>
            {agradecimentoCriacao === false ?
                <div className='criacao-container'>
                    <h2>Crie sua própria peça</h2>
                    <p>Faça um esboço da peça desejada</p>
                    <ExcalidrawComponent />
                    <div className='formulario-tamanho'>
                        <form action="#">
                            <h2>Descreva sua peça com detalhes</h2>
                            <p>Escreva o máximo possível para que possamos entender seu gosto</p>
                            <textarea name="" id=""></textarea>
                            <h2>Escreva suas medidas</h2>
                            <p>Para que possamos fazer uma peça com encaixe perfeito</p>
                            <div className='container-radio'>
                                <div className='item-radio'>
                                    <input type="radio" name="tipo-roupa" id='cima' onChange={defineRoupa} />
                                    <label htmlFor='cima'>Parte de cima</label>
                                </div>
                                <div className='item-radio'>
                                    <input type="radio" name="tipo-roupa" id='baixo' onChange={defineRoupa} />
                                    <label htmlFor='baixo'>Parte de baixo</label>
                                </div>
                            </div>
                            <div>
                                {tipoDeRoupa === 'cima' ?
                                    <div className='opcoes-medidas'>
                                        <label htmlFor="gola">Gola</label>
                                        <input type="text" name="gola" id="gola" />
                                        <label htmlFor="busto">Busto</label>
                                        <input type="text" name="busto" id="busto" />
                                        <label htmlFor="manga">Manga</label>
                                        <input type="text" name="manga" id="manga" />
                                        <label htmlFor="cintura">Cintura</label>
                                        <input type="text" name="cintura" id="cintura" />
                                    </div> : null
                                }

                                {tipoDeRoupa === 'baixo' ?
                                    <div className='opcoes-medidas'>
                                        <label htmlFor="quadril">Quadril</label>
                                        <input type="text" name="quadril" id="quadril" />
                                        <label htmlFor="coxas">Coxas</label>
                                        <input type="text" name="coxas" id="coxas" />
                                        <label htmlFor="perna">Perna</label>
                                        <input type="text" name="perna" id="perna" />
                                    </div> : null
                                }

                            </div>
                            <h2 id='titulo-costureira'>Escolha a costureira</h2>
                            <p>Escolha a profissional que deseja que faça sua peça</p>
                            <div className='container-costureiras'>
                                <Costureira NumCostureira={'11'} selecionada={costureiraSelecionada} setSelecionada={setCostureiraSelecionada} />
                                <Costureira NumCostureira={'12'} selecionada={costureiraSelecionada} setSelecionada={setCostureiraSelecionada} />
                                <Costureira NumCostureira={'13'} selecionada={costureiraSelecionada} setSelecionada={setCostureiraSelecionada} />
                                <Costureira NumCostureira={'14'} selecionada={costureiraSelecionada} setSelecionada={setCostureiraSelecionada} />
                                <Costureira NumCostureira={'15'} selecionada={costureiraSelecionada} setSelecionada={setCostureiraSelecionada} />
                            </div>
                        </form>
                    </div>
                    <button className='btn-orcamento orcamento-criacao' onClick={alteraAgradecimento}>Fazer orçamento</button>
                </div> : null
            }

            {agradecimentoCriacao ?
                <div className='container-agradecimento'>
                    <div className='confirmacao-restauracao agradecimento-restauracao agradecimento-criacao'>
                        <h3>Agradeçemos a confiança!</h3>
                        <p>Um dos nossos atendentes entrará em contato para finalizar o atendimento</p>
                        <button className='btn-orcamento' onClick={finalizaCriacao}>Finalizar</button>
                    </div>
                </div>
                : null
            }
        </div>
    )
}