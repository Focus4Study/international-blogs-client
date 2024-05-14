import { useState } from "react";
import { Link, useParams } from "react-router-dom";



const BlogDetails = () => {

    const { id } = useParams()
    const [blog, setBlog] = useState([])
    const { _id, name, image, detailed_description, category, title } = blog

    fetch(`http://localhost:5000/blogs/${id}`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            setBlog(data);
        })

    return (

        <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <div className="bg-black bg-opacity-60 lg:pt-28">
                <img className="text-center mx-auto rounded-lg w-3/4" src={image} alt="" />
                <div className="mx-auto container w-3/4 space-y-5 lg:mt-10">
                    <div className="flex justify-between">
                        <h1 className="lg:text-4xl text-2xl font-bold text-white lg:mb-10">{title}</h1>
                        <p className="text-white border-2 h-8 px-3">{category}</p>
                    </div>
                    <p className="text-white">{detailed_description}</p>
                    <p className="lg:text-xl font-semibold text-white">Posted By: {name}</p>
                    <Link to={`/update-blog/${_id}`}><button className="btn btn-primary lg:mb-10 lg:mt-10">Update</button></Link>
                </div>
                <div className="mx-auto container w-3/4">
                    <h2 className="lg:text-xl font-semibold text-white mb-5">Comments:</h2>
                    <hr />
                    <div>
                        <h3 className="text-white mt-4">Comment made by:</h3>
                        <p className="text-white mt-2 mb-4">This is a hardcoded comment</p>
                    </div>
                    <hr />
                    <form action="">
                        <textarea className="w-full rounded-lg p-5 mt-5" name="comments" placeholder="Make a comment on this blog" rows={5}></textarea>
                        <input className="btn btn-primary mb-5" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;