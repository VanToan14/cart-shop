import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/about'
import Contact from './pages/contact';
import Home from './pages/home'
import Shop from './pages/Shop';
import Events from './pages/events';
import Detailproduct from './components/product/detailProduct';
import ScrollButton from './components/scrolltotop/ScrollButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NotFound from './pages/NotFound';
import Cart from './pages/cart';
import ProductCategory from './components/Category/productCategory';
import AllProductCategory from './components/Category/AllProductcategory';
import Footer from './pages/Footer';

function App() {
  const [cartItems,setCartItems]=useState([])
  const onAdd=(product)=>{
    const exist= cartItems.find((x)=>x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map((x)=>
          x.id ===  product.id ?{...exist, qty: exist.qty+1 }:x
        ) 
      );
      // const jsonJobs=JSON.stringify(exist)
      // localStorage.setItem('cart',jsonJobs)
      // return exist
    }
    else{
      setCartItems([...cartItems, {...product,qty: 1 }]);  
    }
  }; 
  const onRemove=(product)=>{
    const exist= cartItems.find((x)=>x.id === product.id);
    if(exist.qty===1){
      setCartItems(cartItems.filter((x)=>x.id!==product.id))
    }
    else
    {
      setCartItems(
        cartItems.map((x)=>
          x.id ===  product.id ?{...exist, qty: exist.qty - 1 }:x
        )
      );
    }
  };
  const remove=(product)=>{
    const exist= cartItems.find((x)=>x.id === product.id);
    if(exist.qty!==0){
      setCartItems(cartItems.filter((x)=>x.id!==product.id))
    }
  };
const showtotalcart=()=>{
  const resuft = cartItems.map((cartItems) => {
    return cartItems.qty
  })
  return resuft && resuft.length > 0 ? resuft.reduce((total, current) => total + current) : '0'
};
  return (
    <>
    <div className="menu">
      <BrowserRouter>
        <Navbar showtotalcart={showtotalcart}/>
        <Routes>
          <Route path="/" element={<Home onAdd={onAdd}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="shop" element={<Shop/>}>
              <Route index element={<AllProductCategory onAdd={onAdd}/>}/>
              <Route path=":path/:id" element={<ProductCategory onAdd={onAdd}/>}/>
          </Route>
          <Route path="/events" element={<Events/>}/>
          <Route path="/cart" element={<Cart cartItems={cartItems}
                                             onAdd={onAdd}
                                             remove={remove} 
                                             onRemove={onRemove}
                                        />}
          />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/:path/:id" element={<Detailproduct/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    <ScrollButton/>
    </>
  );
}

export default App;
