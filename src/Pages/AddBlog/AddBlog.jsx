import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthProvider';

const AddBlog = () => {

    const bgStyle = { backgroundImage: 'url(https://i.ibb.co/w7PyjsY/5357377-Internet-go.jpg)', backgroundPosition: 'center',}
    const { user } = useContext(AuthContext)
    const userEmail = user?.email
   
    // console.log(user.email);

    const handleAddBlog = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const title = form.title.value
        const image = form.image.value
        const email = form.email.value
        const short_description = form.short_description.value
        const detailed_description = form.detailed_description.value
        const category = form.category.value

        console.log(name, image, email, short_description, detailed_description, category, title, userEmail);

        const newBlog = { name, image, email, short_description, detailed_description, category, title, userEmail}

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    console.log();
                    Swal.fire({
                        title: 'Success',
                        text: 'You have successfully added an item',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                    form.reset()
                }
            })

    }

    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-900 bg-no-repeat" style={bgStyle}>
                <div className=' bg-black bg-opacity-30'>
                <form onSubmit={handleAddBlog} className=" container flex flex-col mx-auto space-y-12 p-4 lg:p-32 md:p-16">
                    <div className="grid md:grid-cols-2 gap-10">
                        

                        <div>
                            <label htmlFor="image" className="text-xl font-bold mr-5">Image Url</label>
                            <input
                            required 
                            name="image" 
                            id="image" 
                            type="text" 
                            placeholder="Image Url" 
                            className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>



                        <div>
                            <label htmlFor="title" className="text-xl font-bold mr-5">Title</label>
                            <input 
                            required
                            name="title" 
                            id="title" 
                            type="text" 
                            placeholder="Title" 
                            className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="User Name" className="text-xl font-bold mr-5">User Name</label>
                            <input
                            required 
                            name="name" 
                            id="user_name" 
                            type="text" 
                            placeholder="User Name" 
                            className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        
                        <div>
                            <label htmlFor="User Email" className="text-xl font-bold mr-5">User Email</label>
                            <input 
                            required
                            name="email"
                            id="email" type="email"
                            defaultValue={user? user.email: "User Email"}
                            className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                       



                        <div>
                            <label htmlFor="short description" className="text-xl font-bold mr-5">Short Description</label>
                            <textarea 
                            required
                            name="short_description" 
                            cols="50" 
                            rows="10" 
                            type="text" 
                            placeholder="Short Description" 
                            className="input input-bordered mt-3 h-28 w-full  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" ></textarea>

                        </div>

                        <div>
                            <label htmlFor="Detailed description" className="text-xl font-bold mr-5">Detailed Description</label>
                            <textarea 
                            required
                            name="detailed_description" 
                            cols="50" 
                            rows="10" 
                            type="text" 
                            placeholder="Detailed Description" 
                            className="input input-bordered mt-3 w-full  h-28 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" ></textarea>
                        </div>

                        <div>
                            <label htmlFor="Category" className="text-xl font-bold mr-5">Category</label>
                            <select name="category" defaultValue={'DEFAULT'} required className="select select-bordered w-full mt-3">

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
                    <input type="submit" className="btn text-white w-2/4 mx-auto font-bold bg-[#D04848]" value="Submit" />
                </form>
                </div>
            </section>
        </div>
    );
};

export default AddBlog;