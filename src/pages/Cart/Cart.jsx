
import { useContext, useState } from 'react';
import './cart.css';
import { CartContext } from '../../App';
import TopBar from '../../components/TopBar/TopBar';
import { Button, Card } from 'react-bootstrap';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  // Calculate total cart price
  const totalCartPrice = cart.reduce((total, item) => {
    const itemId = item._id;
    const quantity = quantities[itemId] || 1;
    return total + Number.parseInt(item.price) * quantity;
  }, 0);

  return (
    <div>
      <TopBar />
      <Card body className='cart_header'>
        <b>My Cart </b>
      </Card>
      {cart.map((item) => {
        const itemId = item._id;
        const quantity = quantities[itemId] || 1;

        return (
          <Card body key={itemId} className='cart_products'>
            <div className='cart_box'>
              <div className='cart_photo'>
                <img src={item.displayImage} alt='' width={200} height={200} />
              </div>
              <div className='cart_detail'>
                <p>{item.name}</p>
                <p>
                  Deal Price :{' '}
                  <span style={{ color: '#003380' }}>₹ {Number.parseInt(item.price) * quantity}</span>
                </p>
                <div>
                  <Button onClick={() => handleQuantityChange(itemId, quantity + 1)}>+</Button>
                  <span>{quantity}</span>
                  <Button
                    disabled={quantity === 1}
                    onClick={() => handleQuantityChange(itemId, quantity - 1)}
                  >
                    -
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
      <Card body className='cart_footer'>
        <b>Total Cart Price:</b> ₹ {totalCartPrice}
      </Card>
    </div>
  );
};

export default Cart;