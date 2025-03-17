import "./Costureira.css";

export default function Costureira({ NumCostureira }) {

    const dadosCostureiras = {
        costureira1: {
            nome: 'Ana Silva',
            foto: '/img/fotos-costureiras/foto1.jpg',
            id: 1
        },
        costureira2: {
            nome: 'Beatriz Costa',
            foto: '/img/fotos-costureiras/foto2.jpg',
            id: 2
        },
        costureira3: {
            nome: 'Camila Almeida',
            foto: '/img/fotos-costureiras/foto3.jpg',
            id: 3
        },
        costureira4: {
            nome: 'Daniela Souza',
            foto: '/img/fotos-costureiras/foto4.jpg',
            id: 4
        },
        costureira5: {
            nome: 'Elisa Fernandes',
            foto: '/img/fotos-costureiras/foto5.jpg',
            id: 5
        },
        costureira6: {
            nome: 'Fernando Lima',
            foto: '/img/fotos-costureiras/foto6.jpg',
            id: 6
        },
        costureira7: {
            nome: 'Gabriela Rocha',
            foto: '/img/fotos-costureiras/foto7.jpg',
            id: 7
        },
        costureira8: {
            nome: 'Helena Martins',
            foto: '/img/fotos-costureiras/foto8.jpg',
            id: 8
        },
        costureira9: {
            nome: 'Isabela Gonçalves',
            foto: '/img/fotos-costureiras/foto9.jpg',
            id: 9
        },
        costureira10: {
            nome: 'Juliana Santos',
            foto: '/img/fotos-costureiras/foto10.jpg',
            id: 10
        },
        costureira11: {
            nome: 'Larissa Oliveira',
            foto: '/img/fotos-costureiras/foto11.jpg',
            id: 11
        },
        costureira12: {
            nome: 'Mariana Pereira',
            foto: '/img/fotos-costureiras/foto12.jpg',
            id: 12
        },
        costureira13: {
            nome: 'Natália Ramos',
            foto: '/img/fotos-costureiras/foto13.jpg',
            id: 13
        },
        costureira14: {
            nome: 'Olivia Barbosa',
            foto: '/img/fotos-costureiras/foto14.jpg',
            id: 14
        },
        costureira15: {
            nome: 'Paula Mendes',
            foto: '/img/fotos-costureiras/foto15.jpg',
            id: 15
        },
    }

    const costureira = dadosCostureiras[`costureira${NumCostureira}`]

    return (
        <div className='costureira-radio'>
            <label htmlFor={`costureira-${costureira.id}`}>{costureira.nome}</label>
            <picture><img src={costureira.foto} alt="Foto de perfil" /></picture>
            <input type="radio" name="costureira" id={`costureira-${costureira.id}`} />
        </div>
    )
}