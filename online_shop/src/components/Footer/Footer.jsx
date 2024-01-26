import React from 'react';
import './Footer.css';

export function Footer () {
    return (
        <footer className="footer-container">
            <div className="footer-column">
                <h1 className="address">Гаряча лінія:</h1>
                <p className="phone">0 800 000 000</p>
                <h1 className="address">Головний офіс:</h1>
                <p className="address-info">Адреса: вул. Реактівська, 123</p>
            </div>

            <div className="footer-column">
                <h2>Покупцям</h2>
                <ul>
                    <li><a href="#">Доставка і оплата</a></li>
                    <li><a href="#">Гарантія та повернення</a></li>
                    <li><a href="#">Знижки та акції</a></li>
                    <li><a href="#">Програма лояльності</a></li>
                    <li><a href="#">Подарункові карти</a></li>
                    <li><a href="#">Партнери</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h2>Компанія</h2>
                <ul>
                    <li><a href="#">Про нас</a></li>
                    <li><a href="#">Контакти</a></li>
                    <li><a href="#">Кар'єра</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h2>Робота</h2>
                <ul>
                    <li><a href="#">Вакансїї</a></li>
                    <li><a href="#">Менеджери з персоналу</a></li>
                    <li><a href="#">Історії успіху</a></li>
                </ul>
            </div>
        </footer>
    );
}