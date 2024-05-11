import { Carousel } from 'rsuite';
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <div className="container mx-auto space-y-10">
            <Carousel autoplay className="custom-slider rounded-lg max-h-36 md:max-h-52 lg:max-h-max">
                <div>
                    <img className='w-full' src="https://i.ibb.co/C1p3wT9/52257.jpg" />
                </div>
                <div>
                    <img className='w-full' src="https://i.ibb.co/tJGnRqx/9220705.jpg" />
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