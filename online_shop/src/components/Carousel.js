import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <img src="carousel/carousel_001.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="carousel/carousel_002.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="carousel/carousel_003.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="carousel/carousel_004.jpg" alt=""/>
                    </div>
                </Slider>
            </div>
        );
    }
}