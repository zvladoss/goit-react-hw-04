import { Field, Form, Formik, useFormik } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import FormInput from "../FormInput/FormInput";
const ContactFormCopy = ({ addContact }) => {
  const handleSubmit = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    addContact(newContact);
    options.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  const nu = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .matches(nu, "It's not tel!")
      .min(13, "Invalid format!")
      .required("Required!"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form>
          <FormInput name="name" s={s} label="Name" />
          <FormInput name="number" s={s} label="Number" />
          <button className={s.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactFormCopy;
