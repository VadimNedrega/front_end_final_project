import React from 'react';
import { useNavigate  } from 'react-router-dom';

export function AuthButtons() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/login');
    };

    const handleSignUp = () => {
        navigate('/registration');
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
