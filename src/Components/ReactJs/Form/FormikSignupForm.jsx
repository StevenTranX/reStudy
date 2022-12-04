import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
const FormikSignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, 'Must be 20 or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
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
    <form
      onSubmit={formik.handleSubmit}
      className='p-10 w-full max-w-[500px] mx-auto'
      autoComplete='off'
    >
      <div className='flex flex-col gap-2 mb-5'>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          placeholder='Enter your first name'
          className='p-4 rounded-md border border-gray-100'
          {...formik.getFieldProps('firstName')}
          //  thay vì viết nhiều hàm onChange, onBlur, name, value ta có thể dùng hàm ...getFieldProps để auto gọi các hàm đó ra
        />
        {formik.errors.firstName ? (
          <div className='text-sm text-red-500'>{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className='flex flex-col gap-2 mb-5'>
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          placeholder='Enter your last name'
          className='p-4 rounded-md border border-gray-100'
          name='lastName'
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        {formik.errors.lastName && (
          <div className='text-sm text-red-500'>{formik.errors.lastName}</div>
        )}
      </div>
      <button
        type='submit'
        className='w-full p-4 bg-blue-700 text-white font-semibold rounded-lg'
      >
        Submit
      </button>
    </form>
  );
};

export default FormikSignupForm;
