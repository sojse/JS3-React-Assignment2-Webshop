import ShoppingCartContext from "../context/ShoppingCartContext";
import { useState } from "react";

function ShoppingCartProvider({children}) {
    const [product, setProducts] = useState([]);

    console.log('i provider')

    return ( 
        <ShoppingCartContext.Provider value={{ 
                product: product, 
                setProducts: setProducts,
            }}>
            {children}
        </ShoppingCartContext.Provider>
     );
}

export default ShoppingCartProvider;