import ImageSlider from "./imgSlider";

const Carousel = () => {
    const slides = [
        { url: "https://klassmarket.ua/image/catalog/data/home/home_slider/001/001.jpg", title: "promo1" },
        { url: "https://klassmarket.ua/image/catalog/data/home/home_slider/001/002.jpg", title: "promo2" },
        { url: "https://klassmarket.ua/image/catalog/data/home/home_slider/001/003.jpg", title: "promo3" },
        { url: "https://klassmarket.ua/image/catalog/data/home/home_slider/001/004.jpg", title: "promo4" },
        { url: "https://klassmarket.ua/image/catalog/data/home/home_slider/001/005.jpg", title: "promo5" },
    ];
    const containerStyles = {
        width: "60%",
        height: "600px",
        margin: "0 auto",
    };
    return (
        <div>
            <h1>test</h1>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    );
};

export default Carousel;