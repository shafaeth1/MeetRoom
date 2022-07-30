
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class PauseOnHover extends Slider {
    render() {
        var settings = {
            className: "center",
            dots: true,
            infinite: true,
            slidesToShow: 10,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <div className="p-10 bg-gray-800 text-white">
                <h2 >Online</h2>
                <Slider {...settings}>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}