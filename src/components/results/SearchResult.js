import Products from "../../products";
import './SearchResult.css'

function SearchResult(props) {

    const productArray = Object.values(Products);
    let searchResult = [];

    if(props.search !== '') {
        for( let i = 0; i < productArray.length; i++ ) {
            let productName = productArray[i].name;
            let productDescription = productArray[i].description;
            let search = props.search;

            if(productName.includes(search) || productDescription.includes(search)) {
                searchResult.push(productArray[i]);
            }
        }
    }

    let displaySearchResult = (e, i) => {

        return (
            <li key={i}>
                    <img src={searchResult[i].img} />
                <div className='productContainer'>
                    <div className="productContainerLeft">
                        <span className="productName">{searchResult[i].name}</span>
                        <span className="detailViewButton">More information</span>
                    </div>
                    <div className="productContainerRight">
                        <span>{searchResult[i].price} SEK</span>
                        <button id={i} onClick={addToCart}>Add to cart</button>
                    </div>
                </div>

            </li>)
        ;
    }

    let addToCart = (e) => {
        props.addToCart(e.target.id);
    }



  return (
    <div className="searchResultContainer">
        <h2>Search Result</h2>
        <ul className="searchResult">
            { props.search && searchResult.map(displaySearchResult)}
        </ul>
    </div>
  );
}

export default SearchResult;