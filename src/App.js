import ComponentNav from './Components/ComponentNav'   
import ComponentCards from './Components/ComponentCards'
import ComponentNavSeach from './Components/ComponentNavSeach'
import {useState , useEffect} from 'react'

import Thor from './images/ThorPoster.jpg'
import Joker from './images/JokerPoster.jpg'
import Swal from 'sweetalert2'
import './css/App.css'


function App() {

  /*UseState Movies*/
  const [Movies, setMovies] = useState([]);
  const [NavigationBar, setNavigationBar] = useState(false)
  const [Seach, setSeach] = useState('movie')

  /*ResAPi*/
  const url = 'https://www.omdbapi.com/?apikey=2c56011e&&s=';
  
  
  const fetchApi = async (url) => {                             
    const res = await fetch(url);
    const resjson = await res.json();  // llamamos la api

    if (!resjson || !resjson.Search) { // ponemos una condicion (si no existe resjson o no existe resjson.Search nos retorna la alerta de la libreria Swal.fire )
      return Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'No Movies found',
        text:'Please Write a valid text',
        showConfirmButton: false,
        timer: 1500
      })
    }

    setMovies(resjson.Search)
  };

  useEffect(() => { 
    fetchApi(`${url}${Seach}`) //llamamos apenas renderiza la funcion fetch api con la condicion de url y seach
    // para ignorar dependencia de algun useEffect si este lo es necesario
    // eslint-disable-next-line
  },[])
  

  /*Funciones nav*/
  const SeachMovie = (e) => { // funcion para ver el value del input esta la pasamos por parametros a su componente
    setSeach(e.target.value)
  }
  const OpenCloseNav = () => {   //para cambiar el estado de false a true y bicebersa para asi deplegar la barra  dependiendo si es true o false
    setNavigationBar(!NavigationBar)
  }

  const SendUrl = (e) => { // la funcion es para poder enviar el formulario
    e.preventDefault();// evitamos que haga su funcion por defecto
    if (!Seach) {  //preguntamos si seach(lo que hay dentro del input) existe, si no existe retornamos la alerta
      return Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'No Movies found',
        text:'Please Write a valid text',
        showConfirmButton: false,
        timer: 1500
      })
    }    
    fetchApi(`${url}${Seach}`)//en caso de que exista el codigo sigue y llamamos la funcion fetch api con la direccion nueva  
  }


  
  /*Funciones para filtros horror etc*/
  const Moviesurl = () => {  // usamos estas funciones para poder filtrar con los botones un onClick
    fetchApi(`${url}movies`) // llamamos la funcion con la categoria a filtrar ya que de esta forma funciona la api
  }
  const Showurl = () => { 
    fetchApi(`${url}show`)
  }
  const Animationurl = () => { 
    fetchApi(`${url}animation`)
  }
  const Horrorurl = () => { 
    fetchApi(`${url}horror`)
  }

  

  return (
    <div>
      {NavigationBar ? //Usamos operador ternario para poder deplagar barra de busqueda con un estado
        <ComponentNavSeach OpenCloseNav={OpenCloseNav} SeachMovie={SeachMovie} SendUrl={SendUrl}/>
        :
        <ComponentNav OpenCloseNav={OpenCloseNav} Moviesurl={Moviesurl} Showurl={Showurl} Animationurl={Animationurl} Horrorurl={Horrorurl}/>
      }

      <div className='ContainerSections'> 
        <div className='ImagesPromo'> 
          <h2>News Trailers</h2>
          <img className='ImagePromo' src={Thor} alt='imagen' />
          <img className='ImagePromo' src={Joker} alt='imagen'/>         
        </div>
        <div className='ContainerFlexforGrid'> 
          <div className='ContainerTargetsMovies'>
            {
              Movies.map((item, index) => (  //recorremos la peliculas con un map
                <ComponentCards key={index} item={item}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




