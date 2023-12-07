import React from 'react';
import './Top3.css';
import { BiChevronDown } from 'react-icons/bi';
import DropDown from '../DropDown';
import { Link } from 'react-router-dom';

const Top3 = () => {
  return (
    <div className='top3_container'>
      <ul className='top3_list'>
        <li className='dropdown mobile_tablets'>
          <div className='dropdown_box'>
            <span className='dropdown_title'>MOBILES & TABLETS</span>
          <BiChevronDown  />
          </div>
          <DropDown>
              <ul className='dropdown_list'>
                <li className='dropdown_box_title'>Smartphones</li>
                <li><Link style={{color:'white',textDecoration:'none'}}>Smartwatches</Link></li>
                <li><Link className='dropdown_link'>Apple</Link></li>
                <li><Link className='dropdown_link'>Samsung</Link></li>
                <li><Link className='dropdown_link'>Fireboltt</Link></li>
                <li><Link className='dropdown_link'>Noise</Link></li>
                <li><Link className='dropdown_link'>Boat</Link></li>
              </ul>
              <ul className='dropdown_list'>
                <li className='dropdown_box_title'> Headphones & Headsets</li>
                <li>Tablets & eReaders</li>
                <li>Every Day use Tablets below 15000</li>
                <li>Premium Tablets, Above 15001</li>
                <li>Power Banks</li>
                <li>eSlates</li>
              </ul>
              <ul className='dropdown_list'>
                <li className='dropdown_box_title'> Accessories </li>
                <li>Tablet Accessories</li>
                <li>Mobile Accessories</li>
                <li>Mobile Grips & Stands</li>
                <li>Car Mobile Holders</li>
                <li>Memory Cards</li>
                <li>Cables & Cords</li>
                <li>Chargers & Adapters</li>
              </ul>
          </DropDown>
        </li>
        <li className='dropdown television'>
          <div className="dropdown_box">
            <span className='dropdown_title'>TELEVISIONS</span>
            <BiChevronDown  />
          </div>
          <DropDown>
            <ul className='dropdown_list'>
                <li className='dropdown_box_title'>Television</li>
                <li><Link className='dropdown_link'>32 Inch TVs</Link></li>
                <li><Link className='dropdown_link'>43 Inch TVs</Link></li>
                <li><Link className='dropdown_link'>55 Inch TVs</Link></li>
                <li><Link className='dropdown_link'>Android TVs</Link></li>
            </ul>
            <ul className='dropdown_list'>
                <li className='dropdown_box_title'>Games</li>
                <li><Link className='dropdown_link'>Gaming Consoles</Link></li>
                <li><Link className='dropdown_link'>Gaming Accessories</Link></li>
                <li><Link className='dropdown_link'>Gaming Titles</Link></li>
            </ul>
          </DropDown>
        </li>
        <li className='dropdown audio'>
          <div className="dropdown_box">
          <span className='dropdown_title'>AUDIO</span>
          <BiChevronDown  />
          </div>
          <DropDown>
            <ul className='dropdown_list'>
                <li className='dropdown_box_title'>Headphones & Headsets</li>
                <li><Link className='dropdown_link'>True Wireless</Link></li>
                <li><Link className='dropdown_link'>Bluetooth Neckbands</Link></li>
                <li><Link className='dropdown_link'>Wired Headphones</Link></li>
                <li><Link className='dropdown_link'>Wired Earphones</Link></li>
                <li><Link className='dropdown_link'>Bluetooth Headphones</Link></li>
                <li><Link className='dropdown_link'>Gaming Headset</Link></li>
            </ul>
            <ul className='dropdown_list'>
                <li className='dropdown_box_title'>Speakers & Soundbars</li>
                <li><Link className='dropdown_link'>Bluetooth Speakers</Link></li>
                <li><Link className='dropdown_link'>Home Theatre Systems</Link></li>
                <li><Link className='dropdown_link'>Specialty Speakers</Link></li>
                <li><Link className='dropdown_link'>Soundbars</Link></li>
            </ul>
            <ul className='dropdown_list'>
                <li className='dropdown_box_title'>Musical Instruments</li>
                <li><Link className='dropdown_link'>Guitars and Ukuleles</Link></li>
                <li><Link className='dropdown_link'>Microphones</Link></li>
                <li><Link className='dropdown_link'>Musical Keyboards</Link></li>
            </ul>
          </DropDown>
        </li>
        <li className='dropdown home_appliances'>
          <div className="dropdown_box">
            <span className='dropdown_title'>HOME APPLIANCES</span>
            <BiChevronDown  />
          </div>
          <DropDown>
          <ul className= 'dropdown_list'>
            <li className='drodown_box_title'>Air Conditioners</li>
                <li><Link className='dropdown_link'>Split Air Conditioners</Link></li>
                <li><Link className='dropdown_link'>Window Air Conditioners</Link></li>
                <li><Link className='dropdown_link'>Energy Efficient Air Conditioners</Link></li>
                <li><Link className='dropdown_link'>1 ton Air Conditioners</Link></li>
                <li><Link className='dropdown_link'>Air Purifiers</Link></li>
                <li><Link className='dropdown_link'>Air Coolers</Link></li>
            </ul>
            <ul className='dropdown_list'>
            <li className='drodown_box_title'>Washing Machines</li>
                <li className='dropdown_box_title'>Washing Machines</li>
                <li><Link className='dropdown_link'>Fully Automatic Front Load</Link></li>
                <li><Link className='dropdown_link'>Refrigerators</Link></li>
                <li><Link className='dropdown_link'>Single Door</Link></li>
                <li><Link className='dropdown_link'>Double Door</Link></li>
            </ul>
            <ul className='dropdown_list'>
            <li className='drodown_box_title'>Vaccum Cleaners</li>
                <li className='dropdown_box_title'>Robotic Vacuum Cleaners</li>
                <li><Link className='dropdown_link'>Dishwashers</Link></li>
                <li><Link className='dropdown_link'>Cloth Dryers</Link></li>
                <li><Link className='dropdown_link'>Room Heaters</Link></li>
            </ul>
          </DropDown>


        </li>
        <li className='dropdown computers'>
          <div className="dropdown_box">
            <span className='dropdown_title'>COMPUTERS</span>
            <BiChevronDown  />
          </div>
          <DropDown>
          <ul className= 'dropdown_list'>
            <li className='drodown_box_title'>Laptops</li>
                <li><Link className='dropdown_link'>Basic use laptops</Link></li>
                <li><Link className='dropdown_link'>Student Laptops</Link></li>
                <li><Link className='dropdown_link'>Multi-Tasking Laptops</Link></li>
                <li><Link className='dropdown_link'>Gaming Laptops</Link></li>
                <li><Link className='dropdown_link'>Computer Monitors</Link></li>
                <li><Link className='dropdown_link'>Content creator Laptops</Link></li>
            </ul>
            <ul className= 'dropdown_list'>
            <li className='drodown_box_title'>Bluetooth & WiFi Speakers</li>
                <li><Link className='dropdown_link'>Internet Connectivity Devices</Link></li>
                <li><Link className='dropdown_link'>Routers</Link></li>
                <li><Link className='dropdown_link'>WiFi Range Extenders</Link></li>
                <li><Link className='dropdown_link'>Printers & Inks</Link></li>
                <li><Link className='dropdown_link'>Toners & Ink Cartridges</Link></li>
                <li><Link className='dropdown_link'>Data Storage Devices</Link></li>
            </ul>
            <ul className= 'dropdown_list'>
            <li className='drodown_box_title'>Computer Accessories</li>
                <li><Link className='dropdown_link'>Laptop Chargers & Adaptor</Link></li>
                <li><Link className='dropdown_link'>Laptop Batteries</Link></li>
                <li><Link className='dropdown_link'>Laptop Screen Protectors</Link></li>
                <li><Link className='dropdown_link'>Laptop Bags & Sleeves</Link></li>
                <li><Link className='dropdown_link'>Mouse Pads</Link></li>
                <li><Link className='dropdown_link'>Laptop Tables & Stands</Link></li>
            </ul>
</DropDown>

        </li>
        <li className='dropdown cameras'>
          <div className="dropdown_box">
            <span className='dropdown_title'>CAMERAS</span>
            <BiChevronDown  />
          </div>
          <DropDown>

          <ul className='dropdown_list'> 
          <li className='drodown_box_title'>DSLR cameras</li>
                <li><Link className='dropdown_link'>Mirrorless Cameras</Link></li>
                <li><Link className='dropdown_link'>Point & Shoot Cameras</Link></li>
                <li><Link className='dropdown_link'>ProSumer Cameras</Link></li>
                <li><Link className='dropdown_link'>Photo Storage Devices</Link></li>
                <li><Link className='dropdown_link'>Memory Cards</Link></li>
                </ul>
           <ul className='dropdown_list'> 
                <li className='drodown_box_title'>Binoculars</li>
                <li><Link className='dropdown_link'>Camera Lens</Link></li>
                <li><Link className='dropdown_link'>Digital Camera Accessories</Link></li>
                <li><Link className='dropdown_link'>Camera Batteries & Chargers</Link></li>
                <li><Link className='dropdown_link'>Camera bags & cases</Link></li>
                <li><Link className='dropdown_link'>Tripods & Monopods</Link></li>
                </ul>


          </DropDown>
        </li>

            <li className='dropdown kitchen_appliances'>
          <div className='dropdown_box'>
            <span className='dropdown_title'>KITCHEN APPLIANCES</span>
            <BiChevronDown  />
          </div>
          <DropDown>
          <ul className='dropdown_list'> 
                <li className='drodown_box_title'>Mixer</li>
                <li><Link className='dropdown_link'>Water Purifiers</Link></li>
                <li><Link className='dropdown_link'>Electric Kettle</Link></li>
                <li><Link className='dropdown_link'>Convection</Link></li>
                <li><Link className='dropdown_link'>Solo & Grill</Link></li>
                <li><Link className='dropdown_link'>Food Processor</Link></li>
                </ul>
                <ul className='dropdown_list'> 
                <li className='drodown_box_title'>Cooktops</li>
                <li><Link className='dropdown_link'>Induction Cooktops</Link></li>
                <li><Link className='dropdown_link'>Hoods/Chimneys</Link></li>
                <li><Link className='dropdown_link'>Rice Cooker</Link></li>
                <li><Link className='dropdown_link'>Cookware</Link></li>
                <li><Link className='dropdown_link'>Built Ins</Link></li>
                </ul>
                <ul className='dropdown_list'> 
                <li className='drodown_box_title'>Juicer</li>
                <li><Link className='dropdown_link'>Hand Blender</Link></li>
                <li><Link className='dropdown_link'>Wet Grinder</Link></li>
                <li><Link className='dropdown_link'>Pop up Toasters</Link></li>
                <li><Link className='dropdown_link'>Coffee/Tea Makers</Link></li>
                <li><Link className='dropdown_link'>Sandwich Makers</Link></li>
                </ul>
          </DropDown>
        </li>
        <li className='dropdown personal_care'>
          <div className="dropdown_box">
            <span className='dropdown_title'>PERSONAL CARES</span>
            <BiChevronDown  />
          </div>  
        <DropDown>
        <ul className='dropdown_list'> 
                <li className='drodown_box_title'>Shavers & Trimmers</li>
                <li><Link className='dropdown_link'>Epilators</Link></li>
                <li><Link className='dropdown_link'>Hair Dryers & Stylers</Link></li>
                <li><Link className='dropdown_link'>Weighing Scales</Link></li>
                <li><Link className='dropdown_link'>Irons</Link></li>
                </ul>
                <ul className='dropdown_list'> 
                <li className='drodown_box_title'></li>
                <li><Link className='dropdown_link'>Digital Thermometers</Link></li>
                <li><Link className='dropdown_link'>Massagers</Link></li>
                <li><Link className='dropdown_link'>Misc. Care Devices</Link></li>
                <li><Link className='dropdown_link'>Garment Steamers</Link></li>
            </ul>
        </DropDown>

        </li>
        <li className='dropdown accessories'>
          <div className="dropdown_box">
            <span className='dropdown_title'>ACCESSORIES</span>
            <BiChevronDown  />
          </div>
          <DropDown>
          <ul className='dropdown_list'> 
                <li className='drodown_box_title'>Bags, Cases & Sleeves</li>
                <li><Link className='dropdown_link'>Smart Devices</Link></li>
                <li><Link className='dropdown_link'>Smart Plugs</Link></li>
                <li><Link className='dropdown_link'>Smart Cameras</Link></li>
                <li><Link className='dropdown_link'>Smart Sensors</Link></li>
                <li><Link className='dropdown_link'>Power Banks</Link></li>
                <li><Link className='dropdown_link'>Batteries</Link></li>
            </ul>
          </DropDown>
        </li>
      </ul>
    </div>
  );
}

export default Top3;

