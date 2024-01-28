import React from 'react';

export function AuthButtons() {
    const handleSignIn = () => {
        console.log('Sign');
    };

    const handleSignUp = () => {
        console.log('Sign Up');
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
