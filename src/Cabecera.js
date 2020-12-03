// En el componente de la cabecera, haz que se muestre el nombre del usuario y su imagen. En caso de que sea un cliente VIP en vez de sólo mostrar su nombre muestra un saludo. Añade un botón que haga que el usuario pase de no ser VIP a ser VIP.

import { useState } from "react";

function Cabecera(props) {
  let [vip, setVip] = useState(props.vip);
  function soyVip() {
    if (vip) {
      setVip(false);
    } else {
      setVip(true);
    }
  }

  if (vip === true) {
    return (
      <div className="user">
        <h1>Hello Mr. {props.nombreUsuario}</h1>
        <img
          src={props.imagenUsuario}
          alt="props.nombreUsuario"
          height="200px"
        />
        <br></br>
        <button onClick={soyVip}>SOY VIP</button>
      </div>
    );
  } else {
    return (
      <div className="user">
        <h1>Hola Tron</h1>
        <img
          src={props.imagenUsuario}
          alt="props.nombreUsuario"
          height="200px"
        />
        <br></br>
        <button onClick={soyVip}>SOY VIP</button>
      </div>
    );
  }
}

export default Cabecera;
