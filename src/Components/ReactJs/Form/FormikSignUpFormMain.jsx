import React from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { createGlobalStyle } from 'styled-components';
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     return (errors.firstName = 'Required');
//   }
//   if (values.firstName.length > 20) {
//     return (errors.firstName = 'Must be 20 characters or less');
//   }
//   return errors;
// };
const FormikSignupFormMain = () => {
  /* 
  * Formik recap : 
  Cách sử dụng formik giống react hook form, import và sau đó gọi formik = useFormik 
  và formik này là 1 cái object, ta có thể gọi initialValues, onSubmit, handleChange.....
  ? Vậy validation với formik như thế nào ?
  Tạo 1 hàm validate = (value) => {} bên ngoài component, tạo biến errors = {}
  Sau đó check điều kiện value truyền vào, ví dụ nếu ko có firstName thì trả lỗi error.firstname = 'required'
  Bỏ hàm validate vào trong object khi gọi formik, useFormik({..., validate})
  Muốn hiển thị lỗi thì formik.errors.firstName
  */
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        job: '',
        terms: false,
        intro: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, 'Must be 20 or less')
          .required('Required'),
        lastName: Yup.string().required('Required'),
        intro: Yup.string().required('Required'),
        job: Yup.string().required('Required'),
        email: Yup.string().required('Required').email(),
        terms: Yup.boolean(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
      className='p-10 w-full max-w-[500px] mx-auto'
      autoComplete='off'
    >
      <Form>
        <CustomInput
          label='First Name'
          name='firstName'
          placeholder='Enter your first name'
        ></CustomInput>
        <div className='flex flex-col gap-2 mb-5'>
          <label htmlFor='lastName'>Last Name</label>
          <Field
            id='lastName'
            placeholder='Enter your last name'
            className='p-4 rounded-md border border-gray-100'
            name='lastName'
          />
          <div className='text-red-600 text-sm'>
            <ErrorMessage name='lastName'></ErrorMessage>
          </div>
        </div>
        <div className='flex flex-col gap-2 mb-5'>
          <label htmlFor='email'>Email</label>
          <Field
            id='email'
            placeholder='Enter your Email'
            className='p-4 rounded-md border border-gray-100'
            name='email'
          />
          <div className='text-red-600 text-sm'>
            <ErrorMessage name='email'></ErrorMessage>
          </div>
        </div>
        <div className='flex flex-col gap-2 mb-5'>
          <label htmlFor='intro'>Intro</label>
          <Field
            id='intro'
            placeholder='Enter your last name'
            className='p-4 rounded-md border border-gray-100'
            name='intro'
            as='textarea'
          />
          <div className='text-red-600 text-sm'>
            <ErrorMessage name='intro'></ErrorMessage>
          </div>
        </div>
        <div className='flex align-middle flex-col gap-2 mb-5'>
          <label htmlFor='job'>Job</label>
          <Field
            id='job'
            placeholder='Enter your last name'
            className='p-4 rounded-md border border-gray-100'
            name='job'
            as='select'
          >
            <option value='frontend'>Front End</option>
            <option value='backend'>Back End</option>
            <option value='fullstack'>Full Stack</option>
          </Field>
          <div className='text-red-600 text-sm'>
            <ErrorMessage name='job'></ErrorMessage>
          </div>
        </div>
        <div className='flex items-center flex-col gap-2 mb-5'>
          <Field
            type='checkbox'
            placeholder='Enter your last name'
            className='p-4 rounded-md border border-gray-100'
            name='terms'
          ></Field>
          <p>I accpept terms and conditions</p>
          <div className='text-red-600 text-sm'>
            <ErrorMessage name='terms'></ErrorMessage>
          </div>
        </div>
        <button
          type='submit'
          className='w-full p-4 bg-blue-700 text-white font-semibold rounded-lg'
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};
// useField để tái sử dụng input thuần
const CustomInput = ({ label, name, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='flex flex-col gap-2 mb-5'>
      <label htmlFor={name || props.id}>{label}</label>
      <input
        id='firstName'
        className='p-4 rounded-md border border-gray-100'
        name={name}
        {...props}
        {...field}
        //  thay vì viết nhiều hàm onChange, onBlur, name, value ta có thể dùng hàm ...getFieldProps để auto gọi các hàm đó ra
      />
      {meta.touched && meta.error ? (
        <div className='text-red-600 text-sm'>
          <div name={name}>{meta.error}</div>
        </div>
      ) : null}
    </div>
  );
};
export default FormikSignupFormMain;
