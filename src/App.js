import './App.css';
import { Testimonio } from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio 
          nombre = 'Shawn Wang'
          pais = 'Singapur'
          imagen = 'shawn'
          cargo = 'Ingeniero de software'
          empresa = 'Amazon'
          testimonio = 'Siempre he tenido problemas para aprender JS. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedo. Estudiar JS asi como estructura de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify'
        />
        <Testimonio 
          nombre = 'Sarah Chima'
          pais = 'Nigeria'
          imagen = 'sarah'
          cargo = 'Ingeniera de software'
          empresa = 'ChatDesk'
          testimonio = 'Siempre he tenido problemas para aprender JS. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedo. Estudiar JS asi como estructura de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify'
        />
        <Testimonio 
          nombre = 'Emma Bostian'
          pais = 'Suecia'
          imagen = 'emma'
          cargo = 'Ingeniera de software'
          empresa = 'Spotify'
          testimonio = 'Siempre he tenido problemas para aprender JS. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedo. Estudiar JS asi como estructura de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify'
        />
        
        
      </div>
    </div>
  );
}

export default App;
