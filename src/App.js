// 6. Crea una aplicación de una librería.

//  Pon los datos del objeto libreria únicamente en el componente App. (Importar la libreria a App y trabajar con ella desde ahí)

// En el componente de la cabecera, haz que se muestre el nombre del usuario y su imagen. En caso de que sea un cliente VIP en vez de sólo mostrar su nombre muestra un saludo. Añade un botón que haga que el usuario pase de no ser VIP a ser VIP.

// En el main de la página (en otro componente) muestra los elementos del array libros. Por cada uno de ellos, muestra el título en un h1, el autor en un h2, la descripción en un p y la imagen y otro p para el stock.
//Utiliza un componente Libro para mostrarlos.

//Dentro del componente libro añade un botón que cuando se pulse quite uno del stock del libro. Cuando llegue a cero, en vez de mostrar el mensaje “Stock: 0” muestra el mensaje “No quedan copias”.

// Finalmente en el footer muestra un componente Libro como "el libro de oferta" que recibirá uno de los libros del array libros de manera aleatoria (cada vez que recarguemos la página debería mostrar uno)

import "./App.css";
import libreria from "./libreria";
import Cabecera from "./Cabecera";
import Main1 from "./Main1";
import Footer from "./Footer";

function App() {
  return (
    <div className="body">
      <Cabecera
        nombreUsuario={libreria.usuario.nombre}
        imagenUsuario={libreria.usuario.imagen}
        usuarioVip={libreria.usuario.vip}
      />
      <h1>OFERTAS DESTACADAS</h1>
      <Main1 />
      <h2>EL LIBRO DE LA SEMANA</h2>
      <Footer />
    </div>
  );
}

export default App;
