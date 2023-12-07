import { useContext, useEffect, useState } from 'react'
import "./productdetails.css";
import { useLocation, useParams } from 'react-router-dom';
import Top2 from '../../components/TopBar/Top2';
import Top3 from '../../components/TopBar/Top3';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CartContext } from '../../App';

const ProductDetails = () => {
  // const navigate = useNavigate();
  const {cart,setCart} = useContext(CartContext);
  const params = useParams();
  const location = useLocation()
  const [product,setProduct] = useState({});
  const [productImages,setProductImages] = useState([]);
  const [features,setFeatures] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  useEffect(()=>{
    async function fetchProduct(){
      const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${params.id}`,{
        headers:{
          "projectID":"f104bi07c490"
        }
      });
      const results = await res.json();
      console.log(results);
      setProduct(results.data); 
      setProductImages(results.data.images);
      setFeatures(results.data.features);
    }
    fetchProduct();
  },[]);

  const addToCart = async (id) => {

    const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`,{
        headers:{
          "projectID":"f104bi07c490"
        }
    });
    const results = await res.json();
    setCart([...cart,results.data])
    // navigate("/mycart");
  }
  console.log(location.pathname.split("/")[2])
  const showNext = () => {
    setStartIndex(prevIndex => prevIndex + 3);
  }

  const showPrevious = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 3, 0));
  }
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
}).format(product.price);
  return (
    <div>
      <Top2/>
      <Top3/>
      <div className='product_detail'>
        <div className='product_detail_img'>
          <img src={product.displayImage} alt="" width={350} />
          <div className='product_detail_multiple_img'>
          <button onClick={showPrevious} disabled={startIndex === 0}><BsChevronLeft/></button>
            {
              productImages.splice(startIndex,startIndex+1).map((e,index)=> {
                
                return (
                  <div key={index}>
                    <img src={e} alt="img" width={90} />
                  </div>
                )
              })
            }
            <button onClick={showNext} disabled={startIndex >= productImages.length - 3}><BsChevronRight/></button>
          </div>
        </div>
        <div className='product_detail_info'>
            <div className='product_detail_header'>
              <p className='product_detail_header_name'>{product.name}</p>
            </div>
            <div className='product_detail_body'>
              <div className="product_detail_left">
                  <p>Key Features</p>
                  <ul>
                    {
                      features.map((e)=> {
                        return (
                          <>
                          <li>{e}</li>
                          </>
                          )
                        }
                      )
                    }
                  </ul>
              </div>
              <div className="product_detail_right">
                <p>Deal Price : <span style={{color:'#003380'}}>{formattedPrice}</span></p>
                  <button className='product_detail_add_to_cart' onClick={()=>addToCart(location.pathname.split("/")[2])}>ADD TO CART</button>
                  <button className='product_detail_buy_now'>BUY NOW</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails