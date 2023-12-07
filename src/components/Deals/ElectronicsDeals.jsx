import React from 'react'
import SingleDeal from './SingleDeal'
import redmeimg from './../../assets/images/RedmiPlus.avif'
import laptopimg from './../../assets/images/laptop.avif'
import Refridgerator from './../../assets/images/Refridgerator.avif'
import tablets from './../../assets/images/Tablets.avif'
import TrueWireless from './../../assets/images/TrueWireless.avif'
import airconditioner from './../../assets/images/airconditioner.avif'
import applewatch from './../../assets/images/applewatch.avif'
import iron from './../../assets/images/iron.avif'
import oneplusnord from './../../assets/images/oneplusnord.avif'
import printer from './../../assets/images/printer.avif'
import television from './../../assets/images/television.avif'
import speaker from './../../assets/images/speaker.avif'


const ElectronicsDeals = () => {
    const imgArr = [redmeimg, laptopimg, Refridgerator, tablets, 
        TrueWireless, airconditioner, applewatch,iron,
        oneplusnord,printer,television,speaker]
    return (
        <>
            <div className='electronics_container'>
                <div className='great_deals'>
                    <p>Great Deals on Electronics</p>
                </div>
                <div className='electronics_imgcontainer'>
                    {
                        imgArr.map((img)=>{
                            return (
                                <SingleDeal img={img}/>
                            )
                        })
                    }

                </div>


            </div>
        </>
    )
}

export default ElectronicsDeals