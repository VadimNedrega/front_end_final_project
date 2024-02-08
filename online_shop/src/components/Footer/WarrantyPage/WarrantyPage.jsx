import React from 'react';
import './WarrantyPage.css';
import {Header} from "../../Header";
import {Footer} from "../index";

export function WarrantyPage() {
    return (
        <div>
            <Header/>
            <h1>Гарантія та повернення</h1>
            <div className="warranty-page">
                <div className="warranty-section">
                    <p>
                        Наша компанія гарантує вам високу якість продукції та надає можливість
                        повернення товарів у випадку невдоволеності або дефектів.
                    </p>

                    <img
                        src="https://www.propharmagroup.com/hs-fs/hubfs/Imported_Blog_Media/quality_inspection-4-1.jpg?width=1650&height=750&name=quality_inspection-4-1.jpg"
                        alt="Якість"
                        className="warranty-image"
                    />
                </div>

                <div className="warranty-section">
                    <p>
                        Ми дбаємо про наших клієнтів і готові вирішити всі питання, щоб ваш
                        досвід покупок був максимально приємним.
                    </p>

                    <img
                        src="https://www.prof-lider.com/themes/ban/cennosti/canukr2.jpg"
                        alt="Стандарти"
                        className="warranty-image"
                    />
                </div>

                <div className="warranty-section">
                    <p>
                        Якщо ви не задоволені придбаною продукцією, звертайтеся до нашої
                        служби підтримки для повернення або обміну товару.
                    </p>

                    <img
                        src="https://st2.depositphotos.com/2274151/5430/i/600/depositphotos_54301317-stock-photo-high-standard-blue-grungy-stamp.jpg"
                        alt="Стандарти"
                        className="warranty-image"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}