import React from 'react';
import './Footer.css';
import {ROUTE} from '../../router';

export function Footer() {
    return (
        <footer className="footer__container">
            <div className="footer__row">
                <h1>Гаряча лінія:</h1>
                <p className="phone">0 800 000 000</p>
                <h1>Головний офіс:</h1>
                <p className="address__info">Адреса: м. Реакт вул. Реактівська, 123</p>
            </div>

            <div className="footer__row">
                <h1>Покупцям</h1>
                <ul>
                    <li><a href={ROUTE.DELIVERY}>Доставка і оплата</a></li>
                    <li><a href={ROUTE.WARRANTY}>Гарантія та повернення</a></li>
                    <li><a href={ROUTE.LOYALTY}>Програма лояльності</a></li>
                    <li><a href={ROUTE.GIFT_CARDS}>Подарункові карти</a></li>
                </ul>
            </div>

            <div className="footer__row">
                <h1>Компанія</h1>
                <ul>
                    <li><a href={ROUTE.ABOUT}>Про нас</a></li>
                    <li><a href={ROUTE.CONTACTS}>Контакти</a></li>
                    <li><a href={ROUTE.CAREER}>Кар'єра</a></li>
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