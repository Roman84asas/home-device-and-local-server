import React from "react";
import { Image } from 'semantic-ui-react'

import "./Header.scss";

const Header = () => {
    return(
        <header>
            <div className="ui menu">
                <Image src='https://sun9-22.userapi.com/c858132/v858132878/19a68c/JTq9xrYhWk4.jpg?ava=1' size='mini' circular className="logo_foto"/>
                <div className="left menu full_name">
                    <span>Roman</span>
                </div>
                <div className="right menu">
                    <div className="item">
                        <button className="ui violet basic button">Log-in</button>
                    </div>
                    <div className="item">
                        <button className="ui grey basic button">Sign up</button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;