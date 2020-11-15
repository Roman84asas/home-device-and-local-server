import React from "react";
import selectSort from "selection-sort-array-number";

import "./Footer.scss";


const  Footer = () => {
    const arr = [15, 22, 2, 3, 9, 1,7, 6];
    console.log(selectSort(arr));
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