import { Carousel } from 'rsuite';
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <div className="container mx-auto space-y-10">
            <Carousel autoplay className="custom-slider rounded-lg max-h-36 md:max-h-52 lg:max-h-max">
                <div>
                    <h2 className='text-7xl font-black w-full h-full flex justify-end items-center bg-cover bg-no-repeat pr-32 font-serif'style={{ backgroundImage: 'url(https://i.ibb.co/C1p3wT9/52257.jpg)' }}>Blog<br /><br /><br /><span>Stream</span></h2>
                </div>
                <div>
                <h2 className='text-7xl text-sky-950 drop-shadow-xl font-black w-full h-full flex justify-center items-center bg-cover bg-no-repeat pr-32 font-serif'style={{ backgroundImage: 'url(https://i.ibb.co/tJGnRqx/9220705.jpg)' }}>Enjoy <br /><br /> <span>Quality</span> <br />Blogs</h2>
                </div>
                <div>
                    <img className='w-full' src="https://i.ibb.co/3NpZqrb/47465.jpg" />
                </div>
            </Carousel>

            <Newsletter></Newsletter>

        </div>
    );
};

export default Home;