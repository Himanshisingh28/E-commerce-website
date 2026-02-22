
import './App.css';
import Navbar from './Components/Assets/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategary from './pages/ShopCategary';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './Components/Footer/Footer';
import Login_Signup from './pages/Login_Signup.jsx';
import men_banner from './Components/Assets/Assets/banner_mens.png';
import women_banner from './Components/Assets/Assets/banner_women.png';
import kids_banner from './Components/Assets/Assets/banner_kids.png';
import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/women' element={<ShopCategary banner={women_banner} category="women"/>}/>
        <Route path='/men' element={<ShopCategary banner={men_banner} category="men"/>}/>
        <Route path='/kids' element={<ShopCategary banner={kids_banner} category="kid" />}/>
        <Route path="/product" element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login_Signup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
