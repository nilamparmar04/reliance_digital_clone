import React, { useEffect, useState } from 'react';
import {BsChevronLeft,BsChevronRight} from "react-icons/bs"
import { Link } from 'react-router-dom';
import './product.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/electronics/products", {
                    headers: {
                        "projectID": "f104bi07c490"
                    }
                });
                const productsData = await res.json();
                setProducts(productsData.data);
                console.log(productsData.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
    }, []);

    const showNext = () => {
        setStartIndex(prevIndex => prevIndex + 4);
    }

    const showPrevious = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 4, 0));
    }

    return (
        <div className='products_container'>
            <button className='prev_btn' onClick={showPrevious} disabled={startIndex === 0}><BsChevronLeft/></button>
            <div className='product_row'>
                {products
                .slice(startIndex, startIndex + 4)
                .map((e, index) => {
                    const formattedPrice = new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR'
                    }).format(e.price);
                    return (
                                <Link style={{textDecoration:"none"}} to={`productdetails/${e._id}`} key={index} className={`product_item product_${index}`}>
                                        <img src={e.displayImage} alt={"error"} width="250px" height="250px" />
                                    <div className="product_details">
                                        <p className="product_name">{e.name}</p>
                                        <p className="product_price">Deal Price : {formattedPrice}</p>
                                    </div>
                                </Link>
                    );
                })}
            </div>
            <button className='next_btn' onClick={showNext} disabled={startIndex >= products.length - 4}><BsChevronRight/></button>
        </div>
    );

}

export default Products;
