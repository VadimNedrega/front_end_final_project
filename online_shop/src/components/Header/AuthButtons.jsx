import React from 'react';
import {ROUTE} from '../../router';
import { useNavigate  } from 'react-router-dom';

export function AuthButtons() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate(ROUTE.LOGIN);
    };

    const handleSignUp = () => {
        navigate(ROUTE.REGISTRATION);
    };

    return (
        <div className="authbuttons">
            <button className="header__btn header__btn_common header__btn_primary" onClick={handleSignIn}>
                Увійти
            </button>
            <button className="header__btn header__btn_common header__btn_third" onClick={handleSignUp}>
                Реєстрація
            </button>
        </div>
    );
}
