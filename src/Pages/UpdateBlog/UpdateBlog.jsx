import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthProvider';

const UpdateBlog = () => {

    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const userEmail = user?.email
    const userImg = user?.photoURL
    const time = new Date()
   
    console.log(id);
    const [blog, setBlog] = useState([])
    useEffect(()=>{
        fetch(`https://y-eta-nine.vercel.app/blogs/${id}`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            setBlog(data);
        })
        .catch(
            error => console.error(error)
        )
    },[setBlog,id])

        const { name, title, image, email, short_description, detailed_description, category } = blog


    const handleUpdateBlog = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const title = form.title.value
        const image = form.image.value
        const email = form.email.value
        const short_description = form.short_description.value
        const detailed_description = form.detailed_description.value
        const category = form.category.value

        console.log(name, title,  image, email, short_description, detailed_description, category);

        const newBlog = { name, title, image, email, short_description, detailed_description, category, userEmail, userImg, time }

        



        fetch(`https://y-eta-nine.vercel.app/blogs/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    console.log();
                    Swal.fire({
                        title: 'Success',
                        text: 'You have successfully updated an item',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                        })
                    form.reset()
                }
            })
            .catch(
                error => console.error(error)
            )

    }

    return (
        <div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900" style={{ backgroundImage: 'url(https://i.ibb.co/w7PyjsY/5357377-Internet-go.jpg)', backgroundPosition: 'center' }}>
                <form onSubmit={handleUpdateBlog} className="container flex flex-col mx-auto space-y-12  mb-20">
                    <div className="grid grid-cols-2 gap-10 mt-20">

                        <div>
                            <label htmlFor="image" className="text-xl font-bold mr-5">Image Url</label>
                            <input name="image" 
                            id="image" type="text" 
                            placeholder="Image Url" 
                            defaultValue={image}
                            className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>



                        <div>
                            <label htmlFor="title" className="text-xl font-bold mr-5">Title</label>
                            <input 
                            name="title" 
                            id="title" 
                            type="text" 
                            placeholder="Title" 
                            defaultValue={title}
                            className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="User Name" 
                            className="text-xl font-bold mr-5">User Name</label>
                            <input name="name" 
                            id="user_name" 
                            type="text" 
                            placeholder="User Name" 
                            defaultValue={name}
                            className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="User Email" className="text-xl font-bold mr-5">User Email</label>
                            <input 
                            name="email" 
                            id="user_email" 
                            type="email" 
                            placeholder="User Email" 
                            defaultValue={email}
                            className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>



                        <div>
                            <label htmlFor="short description" className="text-xl font-bold mr-5">Short Description</label>
                            <textarea 
                            name="short_description" 
                            id="" 
                            cols="50" 
                            rows="10" 
                            type="text" 
                            placeholder="Short Description" 
                            defaultValue={short_description}
                            className="input input-bordered mt-3 h-28 w-full  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" ></textarea>

                        </div>

                        <div>
                            <label htmlFor="Detailed description" className="text-xl font-bold mr-5">Detailed Description</label>
                            <textarea 
                            name="detailed_description" 
                            id="" 
                            cols="50" 
                            rows="10" 
                            type="text" 
                            placeholder="Detailed Description" 
                            defaultValue={detailed_description}
                            className="input input-bordered mt-3 w-full  h-28 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" ></textarea>
                        </div>

                        <div>
                            <label htmlFor="Category" className="text-xl font-bold mr-5">Category</label>
                            <select name="category" defaultValue={category? category: 'DEFAULT'} required className="select select-bordered w-full mt-3">

                                <option value={'DEFAULT'} disabled>Category</option>
                                <option value={'Animals'}>Animals</option>
                                <option value={'Anime'}>Anime</option>
                                <option value={'Comedy'}>Comedy</option>
                                <option value={'Cartoon'}>Cartoon</option>
                                <option value={'Education'}>Education</option>
                                <option value={'Entertainment'}>Entertainment</option>
                                <option value={'Fitness'}>Fitness</option>
                                <option value={'Fashion'}>Fashion</option>
                                <option value={'Food'}>Food</option>
                                <option value={'Lifestyle'}>Lifestyle</option>
                                <option value={'Music'}>Music</option>
                                <option value={'Music'}>Movies</option>
                                <option value={'Sports'}>Sports</option>
                                <option value={'Travel'}>Travel</option>
                                <option value={'Tech'}>Tech</option>
                                <option value={'Video Game'}>Video Game</option>

                            </select>
                        </div>
                    </div>
                    <input type="submit" className="btn  bg-gray-900 text-white font-bold" value="Submit" />
                </form>
            </section>
        </div>
    );
};

export default UpdateBlog;