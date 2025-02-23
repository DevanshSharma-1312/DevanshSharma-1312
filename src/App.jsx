import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import grocery_banner from './components/assets/images/grocery_banner.jpg';
import milk_banner from './components/assets/images/milk_banner.jpg';
import fresh_banner from './components/assets/images/freshfoods_banner.jpg';
import beverages_banner from './components/assets/images/beverages_banner.jpg';
import Login from './pages/login';
import AddressForm from './pages/AddressForm';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/grocery' element={<Category banner={grocery_banner} category="grocery"/>}/>
        <Route path='/milk' element={<Category banner={milk_banner} category="milk"/>}/>
        <Route path='/fresh' element={<Category banner={fresh_banner} category="fresh"/>}/>
        <Route path='/drinks' element={<Category banner={beverages_banner} category="drinks"/>}/>
        <Route path='/product' elements={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/login1' element={<Login/>} />
        <Route path='/Address_form' element={<AddressForm/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
