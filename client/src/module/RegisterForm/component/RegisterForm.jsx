import React from "react";
import { Button, Message, Form } from 'semantic-ui-react'



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
        <Form 
            onSubmit={handleSubmit}             
        >
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
            </Form.Field>

            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
            </Form.Field>

            {errors.email && touched.email && errors.email}
            
            <Form.Input 
                label='Your Email' 
                placeholder='Your email' 
                id="email"
                value={values.email}
                onChange={handleChange}
            />
            <Message
                success
                header='Form Completed'
                content="You're all signed up for the newsletter"
            />    
            <Message
                error
                header='Action Forbidden'
                content='You can only sign up for an account once with a given e-mail address.'
            />   
            <Form.Field>
                <label>Enter Password</label>
                <input 
                    id="password"           
                    type='password'     
                    value={values.password}    
                    onChange={handleChange}            
                    placeholder="Enter password"
                />
            </Form.Field>
            <Form.Field>
                <label>Repeat Password</label>
                <input 
                    id="password2"            
                    type='password'
                    value={values.password2}   
                    onChange={handleChange}                  
                    placeholder="Repeat password"
                />
            </Form.Field>            
            <Button disabled={isSubmitting}>Submit</Button>
        </Form>
    )
};

export default RegisterForm ;