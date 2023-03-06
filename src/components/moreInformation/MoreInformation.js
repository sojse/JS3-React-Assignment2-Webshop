import './MoreInformation.css'
import { Link, useParams } from 'react-router-dom';

function MoreInformation(props) {

  // getting the id that resembles the index of the clicked product
  const params = useParams();

  let item = props.searchResult[params.id];

  return (
    <div className="itemContainer">
        <img src={item.img} alt={item.name} />
        <div className="itemInformationContainer">
            <h3 className="itemName">{item.name}</h3>
            <p className="itemDescription">{item.description}</p>
            <span className="itemPrice">{item.price} SEK</span>
            <Link className='btn' to='/' >Back to Search Result</Link>
        </div>
    </div>
  );
}

export default MoreInformation;