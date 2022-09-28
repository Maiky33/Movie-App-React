import '../css/ComponentCards.css'

const ComponentCards = ({item}) => { //pasamos item por parametros para usarlo en el map
    return (
        <div className='ContainerCard'>
            <img className='imagenPoster' alt='imagen' src={item.Poster}/>
            <h2>{item.Title}</h2>
            <p>{item.Type}</p>
            <p>{item.Year}</p>
            <p>{item.released}</p>
            <p>{item.director}</p>
        </div>
    )
}

export default ComponentCards