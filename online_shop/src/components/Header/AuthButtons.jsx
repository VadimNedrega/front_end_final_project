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
        <div className="auth-buttons">
            <button className="btn btn-common btn-primary" onClick={handleSignIn}>
                Sign In
            </button>
            <button className="btn btn-common btn-third" onClick={handleSignUp}>
                Sign Up
            </button>
        </div>
    );
}
