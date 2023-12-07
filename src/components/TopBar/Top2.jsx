import React, { useContext, useState } from 'react'
import './Top2.css'
import relidig_logo from './../../assets/images/rel_logo.svg'
import {FaShoppingCart} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import { CartContext, UserContext } from './../../App';

const Top2 = () => {
  const {cart} = useContext(CartContext);
  const [search,setSearch] = useState("");
  const navigate=useNavigate();
  const userContext = useContext(UserContext);

  const signOut = () => {
    userContext.setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className='top2_container'>  
      <div>
        <Link to="/">
          <img src={relidig_logo}></img>
        </Link>
      </div>
      <div className='top2_search'>
        <div className='top2_search_box'>
          <input 
          type="text" 
          className='top2_search_input'
          placeholder={'Find your favourite product' } 
          value={search} 
          onChange={(e)=>setSearch(e.target.value)}
            />
          <AiOutlineSearch className='search_icon' color='gray' size={30} onClick={()=>{ 
            navigate(`/productlist/${search}`);
            
          }}/>
        </div>
      </div>
      <div className='search_icons'>
      <span className='search_icon' onClick={()=>{navigate("/mycart")}}><FaShoppingCart color='white'/> Cart {cart.length}</span>
      {userContext.user.name ? <div><span className='user'>{userContext.user.name}</span> | <span className='signout' onClick={signOut}>Logout</span></div> : <span className='search_icon' onClick={()=>navigate("/register")}><FaUser color='white'/> Login</span>}
      </div>
    </div>
  )
} 

export default Top2