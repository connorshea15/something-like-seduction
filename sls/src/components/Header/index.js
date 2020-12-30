import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

function Header() {

    return (
        <header className="bg-dark p-3">
            <div className="d-flex flex-row flex-wrap align-items-center justify-content-between">
                <div className="ml-5"></div>
                <div className="">
                    <Link to="/">
                        <h1>
                            Something <br /> Like <br /> Seduction
                        </h1>
                    </Link>
                </div>
                <div className="mr-3">
                    <Navigation></Navigation>
                </div>
            </div>
        </header>
    );
}

export default Header;