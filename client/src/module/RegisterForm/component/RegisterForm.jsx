import React from "react";


const RegisterForm  = () => {
    return(
        <form className="ui form">
            <div className="field reg">
                <label>First Name</label>
                <input placeholder="First Name"/>
            </div>
            <div className="field reg">
                <label>Last Name</label>
                <input placeholder="Last Name"/>
            </div>
            <div className="field reg">
                <label>Your Email</label>
                <input placeholder="Your email"/>
            </div>
            <div className="field reg">
                <label>Enter Password</label>
                <input type='password' />
            </div>
            <div className="field reg">
                <label>Repeat Password</label>
                <input type='password' />
            </div>
            <button type="submit" className="ui button">Submit</button>
        </form>
    )
};

export default RegisterForm ;