import { useEffect, useState } from 'react'
import "./productlist.css"
import { useNavigate, useParams } from 'react-router-dom'
import Top3 from "./../../components/TopBar/Top3"
import { Badge, Card } from 'react-bootstrap'
const Productlist = () => {
  const params = useParams();
  const [product,setProduct]=useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    async function fetchData(){
      const res=await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name":"${params.name}"}`,{
        headers:{ 
            "projectID": "f104bi07c490"
        }
      });
      const result=await res.json();
      setProduct(result.data);

      console.log(result.data)

    }
    fetchData();
  },[])

 

  return (
    <>
    <Top3/>
    <div className='products_container'>
        {
          product.map((e)=>{
            return (
              <Card key={e._id} body className='product_box' onClick={()=>navigate(`/productdetails/${e._id}`)}>
                <div className='product_img'>
                <img src={e.displayImage} alt="error" height={150} width={150} />
                </div>
                <p className='product_name'>{e.name}</p>
                <p>Price : ₹{e.price}</p>
                <div className='product_badge'>
                <Badge pill bg="primary">
                  OFFERS AVAILABLE
                </Badge>
                </div>
              </Card>
            )
          })
        }
    </div>
    </>
  )
}

export default Productlist