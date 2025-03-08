import './CadastroCostureira.css'

export default function CadastroCostureira() {
    return (
        <div className='cadastro-costureira-container'>
            <div className='cadastro-lado-esquerdo'>
                <h2>Faça seu cadastro</h2>
                <p>Após analisarmos seus dados, entraremos em contato para efetivar sua conta</p>
            </div>
            <div className='cadastro-lado-direito'>
                <form action="/" className='form-costureira'>
                    <label htmlFor="nome">Nome Completo</label>
                    <input type="text" id="nome" />
                    <label htmlFor="nascimento">Data de nascimento</label>
                    <input type='date' id="nascimento" />
                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="text" id="cnpj" />
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" id="cidade" />
                    <label htmlFor="estado">Estado</label>
                    <select id="estado">
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
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="password" />
                    <div>
                        <button>Voltar</button>
                        <button>Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}