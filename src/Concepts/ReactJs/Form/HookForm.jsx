import React from 'react';
import { useForm, Controller, useController } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// ? Dùng yup validation thay cho validation cở bản của react hook form là gì ??
// Cài đặt yupResolver sau đó bỏ vào react hook form
// const schema = .... ( validation ở đây)
// .... useForm({
//  defaulValue
// },
// resolver : yupResolver(schema))
// * Nếu muốn viết message riêng cho mỗi lần validation thì viết ở trong ngoặc như .required('PLease enter ... ')
const schema = yup.object({
  firstName: yup.string().required().max(10),
  lastName: yup
    .string()
    .required('Please enter your last fucking name')
    .max(10, 'Must be 10 characters or less'),
});
const HookForm = () => {
  /* 
    
  */
  const form = useForm({
    defaultValues: {
      firstName: '',
      email: '',
      lastName: '',
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    control,

    // Các Status của react hook form nằm ở formState isSubmittimg, submitCount....

    // * isValid kiểm tra form đã validate hết chưa => hàm trả ra true false
    // * Hàm isValid sẽ luôn luôn trả ra false, phải đổi mode thành onChange thì mới true,
    // * Dùng để kiểm tra khi submit form xem thử form valid hay chưa

    // * isDirty | boolean  là khi các field có chạm vào / thay đổi hay chưa

    // * dirtyField | object  thì thay vì trả ra boolean hàm sẽ trả ra các trường đã bị chạm

    // reset() trong react hook form
    // Truyền các filed mình muốn reset({firstName : ''}) hoặc muốn field lên lại form

    // resetField() thường dùng để reset 1 field bất kỳ, có thể kết hợp với sự kiện onClick
    // setFocus() thay vì dùng ref để focus vào field thì mình có thể dùng kết hợp useEffect
  } = form;
  // hàm handleSubmit sẽ validate các input trước khi submit
  // có defaultValue để cập nhật form khi edit
  // {...register('first name')}
  const onSubmit = (values) => {
    // hàm setTimeout bình thường sẽ không hoạt động, hàm onSubmit sẽ không hiểu nên ta phải dùng 1 cái Promise như dưới
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
      }, 5000);
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-10 w-full max-w-[500px] mx-auto'
      autoComplete='off'
    >
      {/* <div className='flex flex-col gap-2 mb-5'>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          placeholder='Enter your first name'
          className='p-4 rounded-md border border-gray-100'
          //  thay vì viết nhiều hàm onChange, onBlur, name, value ta có thể dùng hàm ...getFieldProps để auto gọi các hàm đó ra
        />
        <div className='text-sm text-red-500'></div>
      </div> */}
      <div className='flex flex-col gap-2 mb-5'>
        <label htmlFor='firstName'>First Name</label>
        <MyInput
          name='firstName'
          control={control}
          placeholder='Enter your First Name'
        />
      </div>

      <div className='flex flex-col gap-2 mb-5'>
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          placeholder='Enter your last name'
          className='p-4 rounded-md border border-gray-100'
          name='lastName'
          {...register('lastName')}
          defaultValue='Steven'
        />
        {errors.lastName && (
          <div className='text-sm text-red-500'>
            {errors?.lastName?.message}
          </div>
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
// const MyInput = ({ name, control, ...props }) => {
//   return (
//     <Controller
//       control={control}
//       name={name}
//       defaultValue=''
//       render={({ field }) => {
//         return (
//           <input
//             {...field}
//             {...props}
//             className='p-4 rounded-md border border-gray-100'
//           />
//         );
//       }}
//     ></Controller>
//   );
// };
const MyInput = ({ name, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  // dùng defaultValue vì nó báo lỗi uncontrolled
  return (
    <input
      {...field}
      {...props}
      className='p-4 rounded-md border border-gray-100'
    />
  );
};

export default HookForm;
