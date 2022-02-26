import React from 'react'
import '../css/header.css';

const  Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar__text">
                <div className="logo"><img src="../img/unnamed.png"  alt="logo"/></div>
                <ul className="navbar__ul">
                    <li><a href="">Home</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Order</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
