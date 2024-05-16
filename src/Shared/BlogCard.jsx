import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';


const BlogCard = ({ blog, handleDelete, handleWishlist }) => {

    const { user } = useContext(AuthContext)
    const { _id, title, image, short_description, category } = blog

    return (
        <div>
            <div className="card bg-base-300 shadow-xl image-full md:w-96 lg:w-[400px] mb-10 md:h-[600px] mx-auto relative">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex flex-col">
                        <img className="rounded-lg h-52" src={image} alt="" />
                        <div className="p-2">
                            <div className='h-full'>
                                <div className="flex justify-between items-center">
                                    <h2 className='text-2xl font-bold text-white'>{title}</h2>
                                    <h5 className='text-amber-300'>{category}</h5>
                                </div>
                                <p>{short_description}</p>
                            </div>
                            <div className="card-actions absolute bottom-10 gap-10">
                                <Link to={`/blog-details/${_id}`}><button className="btn bg-white text-black">Details</button></Link>
                                <button onClick={() => { handleWishlist(_id) }} className="btn  bg-white text-black">Wishlist</button>
                                {

                                    user?.email === blog.email ?
                                        <button onClick={() => handleDelete(_id)} className="btn bg-white text-black">Delete</button>
                                        :
                                        <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object,
    handleDelete: PropTypes.func,
    handleWishlist: PropTypes.func,
};

export default BlogCard;