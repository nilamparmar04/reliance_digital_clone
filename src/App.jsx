import { useState , createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout'
import OrderHistory from './pages/OrderHistory/OrderHistory'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Productlist from './pages/Productlist/Productlist'
import RegistrationLogin from './pages/RegistrationLogin/RegistrationLogin'
import LoginUser from './pages/LoginUser/LoginUser'
import Cart from './pages/Cart/Cart'
import WishList from './pages/WishList/WishList'
import UserProfile from './pages/UserProfile/UserProfile'

export const UserContext = createContext();
export const CartContext = createContext();

function App() {
  const [user,setUser] = useState({});
  const [cart,setCart]= useState([]);
  return (
    <UserContext.Provider value={{user,setUser}}>
      <CartContext.Provider value={{cart,setCart}}>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/orderhistory" element={<OrderHistory/>} />
        <Route path="/productdetails/:id" element={<ProductDetails/>} />
        <Route path="/productlist/:name" element={<Productlist/>} />
        <Route path="/register" element={<RegistrationLogin/>} />
        <Route path="/login" element={<LoginUser/>} />
        <Route path="/mycart" element={<Cart/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/userprofile" element={<UserProfile/>}/>
      </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  )
}

export default App
