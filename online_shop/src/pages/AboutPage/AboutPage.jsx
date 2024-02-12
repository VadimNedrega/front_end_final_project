import React from 'react';
import './AboutPage.css';
import {Header} from "../../components";
import {Footer} from "../../components";

export function AboutPage() {
    return (
        <div>
            <Header/>
            <div className="about-page__content">
                <h1>Про нас</h1>
                <p>
                    Ми - ваш надійний партнер у світі покупок. Наш магазин пропонує широкий
                    асортимент товарів високої якості за доступними цінами.
                </p>

                <img
                    src="https://seo-evolution.com.ua/imgfly/public/Ej5uSGigkkhfGF9Sq2yBC9xGtsPNaiiNQ7uy0W4i.jpg"
                    alt="Про нас"
                    className="about-page__image"
                />

                <h2 className="about-page__content__h2">Наша місія:</h2>
                <p>
                    Ми прагнемо забезпечити нашим клієнтам кращий досвід покупок, пропонуючи
                    якісні товари і відмінний сервіс.
                </p>

                <h2 className="about-page__content__h2">Наші цінності:</h2>
                <ul>
                    <li>Якість</li>
                    <li>Надійність</li>
                    <li>Професіоналізм</li>
                    <li>Відповідальність</li>
                </ul>
            </div>
            <Footer/>
        </div>
    );
}