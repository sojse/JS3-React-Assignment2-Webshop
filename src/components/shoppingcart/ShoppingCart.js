import { useContext, useState } from "react";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import ShoppingCartItem from "../shoppingCartItem/ShoppingCartItem";
import './ShoppingCart.css';

function ShoppingCart(props) {
    
    const shoppingCart = useContext(ShoppingCartContext);
    const [totalPrice, setTotal] = useState(0);

    /*useEffect(() => { 
        let purchased = props.item;
        let tempArray = [];
        let tempPrice = 0;  // needed to prevent the total price to add the same item again after removing something from the cart
    
            // checks if there are any items to add to the shoppingcart
            if(purchased.length > 0) {
                for(let i = 0; i < purchased.length; i++) {
                    tempArray.push({product: purchased[i], quantity: 1});
                    tempPrice += purchased[i].price;
    
                    //just nu försvinner det dubbla helt så det inte syns alls
                    for(let j = 0; j < purchased.length; j++) {
                        if(i !== j && purchased[i].productNumber === purchased[j].productNumber) {
                            console.log('duplicate')
                            tempArray[i].quantity++;
                        }
                    }
                }
            }
            setTotal(tempPrice);
            setShoppingCart(tempArray);        
    
    }, [props.item]);*/

    /**
     * Filters through the array and removes the item with the matched id for the product that will be removed
     */
    let removeItem = (id) => {
        let updatedShoppingCart = [];
        updatedShoppingCart = shoppingCart.product.filter((e, i, arr) => {
            if(e.productNumber === id) {
                setTotal(totalPrice - shoppingCart.product.price);
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