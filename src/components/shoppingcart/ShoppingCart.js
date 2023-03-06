import { useContext, useEffect, useState } from "react";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import ShoppingCartItem from "../shoppingCartItem/ShoppingCartItem";
import './ShoppingCart.css';

function ShoppingCart(props) {

    /**
     * Problem
     * 
     * Fastnar i oändliga loopar när jag försöker komma åt min context provider för att uppdatera min shopping cart
     * 
     * I Search resulten har jag en warning för mina dependencies, om jag lägger till den i dependency så blir det grönt i
     * terminalen men jag fastnar i en oändlig loop
     */
    
    const shoppingCart = useContext(ShoppingCartContext);
    const [totalPrice, setTotal] = useState(0);

    useEffect(() => {
        
        let updatedShoppingCart = [...shoppingCart.product];
        let newPrice = 0;
        let latestProduct = updatedShoppingCart[updatedShoppingCart.length - 1]

        if(updatedShoppingCart.length > 0) {
            updatedShoppingCart = updatedShoppingCart.filter((e, i, arr) => {
                newPrice += e.product.price;

                if(i !== updatedShoppingCart.length - 1 && e.product.productNumber === latestProduct.product.productNumber ) {
                    //shoppingCart.setProducts(updatedShoppingCart);
                    return false;
                }
                return true;
            });
        }
        setTotal(newPrice);

    }, [shoppingCart]);

    /**
     * Filters through the array and removes the item with the matched id for the product that will be removed
     */
    let removeItem = (id) => {
        let updatedShoppingCart = [];

        updatedShoppingCart = shoppingCart.product.filter((e, i, arr) => {
            if(e.product.productNumber === id) {
                setTotal(totalPrice - e.product.price);
                return false;
            }
            return true;
        })

        shoppingCart.setProducts(updatedShoppingCart);

    }
  
    return (
      <div className='shoppingCartContainer'>
        <h2>Shopping Cart</h2>
        <ul>
            {shoppingCart.product.map( (e, i) => {
                return <ShoppingCartItem key={i} item={e} index={i} removeItem={removeItem} />
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