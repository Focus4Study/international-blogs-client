

const BlogCard = ({blog}) => {
    const {name, image, email, short_description, category} = blog
    return (
        <div>
            <div className="card bg-base-300 shadow-xl image-full md:w-96 lg:w-[400px] h-[600px]">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex flex-col">
                        <img className="rounded-lg h-52" src={image} alt="" />
                        <div className="p-2">
                            <div className="flex justify-between items-center">
                                <h2>title</h2>
                                <h5>{category}</h5>
                            </div>
                            <p>{short_description}</p>
                            <div className="card-actions mt-10">
                                <button className="btn btn-primary">Details</button>
                                <button className="btn btn-primary">Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;