import BlogCard from "../../Shared/BlogCard";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";


const AllBlogs = () => {

    const { user } = useContext(AuthContext)
    const wishEmail = user?.email
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    const [wish, setWish] = useState(null)
    const handleWishlist = (id) => {
         
        (fetch(`http://localhost:5000/blogs/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                const updatedWish = {...data, wishReq: wishEmail}
                setWish(updatedWish)
            })
    )}
   useEffect(()=>{
        if (wish !== null) {
            fetch(`http://localhost:5000/wishlist`,{
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(wish)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                console.log();
                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully added an this blog to your wishlist',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
            }
        })
        }
   },[wish])

    const handleDelete = id => {

        const confirm = Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you would like to delete this item?',
            icon: 'error',
            confirmButtonText: 'Yes, I am'
        })

        if (confirm) {
            fetch(`http://localhost:5000/blogs/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted',
                            text: 'You have deleted a blog',
                            icon: 'info',
                            confirmButtonText: 'Ok'
                        })
                    }
                    const remaining = blogs.filter(blog => blog._id !== id)
                    setBlogs(remaining)
                })
        }
    }

    return (
        <div>
            <div>
                <h2 className="text-3xl font-extrabold text-center lg:mb-10">The number of items in display is {blogs.length}</h2>

                <div className="mx-auto ">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-y-7 lg:gap-x-14">
                        {
                            blogs.map(blog => <BlogCard key={blog._id} blog={blog} handleDelete={handleDelete} handleWishlist={handleWishlist}></BlogCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;