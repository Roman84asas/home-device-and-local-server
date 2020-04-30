import React from "react";



const RegisterForm  = props => {
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
                <input          
                    id="password"           
                    type='password'     
                    value={values.password}    
                    onChange={handleChange}            
                    placeholder="Enter password"
                />
            </div>
            <div className="field reg">
                <label>Repeat Password</label>
                <input         
                    id="password2"            
                    type='password'
                    value={values.password2}   
                    onChange={handleChange}                  
                    placeholder="Repeat password"
                />
            </div>

            <button type="submit" className="ui button" disabled={isSubmitting}>Submit</button>
        </form>
    )
};

export default RegisterForm ;