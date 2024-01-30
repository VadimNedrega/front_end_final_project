import React, {useEffect, useState} from "react";
import './Carousel.css'

export const Carousel = ({images, interval = 3500}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    //Slider control button logic
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    //Adds autoscroll to the slider
    useEffect(() => {
        const autoPlayInterval = setInterval(nextSlide, interval);
        return () => {
            clearInterval(autoPlayInterval);
        }
        // Webpack says me to disable this line 25, don't know the reason
        // eslint-disable-next-line
    }, [interval]);
    return (
        <div className={"container"}>
            <div className={"carousel"}>
                <button onClick={prevSlide} className={"carousel__btn carousel__btn--prev"}>
                    &lt;
                </button>
                <img src={images[activeIndex]}
                     alt={`Slide ${activeIndex}`}
                     className={"carousel__img"}
                />
                <button onClick={nextSlide} className={"carousel__btn carousel__btn--next"}>
                    &gt;
                </button>
            </div>
        </div>
    );
};