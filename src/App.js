import Header from './components/Header';
import Productos from './components/Productos';
import Historial from './components/Historial';
import InicioDeSesion from './components/InicioDeSesion'
import UserData from './components/UserData'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FormNewUser from './components/FormNewUser';
import Carrito from './components/Carrito';
import Categorias from './components/Categorias'
import { WebsocketContextProvide } from "./context/WebsocketContext";
import Chat from './components/Chat'

function App() { 
  return (
    <div className="App">
      <BrowserRouter>{/* todos estos componente de adentro tienen acceso a las url */}
        <Header/>
        {/* Componente que depende de la ruta el header no depende de la ruta pues se muestra siempre asi que no va dentro */}
        <WebsocketContextProvide>
        <Routes>
          <Route path="/" element={<Productos/>}/>
          <Route path="/historial/:categoryId" element={<Historial/>}/>
          <Route path="/inicioDeSesion" element={<InicioDeSesion/>}/>
          <Route path="/User" element={<UserData/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/newLogin" element={<FormNewUser/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/categoria" element={<Categorias/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/productos" element={<Productos/>}/>
          


        </Routes>
        </WebsocketContextProvide>
      </BrowserRouter>
    </div>
  );
}

export default App;
