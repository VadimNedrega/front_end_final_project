import React from 'react';
import './ContactsPage.css';
import {Header} from "../../components";
import {Footer} from "../../components";

export function ContactsPage() {
    return (
        <div>
            <Header/>
            <div className="contacts-page__content">
                <h1>Наші контакти</h1>
                <p>
                    Ми завжди раді відповісти на ваші запитання та надати допомогу.
                    Зв'яжіться з нами за допомогою наступних контактних даних:
                </p>

                <h2 className="contacts-page__content__h2">Адреса:</h2>
                <p>вул. Реактівська, 123, м. Реакт, 010101</p>

                <h2 className="contacts-page__content__h2">Телефон:</h2>
                <p>0 800 000 000</p>

                <h2 className="contacts-page__content__h2">Електронна пошта:</h2>
                <p>react@example.com</p>

                <h2 className="contacts-page__content__h2">Години роботи:</h2>
                <p>Понеділок - П'ятниця: 9:00 - 18:00</p>
            </div>
            <Footer/>
        </div>
    );
}