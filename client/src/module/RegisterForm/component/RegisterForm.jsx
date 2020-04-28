import React from "react";


const success  = false;
const RegisterForm  = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return(
        <form onSubmit={handleSubmit} className="ui form">
            <div className="field reg">
                <label>First Name</label>
                <input placeholder="First Name"/>
            </div>

            <div className="field reg">
                <label>Last Name</label>
                <input placeholder="Last Name"/>
            </div>
            
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
                <input type='password' />
            </div>
            {errors.password && touched.password && errors.password}
            <div className="field reg">
                <label>Repeat Password</label>
                <input type='password' />
            </div>

            <button type="submit" className="ui button">Submit</button>
        </form>
    )
};

export default RegisterForm ;