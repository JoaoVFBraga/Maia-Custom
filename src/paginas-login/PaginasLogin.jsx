import CadastroCostureira from './cadastro-costureira/CadastroCostureira'
import './PaginasLogin.css'

export default function PaginasLogin(props) {

    const defineLoginCliente = () => {
        props.setTipoDeLogin('loginCliente')
    }

    const defineCliente = () => {
        props.setTipoDeLogin('cliente')
    }

    const voltaAoInicio = () => {
        props.setExibePaginaPrincipal(true);
        props.setExibeLogin(false)
    }

    return (
        <div className='pagina-login-container'>
            {props.tipoDeLogin === 'cliente' ? <CadastroCostureira titulo='Faça seu cadastro' texto='Crie sua conta para começar a renovar seu guarda-roupa' login='Já possui cadastro? Clique aqui' acaoBotaoLogin={defineLoginCliente} nome={true} telefone={true} nascimento={true} cpf={true} cidade={true} estado={true} email={true} senha={true} botaoFinal='Cadastrar' voltaAoInicio={voltaAoInicio} /> : null}

            {props.tipoDeLogin === 'costureira' ? <CadastroCostureira titulo='Faça seu cadastro' texto='Cadastre seus dados e nossa equipe entrará em contato para efetivar o cadastro' nome={true} telefone={true} nascimento={true} cnpj={true} cidade={true} estado={true} email={true} senha={true} especialidade={true} botaoFinal='Cadastrar' voltaAoInicio={voltaAoInicio} /> : null}

            {props.tipoDeLogin === 'loginCliente' ? <CadastroCostureira titulo='Faça seu login' texto='Crie sua conta para começar a renovar seu guarda-roupa' login='Não possui cadastro? Clique aqui' acaoBotaoLogin={defineCliente} email={true} senha={true} botaoFinal='Login' voltaAoInicio={voltaAoInicio} /> : null}
        </div>
    )
}