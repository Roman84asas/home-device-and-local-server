import React from "react";
import { Header} from "../../module";


import './Device.scss';


const Device = () => {
    return(
        <div className="content">
            <Header/>
            <main className="device_content">
                <div className="title">
                    <h1>Device </h1>
                </div>
            </main>
        </div>
    )
};

export default Device;