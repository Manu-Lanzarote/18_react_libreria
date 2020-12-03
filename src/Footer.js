import libreria from "./libreria";

function Footer() {
  //Número de libros que hay en la librería
  let numDeLibros = libreria.libros.length;
  //Obtengo un número aleatorio
  let numAleatorio = Math.floor(Math.random(1) * numDeLibros);

  return (
    <>
      <h1>{libreria.libros[numAleatorio].titulo}</h1>
      <h2>{libreria.libros[numAleatorio].autor}</h2>
      <p>{libreria.libros[numAleatorio].descripcion}</p>
      <img
        src={libreria.libros[numAleatorio].img}
        alt={libreria.libros[numAleatorio].titulo}
        height="450px"
      />
    </>
  );
}

export default Footer;
