
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class PauseOnHover extends Slider {
    render() {
        var settings = {
            className: "center",
            // dots: true,
            // infinite: true,
            slidesToShow: 10,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="p-10 bg-gray-800 text-white min-h-screen">
                <h2 >Online</h2>
                <Slider {...settings}>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                            <li className='bg-green-400 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-1 lg:py-2 font-bold'><i className="fal fa-microphone font-bold"></i></li>
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />

                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}