import ShoppingCartContext from "../context/ShoppingCartContext";
import { useState } from "react";

function ShoppingCartProvider({children}) {
    const [product, setProducts] = useState([]);

    /**
     * adds a new item to the shopping cart, if there is already a item with the same product number the quantity will increase
     */
    const addToCart = (newItem) => {
        let updatedShoppingCart = [];
        let newQuantity = 1;    //setting the default quantity for when a product is added

        updatedShoppingCart = product.filter((e, i, arr) => {
            // checks if the last added product is already in the shoppingcart, if it is the quantity will increase
            if(e.product.productNumber === newItem.productNumber) {
                newQuantity = e.quantity; // if the product is already in the shopping cart the previous quantity value will be added
                newQuantity++;
                return false;
            }
            return true;
        })

        updatedShoppingCart.push({product: newItem, quantity: newQuantity})
        setProducts(updatedShoppingCart);
    }

    // filters through the array and removes the clicked product
    const removeFromCart = (id) => {
        let updatedShoppingCart = [];

        updatedShoppingCart = product.filter((e, i, arr) => {
            if(e.product.productNumber === id) {
                return false;
            }
            return true;
        })

        setProducts(updatedShoppingCart);
    }


    return ( 
        <ShoppingCartContext.Provider value={{ 
                product: product, 
                addToCart: addToCart,
                removeFromCart: removeFromCart,
            }}>
            {children}
        </ShoppingCartContext.Provider>
     );
}

export default ShoppingCartProvider;