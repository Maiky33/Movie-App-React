import { BsSearch, BsCircle, BsCaretDownFill } from "react-icons/bs";
import { TiPointOfInterest } from "react-icons/ti";
import "../css/ComponentNav.css";

const ComponentNav = ({
  OpenCloseNav,
  Moviesurl,
  Showurl,
  Animationurl,
  Horrorurl,
}) => {
  //pasamos funsion por parametro para usarla en app.js
  const abrirCerrarmenu = () => {
    OpenCloseNav();
  };

  /*Links filtros generos*/

  const urlmovies = () => {
    Moviesurl();
  };
  const urlshow = () => {
    Showurl();
  };
  const urlanimation = () => {
    Animationurl();
  };
  const urlHorror = () => {
    Horrorurl();
  };

  return (
    <div className="ContainerNav">
      <h1 className="ContainerTittle">MOVEA</h1>

      <div className="ContainerListNav">
        <ul className="listNav">
          <li onClick={urlmovies}>Movies</li>
          <li onClick={urlshow}>TVshows</li>
          <li onClick={urlanimation}>Animations</li>
          <li onClick={urlHorror}>Terror</li>
        </ul>

        <div className="ContainerItemNav">
          <BsSearch className="CursorPointer" onClick={abrirCerrarmenu} />
          <BsCircle className="CursorPointer" />
          <TiPointOfInterest className="CursorPointer" />
          <BsCaretDownFill className="CursorPointer" />
        </div>
      </div>
    </div>
  );
};

export default ComponentNav;
