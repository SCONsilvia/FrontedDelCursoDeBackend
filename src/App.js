import Header from './components/Header';
import Productos from './components/Productos';
import Historial from './components/Historial';
import InicioDeSesion from './components/InicioDeSesion'
import UserData from './components/UserData'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() { 
  return (
    <div className="App">
      <BrowserRouter>{/* todos estos componente de adentro tienen acceso a las url */}
        <Header/>
        {/* Componente que depende de la ruta el header no depende de la ruta pues se muestra siempre asi que no va dentro */}
        <Routes>
          <Route path="/" element={<Productos/>}/>
          <Route path="/historial" element={<Historial/>}/>
          <Route path="/inicioDeSesion" element={<InicioDeSesion/>}/>
          <Route path="/User" element={<UserData/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
