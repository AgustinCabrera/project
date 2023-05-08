import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetialContainer';


function App( ) {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path="/cart" element={"Cart"} />
            <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;

