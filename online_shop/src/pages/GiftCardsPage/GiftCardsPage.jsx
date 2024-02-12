import React from 'react';
import './GiftCardsPage.css';
import {Header} from "../../components";
import {Footer} from "../../components";

export function GiftCardsPage() {
    return (
        <div className="gift-cards-page">
            <Header />

            <div className="gift-cards-page__content">
                <h1>Подарункові карти</h1>
                <p>
                    Подарункова карта - ідеальний спосіб зробити подарунок вашим
                    близьким та друзям. Вона надає можливість вибору товару за
                    власним бажанням.
                </p>

                <img
                    src="https://img.freepik.com/free-photo/beautiful-gift-voucher-with-hand_23-2149243920.jpg?w=1060&t=st=1707055595~exp=1707056195~hmac=44716a82b3a1eb98ed632e232f4f0bc10f75237eb5160cab6db7e7f3b856d9aa"
                    alt="Подарункові карти"
                    className="gift-cards-image"
                />

                <h2 className="gift-cards-page__content__h2">Як придбати подарункову карту:</h2>
                <ol>
                    <li>Зверніться до нашого магазину</li>
                    <li>Оберіть суму та дизайн картки</li>
                    <li>Оплатіть та отримайте подарункову карту</li>
                </ol>
                <h2 className="gift-cards-page__content__h2">Вигоди використання подарункової карти:</h2>
                <ul>
                    <li>Можливість вибору будь-якого товару в нашому магазині</li>
                    <li>Термін дії картки - 12 місяців</li>
                    <li>Можливість використання на декілька покупок</li>
                </ul>
            </div>
            <p className="gift-cards-page__lastP">
                Зробіть подарунок, який сподобається кожному. Подарункові карти -
                це зручний та практичний спосіб подарувати радість та вибір вашому
                оточенню😊
            </p>

            <Footer />
        </div>
    );
}