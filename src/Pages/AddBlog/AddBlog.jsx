

const AddBlog = () => {
    return (
        <div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900" style={{ backgroundImage: 'url(https://i.ibb.co/w7PyjsY/5357377-Internet-go.jpg)', backgroundPosition: 'center' }}>
                <form className="container flex flex-col mx-auto space-y-12  mb-20">
                    <div className="grid grid-cols-2 gap-10 mt-20">

                        <div>
                            <label htmlFor="image" className="text-xl font-bold  mr-5">Image Url</label>
                            <input name="image" id="image" type="text" placeholder="Image Url" className="input input-bordered w-full  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>



                        <div>
                            <label htmlFor="title" className="text-xl font-bold mr-5">Title</label>
                            <input name="title" id="title" type="text" placeholder="Title" className="input input-bordered w-full  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="User Name" className="text-xl font-bold mr-5">User Name</label>
                            <input name="name" id="user_name" type="text" placeholder="User Name" className="input input-bordered w-full  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="User Email" className="text-xl font-bold mr-5">User Email</label>
                            <input name="email" id="user_email" type="email" placeholder="User Email" className="input input-bordered w-full  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>



                        <div>
                            <label htmlFor="short description" className="text-xl font-bold mr-5">Short Description</label>
                            <textarea name="short_description" id="" cols="50" rows="10" type="text" placeholder="Short Description" className="input input-bordered h-28 w-full  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" ></textarea>

                        </div>

                        <div>
                            <label htmlFor="Long description" className="text-xl font-bold mr-5">Long Description</label>
                            <textarea name="long_description" id="" cols="50" rows="10" type="text" placeholder="Short Description" className="input input-bordered w-full  h-28 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" ></textarea>
                        </div>

                        <div>
                            <label htmlFor="Category_Name" className="text-xl font-bold mr-5">Category Name</label>
                            <input name="category_Name" id="category_Name" type="text" placeholder="Category Name" className="input input-bordered w-full  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                    </div>
                    <input type="submit" className="btn text-white font-bold bg-[#D04848]" value="Submit" />
                </form>
            </section>
        </div>
    );
};

export default AddBlog;