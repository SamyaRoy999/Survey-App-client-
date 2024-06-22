
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
                            <div className="flex gap-3 text-gray-300 justify-center">
                                <button
                                    className="relative border border-2 bg-[#1a8b7457] border-[#0E6251] rounded px-4 py-2   inline cursor-pointer text-xl font-bold before:bg-[#0E6251] hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                                    Learn More
                                </button>
                                <button
                                    className="relative border border-2 bg-[#1a8b7457] border-[#0E6251] rounded px-4 py-2 inline cursor-pointer text-xl font-bold before:bg-[#0E6251] hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                                    explore
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" relative h-[85vh]  bg-[url('https://i.ibb.co/CPyQBKz/Adobe-Stock-296450913-Preview.jpg')] bg-no-repeat bg-center bg-cover " >
                    <div className="absolute z-10 inset-0 bg-black bg-opacity-40"></div>
                    <div className=" w-full h-full flex justify-center items-center text-center  ">
                        <div className="max-w-md z-20 ">
                            <h1 className="mb-4 text-4xl text-white  font-bold">Discover What We Offer</h1>
                            <p className="mb-5 text-white">Providing the best solutions for you.</p>
                            <div className="flex gap-3 text-gray-300 justify-center">
                                <button
                                    className="relative border border-2 bg-[#1a8b7457] border-[#0E6251] rounded px-4 py-2   inline cursor-pointer text-xl font-bold before:bg-[#0E6251] hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                                    Learn More
                                </button>
                                <button
                                    className="relative border border-2 bg-[#1a8b7457] border-[#0E6251] rounded px-4 py-2 inline cursor-pointer text-xl font-bold before:bg-bg-[#0E6251] hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                                    explore
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" relative h-[85vh]  bg-[url('https://i.ibb.co/c87qn0F/pexels-pixabay-265087.jpg')] bg-no-repeat bg-center bg-cover " >
                    <div className="absolute z-10 inset-0 bg-black bg-opacity-40"></div>
                    <div className=" w-full h-full flex justify-center items-center text-center  ">
                        <div className="max-w-md z-20 ">
                            <h1 className="mb-4 text-4xl text-white font-bold">Join Us and Grow Together</h1>
                            <p className="mb-5 text-white">Connect and collaborate with our community.</p>
                            <div className="flex gap-3 text-gray-300 justify-center">
                                <button
                                    className="relative border border-2 bg-[#1a8b7457] border-[#0E6251] rounded px-4 py-2   inline cursor-pointer text-xl font-bold before:bg-[#0E6251] hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                                    Learn More
                                </button>
                                <button
                                    className="relative border border-2 bg-[#1a8b7457] border-[#0E6251] rounded px-4 py-2 inline cursor-pointer text-xl font-bold before:bg-[#0E6251] hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                                    explore
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </Slider>
        </div>
    )
}

export default Banner