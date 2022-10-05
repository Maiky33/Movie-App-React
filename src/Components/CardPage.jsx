import "../css/CardPage.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import {useNavigate,useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'


const CardPage = () => {   
  
  const [item, setitem] = useState('')//usamos el use state para guardar la movie que llega en la funcion fetchApi, y asi poder usarla en el componente

  const Url = 'https://www.omdbapi.com/?apikey=2c56011e&i='//usamos la url que nos permite localizar la movie con el id
  
  const fetchApi = async (url) => {//Llmamos la api con la funcion fetchApi la cual va recibir una url con la iD
    const res = await fetch(url);//Guardamos la respuesta en res
    const resjson = await res.json();//guardamos res en resjson pero lo convertimos para poder leerlo
    setitem(resjson)//actualizamos item usando setitem(resjson) y dentro resjson para tener la respuesta en item
  }
  
  const { MovieID }  = useParams(); // usamos use param para poder usar el ID de la url que nos haya enviado App
  

  useEffect(() => { //usamos useEffect, para que al llamar al componente la primera vez, llame la funcion fetchapi la cual recibe una url, y esta url va ser, la Url mas la ID que recibimos por parametros, y asi al llamar esa api nos traera la movie que corresponde a la ID
    fetchApi(`${Url}${MovieID}`)
    // eslint-disable-next-line
  }, [])


  const navegite = useNavigate(); //hacemos un useNavegite para poder con el boton de este componente salir a la pagina principal
  const HandleClickButton =() => {//hacemos la funcion para el boton 
    navegite('/Movie-App-React');// llamamos a navegite el cual nos direcciona a la ruta dentro de este
  }


  
  return (//Por ultimo usamos el el useState, en el cual al llamar la api, se guarda ladata(o la movie) en item con setitem y asi lo ussamos para poder recibir la informacion en el componente
    <div className="ContainerCardPages"> 
      <div className='containerCardPage'>
        <div className="ContainerButton"> 
          <button onClick={HandleClickButton} className="Button_Exit"><BsFillCaretLeftFill/>Exit</button>
        </div>
        <div className="flexInfoImage"> 
          <img className="imagenPosterCarPage" alt="imagen" src={item.Poster} />
          <div className="flexInfo"> 
            <h2 className="titleh2">{item.Title}</h2>
            <p><strong className="Fonsizeinfo">Genre:</strong> {item.Genre}</p>
            <p><strong className="Fonsizeinfo">Year: </strong>{item.Year}</p>
            <p><strong className="Fonsizeinfo">Released: </strong>{item.Released}</p>
            <p><strong className="Fonsizeinfo">Director: </strong>{item.Director}</p>
            <p><strong className="Fonsizeinfo">Actors: </strong>{item.Actors}</p>
            <p><strong className="Fonsizeinfo">Runtime: </strong>{item.Runtime}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPage