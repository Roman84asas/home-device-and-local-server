import React from "react";



const RegisterForm  = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
        handleBlur,
    } = props;
    return(
        <form onSubmit={handleSubmit} className="ui form">
            {errors.fullname}
            <div className="field reg">
                <label>Full Name</label>
                <input 
                    id="fullname"
                    placeholder="Full Name"
                    value={values.fullname}
                    onBlur={handleBlur}
                    onChange={handleChange}                    
                />
            </div>            

            {errors.email && touched.email && errors.email}
            <div className="field reg">
                <label>Your Email</label>
                <input 
                    id="email"
                    placeholder="Your email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
            </div>
            {errors.password}
            <div className="field reg">
                <label>Enter Password</label>
                <input          
                    id="password"           
                    type='password'     
                    value={values.password}    
                    onBlur={handleBlur}
                    onChange={handleChange}            
                    placeholder="Enter password"
                    autoComplete="new-password"
                />
            </div>
            {errors.password_2}
            <div className="field reg">
                <label>Confirmation Password</label>
                <input         
                    id="password_2"            
                    type='password'
                    value={values.password_2}   
                    onBlur={handleBlur}
                    onChange={handleChange}         
                    autoComplete="new-password"         
                    placeholder="Confirmation password"
                />
            </div>

            <button 
                type="submit" 
                className="ui button" 
                disabled={isSubmitting} 
            >Submit</button>
        </form>
    )
};

export default RegisterForm ;