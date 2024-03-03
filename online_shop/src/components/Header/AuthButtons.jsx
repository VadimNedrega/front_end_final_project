import React from 'react';
import { ROUTE } from '../../router';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logoutSuccess, selectIsAuthenticated} from '../../ducks/login.actions';

export function AuthButtons() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate(ROUTE.LOGIN);
    };

    const handleSignUp = () => {
        navigate(ROUTE.REGISTRATION);
    };

    const handleLogOut = () => {
        dispatch(logoutSuccess());
    };

    return (
        <div className="authbuttons">
            {!isAuthenticated && (
                <>
                    <button className="header__btn header__btn_common header__btn_primary" onClick={handleSignIn}>
                        Увійти
                    </button>
                    <button className="header__btn header__btn_common header__btn_third" onClick={handleSignUp}>
                        Реєстрація
                    </button>
                </>
            )}
            {isAuthenticated && (
                <button className="header__btn header__btn_common header__btn_third" onClick={handleLogOut}>
                    Logout
                </button>
            )}
        </div>
    );
}
