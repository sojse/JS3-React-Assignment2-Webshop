import { useState, useEffect, useContext } from "react";
import Products from "../../products";
import MoreInformation from "../moreInformation/MoreInformation";
import ProductCard from "../productCard/ProductCard";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import './SearchResult.css'
import { Route, Routes } from "react-router-dom";

function SearchResult(props) {

    const productArray = Object.values(Products);   //gets all the objects in the json file and puts them in an array 
    const [matchedProducts, setMatchedProducts] = useState([]);
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
                    //searchResult.push(productArray[i]);
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


  return (
    <div className="searchResultContainer">
        <h2>Search Result</h2>
        {/*!showMoreInformation ? <ProductCard searchResult={matchedProducts} onMoreInformationClick={moreInformation} onAddToCartClick={addToCart} />
            : <MoreInformation clickedItem={matchedProducts[itemId]} backToSearchResult={backToSearch} />*/}
        <Routes>
            <Route path='' element={ <ProductCard searchResult={matchedProducts} onAddToCartClick={addToCart}  />} />
            <Route path='/product/:id' element={<MoreInformation searchResult={matchedProducts} products={productArray} />} />
        </Routes>
    </div>
  );
}

export default SearchResult;