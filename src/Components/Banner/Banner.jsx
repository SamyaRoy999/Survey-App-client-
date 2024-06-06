
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear'
    };
    return (
        <div className="container mx-auto">
            <Slider {...settings} className="">

                <div className=" relative h-[85vh]  bg-[url('https://i.ibb.co/VJfK7Fq/pexels-goumbik-669619.jpg')] bg-no-repeat bg-center bg-cover " >
                    <div className="absolute z-10 inset-0 bg-black bg-opacity-40"></div>
                    <div className=" w-full h-full flex justify-center items-center text-center  ">
                        <div className="max-w-md z-20 ">
                            <h1 className="mb-4 text-4xl text-white  font-bold">Welcome to Our Survey Platform</h1>
                            <p className="mb-5 text-white">Create and participate in surveys easily.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className=" relative h-[85vh]  bg-[url('https://i.ibb.co/TgCgyzp/pexels-pixabay-416322.jpg')] bg-no-repeat bg-center bg-cover " >
                    <div className="absolute z-10 inset-0 bg-black bg-opacity-40"></div>
                    <div className=" w-full h-full flex justify-center items-center text-center  ">
                        <div className="max-w-md z-20 ">
                            <h1 className="mb-4 text-4xl text-white  font-bold">Welcome to Our Survey Platform</h1>
                            <p className="mb-5 text-white">Create and participate in surveys easily.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className=" relative h-[85vh]  bg-[url('https://i.ibb.co/c87qn0F/pexels-pixabay-265087.jpg')] bg-no-repeat bg-center bg-cover " >
                    <div className="absolute z-10 inset-0 bg-black bg-opacity-40"></div>
                    <div className=" w-full h-full flex justify-center items-center text-center  ">
                        <div className="max-w-md z-20 ">
                            <h1 className="mb-4 text-4xl text-white font-bold">Welcome to Our Survey Platform</h1>
                            <p className="mb-5 text-white">Create and participate in surveys easily.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
               
              
            </Slider>
        </div>
    )
}

export default Banner