import './App.css';
import { Testimonio } from './components/Testimonio';
import { datos1, datos2, datos3 } from './components/props';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio 
          nombre = {datos1.nombre}
          pais = {datos1.pais}
          imagen = {datos1.imagen}
          cargo = {datos1.cargo}
          empresa = {datos1.empresa}
          testimonio = {datos1.testimonio}
        />
        <Testimonio 
              nombre = {datos2.nombre}
              pais = {datos2.pais}
              imagen = {datos2.imagen}
              cargo = {datos2.cargo}
              empresa = {datos2.empresa}
              testimonio = {datos2.testimonio}
        />
        <Testimonio 
             nombre = {datos3.nombre}
             pais = {datos3.pais}
             imagen = {datos3.imagen}
             cargo = {datos3.cargo}
             empresa = {datos3.empresa}
             testimonio = {datos3.testimonio}
        />
      </div>
    </div>
  );
}

export default App;
