import RegisterForm from '../component/RegisterForm';
import { withFormik } from 'formik';


export default withFormik({
    mapPropsToValues: () => ({
        email: "",
        password: '',
        password_2: ''
    }),

    validate: values => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Errors email";
        }       
        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
    },

    displayName: "RegisterForm"

})(RegisterForm);