import ShoppingCartContext from "../context/ShoppingCartContext";
import { useState } from "react";

function ShoppingCartProvider({children}) {
    const [product, setProducts] = useState([]);
    //{product: {mitt objekt}, quanity: 1}

    let addToCart = (newItem) => {
        let updatedShoppingCart = [];
        //console.log(product.quantity)
        let newQuantity = 1;
        let latestProduct = newItem;

        updatedShoppingCart = product.filter((e, i, arr) => {
            if(!isNaN(e.quantity)) { 
                if(i !== arr.length && e.product.productNumber === latestProduct.productNumber) {
                    newQuantity = e.quantity++;
                    newQuantity++;
                    return false;
                }
            return true;
        }
        })
        //console.log(newQuantity);
        updatedShoppingCart.push({product: newItem, quantity: newQuantity})
        setProducts(updatedShoppingCart);
    }


    return ( 
        <ShoppingCartContext.Provider value={{ 
                product: product, 
                setProducts: setProducts,
                addToCart: addToCart
            }}>
            {children}
        </ShoppingCartContext.Provider>
     );
}

export default ShoppingCartProvider;