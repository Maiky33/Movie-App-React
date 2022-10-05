import "../css/CardPage.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import {useNavigate,useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'


const CardPage = () => {   
  
  const [item, setitem] = useState('')
  const Url = 'https://www.omdbapi.com/?apikey=2c56011e&i='
  
  const fetchApi = async (url) => {
    const res = await fetch(url);
    const resjson = await res.json();
    setitem(resjson)
  }
  
  const { id } = useParams();

  useEffect(() => { 
    fetchApi(`${Url}${id}`)
    // eslint-disable-next-line
  }, [])

  const navegite = useNavigate();
  const HandleClickButton =() => {
    navegite('/Movie-App-React');
  }


  
  return ( 
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