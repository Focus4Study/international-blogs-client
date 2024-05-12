import { useLoaderData } from "react-router-dom";
import BlogCard from "../../Shared/BlogCard";


const AllBlogs = () => {

    const blogs = useLoaderData()
    console.log(blogs);

    return (
        <div>
            <div>
                <h2 className="text-3xl font-extrabold text-center lg:mb-10">The number of items in display is {blogs.length}</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-y-7 lg:gap-x-14 mx-auto">
                    {
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;