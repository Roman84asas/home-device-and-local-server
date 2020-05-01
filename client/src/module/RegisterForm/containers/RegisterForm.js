import RegisterForm from '../component/RegisterForm';
import { withFormik } from 'formik';

import validateForm from "../../../utils/validate";


export default withFormik({
    mapPropsToValues: () => ({
        email: "",        
        fullname: "",
        password: "",
        password_2: ""
    }),    

    validate: values => {
      let errors = {};
      validateForm({ isAuth: false, values, errors });
      return errors;
    },
    
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
          setSubmitting(false);
        }, 4000);
        
      
    },

    displayName: "RegisterForm"

})(RegisterForm);