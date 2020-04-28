import React from "react";
import {Footer, Header} from "../../module";


import './Home.scss';


const Home = () => {
    return(
        <div className="content">
            <Header/>
            <main className="home_content">
                <div className="title">
                    <h1>Smart home</h1>
                </div>
            </main>
            <Footer/>
        </div>
    )
};

export default Home;