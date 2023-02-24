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

            console.log(purchased)
            // checks if there are any items to add to the shoppingcart
            if(purchased.length > 0) {
                let lastAddedProductNumber = (purchased[purchased.length - 1].productNumber);   

                for(let i = 0; i < purchased.length; i++) {
                    // checks if its the first item or if it is the same item as the one that was added last
                    if(purchased.length < 1) {
                        tempArray.push({product: purchased[i], quantity: 1});  
                        
                    //checks if the product is not the first to be added and is not the same as the latest to not duplicate the same item
                    } else if(purchased[i].productNumber === lastAddedProductNumber && purchased.length > 1) {
                        /** problemet är att ta ut den delen av arrayen som ska uppdateras med quantity */
                        //tempArray[i].quantity += 1;
                        /*console.log(purchased[i]);
                        let duplicate = tempArray[i];
                        duplicate.quantity += 1;
                        tempArray.splice(i, 1);
                        tempArray.push(duplicate);*/
                    } else {
                        tempArray.push({product: purchased[i], quantity: 1})
                    }

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
        console.log(id);
        tempArray = [...shoppingCart];
        console.log(tempArray);

        tempArray.filter((e, i, arr) => {
            if(e.product.productNumber === id) {
                arr.splice(i, 1);
                return true;
            }
            return false;
        })
        console.log(tempArray);
        setShoppingCart(tempArray);

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