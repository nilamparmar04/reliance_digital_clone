import React from 'react'
import './Footer2.css'
import {AiFillFacebook,AiOutlineTwitter,AiFillYoutube} from "react-icons/ai";
import googlePlay from './../../assets/images/google_play.webp';
import appStore from './../../assets/images/app_store.webp'
const Footer2 = () => {
  return (
    <div className='footer2_container'> 
      <div className='footer2_box'>
        <div className='footer2_box1'>
            <p className='footer2_title'>FOLLOW US</p>
            <div className='footer2_box1_icons'>
                <AiFillFacebook className='icons' color='white'/>
                <AiOutlineTwitter color='white' className='icons'/>
                <AiFillYoutube color='white' className='icons'/>
            </div>
        </div>
        <div className='footer2_box2'>
        <p className='footer2_title'>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</p>
        <div className="footer2_img">
            <img src={googlePlay} className='footer2_image' alt="error" />
            <img src={appStore}  className='footer2_image' alt="error" />
        </div>
        </div>

      </div>
      
    
    </div>

  )
}

export default Footer2