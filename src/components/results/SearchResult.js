import { useState, useEffect, useContext } from "react";
import Products from "../../products";
import MoreInformation from "../moreInformation/MoreInformation";
import ProductCard from "../productCard/ProductCard";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import "./SearchResult.css"

function SearchResult(props) {

    const productArray = Object.values(Products);   //gets all the objects in the json file and puts them in an array 
    const [matchedProducts, setMatchedProducts] = useState([]);     // used to store the products that match the search
    const [moreInformationVisible, setVisibility] = useState(false);
    const [itemId, setItemId] = useState(0);
    const shoppingCart = useContext(ShoppingCartContext);


    useEffect(() => {

        // compares the search word with the productArray and picks out the matches
        if(props.search !== '') {
            let temp = [];
            for( let i = 0; i < productArray.length; i++ ) {
                let productName = productArray[i].name;
                let productDescription = productArray[i].description;
                let search = props.search;

                if(productName.includes(search) || productDescription.includes(search)) {
                    temp.push(productArray[i]);
                }
            }
            setMatchedProducts(temp);
        }
    }, [props.search])


    /**
     * When the user adds an item to the cart the product will be added to the shopping cart context
     */
    let addToCart = (e) => {
        shoppingCart.addToCart(matchedProducts[e.target.id]);
    }

    let onMoreInformationClick = (e) => {
        setVisibility(true);
        setItemId(e.target.id);
    }

    let backToSearch = () => {
        setVisibility(false);
    }


  return (
    <div className="searchResultContainer">
        <h2>Products</h2>
        <ProductCard searchResult={matchedProducts} onAddToCartClick={addToCart} onMoreInformationClick={onMoreInformationClick} />
        {moreInformationVisible && <MoreInformation searchResult={matchedProducts[itemId]} onBackToSearchClick={backToSearch} />}
    </div>
  );
}

export default SearchResult;