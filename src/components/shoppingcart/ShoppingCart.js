import { useEffect, useState } from 'react';
import ShoppingCartItem from '../shoppingCartItem/ShoppingCartItem';
import './ShoppingCart.css'

function ShoppingCart(props) {

    const [totalPrice, setTotal] = useState(0);
    //    shoppingCart = [{product: {}, quantity: 0}];
    const [shoppingCart, setShoppingCart] = useState([]);
    /**
     * Om något id är lika med samma produkt så kommer quantity ökas istället för att
     * produkten läggs till som ett nytt objekt 
     * 
     * if id[i] == productNumber
     *    element[i].quantity++
     *    break;
     */

    useEffect(() => { 
        let purchased = props.item;
        let tempArray = [];
        let tempPrice = 0;  // needed to prevent the total price to add the same item again after removing something from the cart

            // checks if there are any items to add to the shoppingcart
            if(purchased.length > 0) {

                for(let i = 0; i < purchased.length; i++) {
                    // checks if its the first item or if it is the same item as the one that was added last
                    tempArray.push({product: purchased[i], quantity: 1});
                    tempPrice += purchased[i].price;
                    setTotal(tempPrice);
                    //setTotal(totalPrice + purchased[i].price);
                }
            }
            setShoppingCart(tempArray);

    }, [props.item]);

    /**
     * Filters through the array and removes the item with the matched id for the product that will be removed
     */
    let removeItem = (id) => {
        let tempArray = [];
        tempArray = props.item.filter((e, i, arr) => {
            if(e.productNumber === id) {
                setTotal(totalPrice - props.item[i].price);
                return false;
            }
            return true;
        })

        props.onRemove(tempArray);

    }
  
    return (
      <div className='shoppingCartContainer'>
        <h2>Shopping Cart</h2>
        <ul>
            {shoppingCart.map( (e, i) => {
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