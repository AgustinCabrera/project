import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetialContainer';
import { CartProvider } from './assets/context/CartContext';
import Checkout from './componentes/Checkout/Checkout';


function App( ) {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/checkout' element = {<Checkout />} />
            <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
  </div>
  );
}

export default App;

