import { useState } from "react";
import { Link, useParams } from "react-router-dom";



const BlogDetails = () => {

    const { id } = useParams()
    const [blog, setBlog] = useState([])
    const {_id, name, image, detailed_description, category, title } = blog

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
                <img className="text-center mx-auto rounded-lg" src={image} alt="" />
                <div>
                    <div className="flex justify-between">
                        <h1>{title}</h1>
                        <span>{category}</span>
                    </div>
                    <p>{detailed_description}</p>
                    <p>Posted By: {name}</p>
                    <Link to={`/update-blog/${_id}`}><button className="btn btn-primary">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;