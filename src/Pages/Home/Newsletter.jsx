import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {


    const makeToast = e => {
        e.preventDefault();
        const email = e.target.email.value;
        if (!email) {
            toast('Please provide an email')
        }
        else{
            toast("Thank you for subscribing to our newsletter")
        }
        
    };


    return (
        <div>
            <div className="hero md:min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/6yxRHKg/901.jpg)' }}>
                <div className="hero-overlay bg-opacity-60  rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                        <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">Get Daily Updates</h1>
                        <br />
                        <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">Find out about events and other news.<br /> Stay informed about the latest trending topics<br /> around the world.</p>
                        <form  onSubmit={makeToast} className="flex flex-row">
                            <input name='email' type="email" placeholder="example@email.com" className="w-3/5 p-3 text-black rounded-l-lg sm:w-2/3" />
                            <button type="submit" className="w-2/5 p-3 font-semibold bg-purple-600 rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50">Subscribe</button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;