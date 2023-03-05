import ShoppingCartContext from "../context/ShoppingCartContext";
import { useState } from "react";

function ShoppingCartProvider({children}) {
    const [product, setProducts] = useState([]);

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