import React from 'react';
import './Footer.css';

export function Footer() {
    return (
        <footer className="footer__container">
            <div className="footer__row">
                <h1>Гаряча лінія:</h1>
                <p className="phone">0 800 000 000</p>
                <h1>Головний офіс:</h1>
                <p className="address__info">Адреса: вул. Реактівська, 123</p>
            </div>

            <div className="footer__row">
                <h1>Покупцям</h1>
                <ul>
                    <li><a href="/delivery">Доставка і оплата</a></li>
                    <li><a href="/warranty">Гарантія та повернення</a></li>
                    <li><a href="/loyalty">Програма лояльності</a></li>
                    <li><a href="/giftCards">Подарункові карти</a></li>
                </ul>
            </div>

            <div className="footer__row">
                <h1>Компанія</h1>
                <ul>
                    <li><a href="#">Про нас</a></li>
                    <li><a href="#">Контакти</a></li>
                    <li><a href="#">Кар'єра</a></li>
                </ul>
            </div>

            <div className="footer__row">
                <h1>Робота</h1>
                <ul>
                    <li><a href="#">Вакансїї</a></li>
                    <li><a href="#">Менеджери з персоналу</a></li>
                    <li><a href="#">Історії успіху</a></li>
                </ul>
            </div>
        </footer>
    );
}