
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
        autoplaySpeed: 3000,
        fade: true,
    };
    return (
        <div className="container mx-auto ">
            <Slider {...settings} className="">

                <div className=" relative h-[85vh] mt-[70px] bg-[url('https://i.ibb.co/c1PS0xv/point3d-commercial-imaging-ltd-GUno-Fet-WJM-unsplash.jpg')] bg-no-repeat bg-center bg-cover " >
                <div className="absolute z-10 inset-0 bg-black bg-opacity-40"></div>
                    <div className=" w-full h-full flex justify-center items-center text-center  ">
                        <div className="max-w-md z-20 ">
                            <h1 className="mb-4 text-4xl text-white  font-bold">Welcome to Our Survey Platform</h1>
                            <p className="mb-5 text-white">Create and participate in surveys easily.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                {/* <div className=" h-[100vh]  bg-[url('https://i.ibb.co/c1PS0xv/point3d-commercial-imaging-ltd-GUno-Fet-WJM-unsplash.jpg')] bg-no-repeat bg-center bg-cover " >
                    <div className=" w-full h-full flex justify-center items-center text-center  ">
                        <div className="max-w-md ">
                            <h1 className="mb-5 text-5xl font-bold">Analyze Survey Results</h1>
                            <p className="mb-5">Get detailed insights and analytics.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className=" h-[100vh]  bg-[url('https://i.ibb.co/c1PS0xv/point3d-commercial-imaging-ltd-GUno-Fet-WJM-unsplash.jpg')] bg-no-repeat bg-center bg-cover " >
                    <div className=" w-full h-full flex justify-center items-center text-center  ">
                        <div className="max-w-md ">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div> */}
            </Slider>
        </div>
    )
}

export default Banner