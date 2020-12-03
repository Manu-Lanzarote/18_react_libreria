import { useState } from "react";

function Libro(props) {
  let [stock, setStock] = useState(props.stock);
  function restar() {
    if (stock > 0) {
      setStock(stock - 1);
    } else {
      setStock("No quedan copias");
    }
  }

  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.autor}</h2>
      <p>Sinopsis</p>
      <p>{props.descripcion}</p>
      <img src={props.imagen} alt="" height="200px" />
      <p>Stock en tienda: {stock}</p>
      <button onClick={restar}>COMPRAR</button>
      <p> . . . . .</p>
    </div>
  );
}

export default Libro;
