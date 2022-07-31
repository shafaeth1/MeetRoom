
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

export default class Responsive extends Slider {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            speed: 5000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <div className="p-8">
                <Slider {...settings}>
                    <div className="avatar">
                        <div className="w-full px-2">
                            <img src="https://placeimg.com/192/192/people" alt="Slide user" className="rounded-xl" />
                        </div>
                        <i className="fal fa-microphone font-bold text-md text-white bg-green-300 p-1 absolute bottom-4 right-4"></i>
                    </div>
                    <div className="avatar">
                        <div className="w-full px-2 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="Slide user" className="rounded-xl" />
                        </div>
                        <i className="fal fa-microphone font-bold text-md text-white bg-green-300 p-1 absolute bottom-4 right-4"></i>
                    </div>
                    <div className="avatar">
                        <div className="w-full px-2 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="Slide user" className="rounded-xl" />
                        </div>
                        <i className="fal fa-microphone font-bold text-md text-white bg-green-300 p-1 absolute bottom-4 right-4"></i>
                    </div>
                    <div className="avatar">
                        <div className="w-full px-2 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="Slide user" className="rounded-xl" />
                        </div>
                        <i className="fal fa-microphone font-bold text-md text-white bg-green-300 p-1 absolute bottom-4 right-4"></i>
                    </div>
                    <div className="avatar">
                        <div className="w-full px-2 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="Slide user" className="rounded-xl" />
                        </div>
                        <i className="fal fa-microphone font-bold text-md text-white bg-green-300 p-1 absolute bottom-4 right-4"></i>
                    </div>
                    <div className="avatar">
                        <div className="w-full px-2 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="Slide user" className="rounded-xl" />
                        </div>
                        <i className="fal fa-microphone font-bold text-md text-white bg-green-300 p-1 absolute bottom-4 right-4"></i>
                    </div>
                </Slider>
            </div>
        );
    }
}