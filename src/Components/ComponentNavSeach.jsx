import { BsCircle, BsCaretDownFill, BsFillCaretLeftFill } from "react-icons/bs";
import { TiPointOfInterest } from "react-icons/ti";

const ComponentNavSeach = ({ SeachMovie, OpenCloseNav, SendUrl }) => {
  //pasamos por parametros las funciones que necesittamos en app.js

  const buscarpeli = (e) => {
    SeachMovie(e);
  };

  const abrirCerrarmenu = () => {
    OpenCloseNav();
  };

  const enviarurl = (e) => {
    SendUrl(e);
  };

  return (
    <div className="ContainerNav">
      <h1 className="ContainerTittle">MOVEA</h1>

      <div className="ContainerListNav">
        <form onSubmit={enviarurl}>
          <input
            placeholder="Seach Movie"
            className="inputSeach"
            onChange={buscarpeli}
          />
        </form>

        <div className="ContainerItemNav">
          <BsFillCaretLeftFill
            className="CursorPointer"
            onClick={abrirCerrarmenu}
          />
          <BsCircle className="CursorPointer" />
          <TiPointOfInterest className="CursorPointer" />
          <BsCaretDownFill className="CursorPointer" />
        </div>
      </div>
    </div>
  );
};

export default ComponentNavSeach;
