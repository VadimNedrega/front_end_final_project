import React from 'react';
import './FaqPage.css';
import {Header} from "../../components";
import {Footer} from "../../components";
import {FOOTER_IMAGE} from "../../resources/footer_images";

export function FaqPage() {
    return (
        <div>
            <Header/>
            <div className="faq-page__content">
                <h1>Питання та відповіді</h1>
                <p>
                    Нижче наведено найпоширеніші запитання та відповіді на них.
                    Якщо у вас виникли інші питання, будь ласка, зв'яжіться з нашим
                    відділом обслуговування клієнтів.
                </p>

                <img
                    src={FOOTER_IMAGE.FAQ}
                    alt="Про нас"
                    className="faq-page__image"
                />

                <h2 className="faq-page__content__h2">Часто задаються питання:</h2>
                <ul>
                    <li>
                        <strong>Які способи оплати ви приймаєте?</strong>
                        <p>Ми приймаємо оплату готівкою, банківським переказом та кредитними картками.</p>
                    </li>
                    <li>
                        <strong>Як довго триває доставка замовлення?</strong>
                        <p>Термін доставки залежить від місця доставки та обраного методу доставки.</p>
                    </li>
                    <li>
                        <strong>Чи можу я повернути товар?</strong>
                        <p>Так, ви можете повернути товар упродовж 14 днів з моменту його отримання.</p>
                    </li>
                </ul>
            </div>
            <Footer/>
        </div>
    );
}