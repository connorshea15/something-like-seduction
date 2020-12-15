import React from 'react';
import Navigation from '../Navigation';

function Header() {


    return (
        <header className="bg-dark">
            <div className="d-flex flex-row flex-wrap align-items-center">
                <div className="text-center">
                    <h1>
                        Something
                    </h1>
                    <h1>
                        Like
                    </h1>
                    <h1>
                        Seduction
                    </h1>
                </div>
                <Navigation className="text-right"></Navigation>
            </div>
        </header>
    );
}

export default Header;