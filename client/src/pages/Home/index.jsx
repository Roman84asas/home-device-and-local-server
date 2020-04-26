import React from "react";
import {Footer, Header} from "../../module";


import './Home.scss';


const Home = () => {
    return(
        <div className="content">
            <Header/>
            <main className="home_content">
                <h1>Smart home</h1>
            </main>
            <Footer/>
        </div>
    )
};

export default Home;