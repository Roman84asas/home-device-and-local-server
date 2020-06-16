import React from "react";
import { Header} from "../../module";


import './Device.scss';


const Device = () => {
    return(
        <div className="content">
            <Header/>
            <main className="device_content">
                <div className="ui grid content_device">
                    <div className="four wide column">
                        <div className="ui fluid vertical tabular menu">
                            <a className="active item" href="/#">Camera</a>
                            <a className="item" href="/#">Kitchen</a>
                            <a className="item" href="/#">Bedroom</a>
                            <a className="item" href="/#">Restroom</a>  
                            <a className="item" href="/#">Gym</a>  
                            <a className="item" href="/#">Salon</a>
                            <a className="item" href="/#">Cinema hall</a>
                            <a className="item" href="/#">pool</a>
                            <a className="item" href="/#">Bathroom</a>                        
                        </div>
                    </div>
                    <div className="stretched twelve wide column">
                        <div className="ui segment">
                        This is an stretched grid column. This segment will always match the tab height
                        </div>
                    </div>
                </div>    
            </main>
        </div>
    )
};

export default Device;