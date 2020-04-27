import React from "react";


const LoginForm = () => {
    return(
        <form className="ui form">
            <div className="field">
                <label>Your Email</label>
                <input placeholder="Your email"/>
            </div>
            <div className="field">
                <label>Enter Password</label>
                <input type='password' />
            </div>
            <div className="field">
                <div className="ui checkbox">
                    <input type="checkbox" className="hidden" readOnly="" tabIndex="0"/>
                    <label>I agree to the Terms and Conditions</label>
                </div>
            </div>
            <button type="submit" className="ui button">Submit</button>
        </form>
    )
};

export default LoginForm;