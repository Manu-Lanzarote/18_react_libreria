import libreria from "./libreria";
import Libro from "./Libro";

function Main1() {
  const mostrarLibro = libreria.libros.map(function (libro) {
    return (
      <div key={libro.titulo}>
        <Libro
          titulo={libro.titulo}
          autor={libro.autor}
          descripcion={libro.descripcion}
          imagen={libro.img}
          stock={libro.stock}
        />
      </div>
    );
  });
  return mostrarLibro;
}

export default Main1;
