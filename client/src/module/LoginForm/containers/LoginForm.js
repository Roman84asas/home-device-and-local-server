import LoginForm from '../component/LoginForm';
import { withFormik } from 'formik';


import validateForm from "../../../utils/validate";

export default withFormik({
    mapPropsToValues: () => ({
        email: "",
        password: ''
    }),

    validate: values => {
      let errors = {};
      validateForm({ isAuth: false, values, errors });
      return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
    },

    displayName: "LoginForm"
})(LoginForm);