import React from "react";
import { Route } from "react-router-dom";

import "./Auth.scss";
import {Footer, Header, LoginForm} from "../../module";

const Auth = () => (
    <div className="content">
        <Header/>
        <main className="auth">
            <div className="auth_content">
                <Route exact path="/login" component={LoginForm} />
            </div>
        </main>
        <Footer/>
    </div>
);
export default Auth;