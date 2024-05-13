import Swal from 'sweetalert2'

const UpdateBlog = () => {

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

        const newBlog = { name, title, image, email, short_description, detailed_description, category }

        fetch('http://localhost:5000/blog', {
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
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900" style={{ backgroundImage: 'url(https://i.ibb.co/w7PyjsY/5357377-Internet-go.jpg)', backgroundPosition: 'center' }}>
                <form onSubmit={handleUpdateBlog} className="container flex flex-col mx-auto space-y-12  mb-20">
                    <div className="grid grid-cols-2 gap-10 mt-20">

                        <div>
                            <label htmlFor="image" className="text-xl font-bold mr-5">Image Url</label>
                            <input name="image" id="image" type="text" placeholder="Image Url" className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>



                        <div>
                            <label htmlFor="title" className="text-xl font-bold mr-5">Title</label>
                            <input 
                            name="title" 
                            id="title" 
                            type="text" 
                            placeholder="Title" 
                            className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="User Name" 
                            className="text-xl font-bold mr-5">User Name</label>
                            <input name="name" 
                            id="user_name" 
                            type="text" 
                            placeholder="User Name" 
                            className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="User Email" className="text-xl font-bold mr-5">User Email</label>
                            <input 
                            name="email" 
                            id="user_email" 
                            type="email" 
                            placeholder="User Email" 
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
                            className="input input-bordered mt-3 w-full  h-28 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" ></textarea>
                        </div>

                        <div>
                            <label htmlFor="Category" className="text-xl font-bold mr-5">Category</label>
                            <select name="category" className="select select-bordered w-full mt-3">
                                <option value={'Comedy'}>Comedy</option>
                                <option value={'Animals'}>Animals</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" className="btn text-white font-bold bg-[#D04848]" value="Submit" />
                </form>
            </section>
        </div>
    );
};

export default UpdateBlog;