import React from "react";


const LoginForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = props;
    return(
        <form onSubmit={handleSubmit} className="ui form">
            <h2>Log in for Your Account</h2>
            {errors.email && touched.email && errors.email}
            <div className="field reg">
                <label>Your Email</label>
                <input 
                    id="email"
                    placeholder="Your email"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <div className="field reg">
                <label>Enter Password</label>
                <input          
                    id="password"           
                    type='password'     
                    value={values.password}    
                    onChange={handleChange}            
                    placeholder="Enter password"
                    autoComplete="new-password"
                />
            </div>
            <div className="field reg">
                <div className="ui checkbox">
                    <input type="checkbox" className="hidden" readOnly="" tabIndex="0"/>
                    <label>I agree to the Terms and Conditions</label>
                </div>
            </div>
            <button type="submit" className="ui button" disabled={isSubmitting}>Submit</button>
        </form>
    )
};

export default LoginForm;