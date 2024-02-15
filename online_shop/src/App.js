import React from "react";
import {Header} from "./components"
import {Carousel} from "./components";
import {ProductCard} from "./components"
import {Footer} from "./components";
import {images} from "./resources";

export function App() {


    //Обязательно займусь заменой этого ужаса на данные из JSON, ео пока пускай так.
    //Если у кого есть решение в голове, то можно его применить
    const productInfo1 = {
        img: "https://riderguide.com/wp-content/uploads/2023/04/electric-scooter-controllerjpg.webp",
        description: "test1",
        price: "200",
        formPrice: "200$"
    };
    const productInfo2 = {
        img: "https://riderguide.com/wp-content/uploads/2023/04/electric-scooter-controllerjpg.webp",
        description: "test2",
        price: "300",
        formPrice: "300$"
    };
    const productInfo3 = {
        img: "https://riderguide.com/wp-content/uploads/2023/04/electric-scooter-controllerjpg.webp",
        description: "test3",
        price: "199",
        formPrice: "199$"
    };
    const productInfo4 = {
        img: "https://riderguide.com/wp-content/uploads/2023/04/electric-scooter-controllerjpg.webp",
        description: "test4",
        price: "480",
        formPrice: "480$"
    };
    const productInfo5 = {
        img: "https://riderguide.com/wp-content/uploads/2023/04/electric-scooter-controllerjpg.webp",
        description: "test5",
        price: "150",
        formPrice: "150$"
    };
    const productInfo6 = {
        img: "https://riderguide.com/wp-content/uploads/2023/04/electric-scooter-controllerjpg.webp",
        description: "test6",
        price: "500",
        formPrice: "500$"
    };
    const productInfo7 = {
        img: "https://riderguide.com/wp-content/uploads/2023/04/electric-scooter-controllerjpg.webp",
        description: "test7",
        price: "200",
        formPrice: "200$"
    };
    const productInfo8 = {
        img: "https://riderguide.com/wp-content/uploads/2023/04/electric-scooter-controllerjpg.webp",
        description: "test8",
        price: "720",
        formPrice: "720$"
    };

    return (
        <div>
            <Header/>
            <Carousel images={images}/>
            <div className="card__container">
                <ProductCard {...productInfo1}/>
                <ProductCard {...productInfo2}/>
                <ProductCard {...productInfo3}/>
                <ProductCard {...productInfo4}/>
                <ProductCard {...productInfo5}/>
                <ProductCard {...productInfo6}/>
                <ProductCard {...productInfo7}/>
                <ProductCard {...productInfo8}/>
            </div>
            <Footer/>
        </div>
    )
}
