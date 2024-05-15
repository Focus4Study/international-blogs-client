import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const WishlistCard = ({oneWish}) => {

    const {_id,title, image, short_description, category} = oneWish
    return (
        <div>
            <div className="card bg-base-300 shadow-xl image-full md:w-96 lg:w-[400px] mb-10 md:h-[600px] mx-auto">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex flex-col">
                        <img className="rounded-lg h-52" src={image} alt="" />
                        <div className="p-2">
                            <div className="flex justify-between items-center">
                                <h2>{title}</h2>
                                <h5>{category}</h5>
                            </div>
                            <p>{short_description}</p>
                            <div className="card-actions mt-10">
                                <Link to={`/blog-details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                                <button className="btn btn-primary">Wishlist</button>
                                <button className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishlistCard.propTypes = {
    oneWish: PropTypes.object,
 
};

export default WishlistCard;