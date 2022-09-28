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
  const [Seach, setSeach] = useState('')

  /*ResAPi*/
  const url = 'http://www.omdbapi.com/?apikey=2c56011e&&s=movie';
  const urls = 'http://www.omdbapi.com/?apikey=2c56011e&'
  
  const fetchApi = async (url) => {                             
    const res = await fetch(url);
    const resjson = await res.json(); 
    setMovies(resjson.Search)
  };

  useEffect(() => { 
    fetchApi(url)
  },[])
  

  /*Funciones nav*/
  const SeachMovie = (e) => {
    setSeach(e.target.value)
  }
  const OpenCloseNav = () => {   //para cambiar el estado de false a true y bicebersa para asi deplegar la barra  dependiendo si es true o false
    setNavigationBar(!NavigationBar)
  }

  const SendUrl = (e) => {
    e.preventDefault();
    if (!Seach) {  
      return Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'No Movies found',
        text:'Please Write a valid text',
        showConfirmButton: false,
        timer: 1500
      })
    }

    fetchApi(`${urls}&s=${Seach}`)

  }


  
  /*Funciones para filtros horror etc*/
  const Moviesurl = () => { 
    fetchApi(`${urls}&s=movies`)
  }
  const Showurl = () => { 
    fetchApi(`${urls}&s=show`)
  }
  const Animationurl = () => { 
    fetchApi(`${urls}&s=animation`)
  }
  const Horrorurl = () => { 
    fetchApi(`${urls}&s=horror`)
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
            {Movies.map((item ,index) => (  //recorremos la peliculas con un map
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




