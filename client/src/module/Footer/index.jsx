import React from "react";

import "./Footer.scss";


const  Footer = () => {
    return(
        <footer>
            <div className="footer_spa">
                <div className="info_footer">
                    <span>© 2020 REM, Inc.</span>
                </div>
                <div className="logo_spa">Logo</div>
                <div className="is_active">
                    <span>( Onn )</span>
                    <div className="figure"></div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;