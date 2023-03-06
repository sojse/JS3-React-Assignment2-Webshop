import './ProductCard.css';
import { Link } from 'react-router-dom';

/**
 * This component renders all the product cards in the search result
 */

function ProductCard(props) {

    let displaySearchResult = (e, i) => {

        return (
            <li key={i}>
                    <img src={e.img} alt={e.name}/>
                <div className='productContainer'>
                    <div className="productContainerLeft">
                        <span className="productName">{e.name}</span>
                        <Link className="detailViewButton" id={i} to={'/product/' + i}>More information</Link>
                    </div>
                    <div className="productContainerRight">
                        <span>{e.price} SEK</span>
                        <button className="btn" id={i} onClick={addToCart}>Add to cart</button>
                    </div>
                </div>

            </li>
        );
    }

    let addToCart = (e) => {
        props.onAddToCartClick(e);
    }

  return (
    <>
        <ul className="searchResult">
            { props.searchResult.map(displaySearchResult)}
        </ul>
    </>


  );
}

export default ProductCard;