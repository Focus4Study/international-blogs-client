import { useEffect, useState } from "react";
import FeaturedRow from "./FeaturedRow";




const FeaturedBlogs = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs/featured', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Blog Title</th>
                            <th>Owner</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog, index)=><FeaturedRow key={blog._id} blog={blog} serial={index+1}></FeaturedRow>)}                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default FeaturedBlogs;