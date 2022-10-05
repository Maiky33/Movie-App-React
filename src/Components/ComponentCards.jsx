import '../css/ComponentCards.css'


const ComponentCards = ({item ,HandleClick}) =>{
  //pasamos item por parametros para usarlo en el map

  
  return (//hacemos un onClick y Pasamos por pareametros la funcion HandleClick con el parametro item 
    <div onClick={()=>HandleClick(item)} className="ContainerCard">
      <img className="imagenPoster" alt="imagen" src={item.Poster} />
      <h2>{item.Title}</h2>
      <p>{item.Type}</p>
      <p>{item.Year}</p>
      <p>{item.released}</p>
      <p>{item.director}</p>
    </div> 
  );
}

export default ComponentCards