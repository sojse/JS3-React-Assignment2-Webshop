import { useContext, useEffect, useState } from "react";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import ShoppingCartItem from "../shoppingCartItem/ShoppingCartItem";
import './ShoppingCart.css';

function ShoppingCart(props) {

    const shoppingCart = useContext(ShoppingCartContext);
    const [totalPrice, setTotal] = useState(0);

    useEffect(() => {

        let newPrice = 0;

        if(shoppingCart.product.length > 0) {
            for(let i = 0; i < shoppingCart.product.length; i++) {

                newPrice += shoppingCart.product[i].product.price * shoppingCart.product[i].quantity
            }
        }

        setTotal(newPrice);

    }, [shoppingCart]);
    
  
    return (
      <div className='shoppingCartContainer'>
        <h2>Shopping Cart</h2>
        <ul>
            {shoppingCart.product.map( (e, i) => {
                return <ShoppingCartItem key={i} item={e} index={i} removeItem={id => shoppingCart.removeFromCart(id)} />
            })}
        </ul>
        <div>
            <span>Total:</span>
            <span>{totalPrice} SEK</span>   
        </div>
      </div>
    );
}

export default ShoppingCart;