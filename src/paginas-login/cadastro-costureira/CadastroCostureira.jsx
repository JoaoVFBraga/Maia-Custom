import './CadastroCostureira.css'

export default function CadastroCostureira({ titulo, texto, login, nome, telefone, nascimento, cnpj, cpf, cidade, estado, email, senha, especialidade, botaoFinal, acaoBotaoLogin, voltaAoInicio }) {

    const cancelaEnvio = (e) => {
        e.preventDefault();
    }

    return (
        <div className='cadastro-costureira-container'>
            <div className='cadastro-lado-esquerdo'>
                <h2>{titulo}</h2>
                <p>{texto}</p>
                <p className='botaoDeLogin' onClick={acaoBotaoLogin}>{login}</p>
            </div>
            <div className='cadastro-lado-direito'>
                <form action="/" className='form-costureira' onSubmit={cancelaEnvio}>
                    {nome && (
                        <>
                            <label htmlFor="nome">Nome Completo</label>
                            <input type="text" id="nome" />
                        </>
                    )}
                    {telefone && (
                        <>
                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" id="telefone" placeholder='(99)99999-9999' />
                        </>
                    )}
                    {nascimento && (
                        <>
                            <label htmlFor="nascimento">Data de nascimento</label>
                            <input type='date' id="nascimento" />
                        </>
                    )}
                    {cnpj && (
                        <>
                            <label htmlFor="cnpj">CNPJ</label>
                            <input type="text" id="cnpj" placeholder='12.345.678/0001-95' />
                        </>
                    )}
                    {cpf && (
                        <>
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" id="cpf" placeholder='123.456.789.00' />
                        </>
                    )}
                    {cidade && (
                        <>
                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" id="cidade" />
                        </>
                    )}
                    {estado && (
                        <>
                            <label htmlFor="estado">Estado</label>
                            <select id="estado">
                                <option value="">Selecione uma opção</option>
                                <option value="ac">AC</option>
                                <option value="al">AL</option>
                                <option value="ap">AP</option>
                                <option value="am">AM</option>
                                <option value="ba">BA</option>
                                <option value="ce">CE</option>
                                <option value="df">DF</option>
                                <option value="es">ES</option>
                                <option value="go">GO</option>
                                <option value="ma">MA</option>
                                <option value="mt">MT</option>
                                <option value="ms">MS</option>
                                <option value="mg">MG</option>
                                <option value="pa">PA</option>
                                <option value="pb">PB</option>
                                <option value="pr">PR</option>
                                <option value="pe">PE</option>
                                <option value="pi">PI</option>
                                <option value="rj">RJ</option>
                                <option value="rn">RN</option>
                                <option value="rs">RS</option>
                                <option value="ro">RO</option>
                                <option value="rr">RR</option>
                                <option value="sc">SC</option>
                                <option value="sp">SP</option>
                                <option value="se">SE</option>
                                <option value="to">TO</option>
                            </select>
                        </>
                    )}
                    {email && (
                        <>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder='seuemail@email.com' />
                        </>
                    )}
                    {senha && (
                        <>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" />
                        </>
                    )}
                    {especialidade && (
                        <>
                            <label htmlFor="especialidade">Especialidade</label>
                            <select id="especialidade">
                                <option value="">Selecione uma opção</option>
                                <option value="restauracao">Restauração/Customização</option>
                                <option value="confeccao">Confecção</option>
                            </select>
                        </>
                    )}
                    <div className='botoes-login'>
                        <button className='voltar' onClick={voltaAoInicio}>Voltar</button>
                        <button className='confirmar'>{botaoFinal}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}