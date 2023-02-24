import { useEffect, useState } from 'react';
import ShoppingCartItem from '../shoppingCartItem/ShoppingCartItem';
import './ShoppingCart.css'

function ShoppingCart(props) {

    let totalPrice = 0;
    // let shoppingCart = [{product: {}, quantity: 0}];
    const [shoppingCart, setShoppingCart] = useState([]);
    let tempArray = [];
    /**
     * Om något id är lika med samma produkt så kommer quantity ökas istället för att
     * produkten läggs till som ett nytt objekt 
     * 
     * if id[i] == productNumber
     *    element[i].quantity++
     *    break;
     */


    useEffect(() => { 
        //setShoppingCart(tempArray);
        let purchased = props.item;
        console.log(purchased);

            console.log(purchased)
            // checks if there are any items to add to the shoppingcart
            if(purchased.length > 0) {

                for(let i = 0; i < purchased.length; i++) {
                    // checks if its the first item or if it is the same item as the one that was added last
                    tempArray.push({product: purchased[i], quantity: 1});  
                }
            }
            setShoppingCart(tempArray);

    }, [props.item]);

    /**
     * tar bort delen från arrayen men den läggs till igen
     */
    let removeItem = (id) => {
        /**
         * försvinner tillfälligt men kommer tillbaks igen när jag trycker på någon annan knapp
         */
        tempArray = [...props.item];

        tempArray.filter((e, i, arr) => {
            if(e.productNumber === id) {
                arr.splice(i, 1);
                return true;
            }
            return false;
        })
        //setShoppingCart(tempArray);
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