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

    //Adds autoscroll to the slider
    useEffect(() => {
        const autoPlayInterval = setInterval(nextSlide, interval);
        return () => {
            clearInterval(autoPlayInterval);
        }
        // eslint-disable-next-line
    }, [interval]);
    return (
        <div className={"carousel__container"}>
            <div className={"carousel"}>
                <img src={images[activeIndex]}
                     alt={`Slide ${activeIndex + 1}`}
                     className={"carousel__img"}
                />
            </div>
        </div>
    );
};


