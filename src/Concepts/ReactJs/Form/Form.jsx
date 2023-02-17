import React, { useState } from 'react';
import useHandleChange from '../../Hooks/useHandleCHange';

const Form = () => {
  const { values, handleChange } = useHandleChange({
    fullname: '',
    message: '',
    country: '',
    hobby: false,
  });
  const [nameError, setNameError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.fullname === '') {
      setNameError('Your fullname is empty');
    }
  };

  //! Việc có nhiều trường cũng như nhiều hàm handle như vậy sẽ không tối ưu
  // ! Bởi vì nếu sau này làm có 1 form rất nhiều thông tin thì chương trình sẽ chậm và khó quán lý code
  // * Nên tạo 1 state nhưng kiểu dữ liệu là object

  // ?? ÔN TẬP : Nếu không clone lại object values thì tại sao thay đổi trường này thì trường kia mất ??
  // * Vì dữ liệu dạng object là dạng dữ liệu tham chiếu, dữ liệu tham chiếu là khi ta khai báo thì chỉ khai báo đến địa chỉ vùng nhớ chứ không có lưu giá trị trên thanh RAM,
  // * Nên khi ta thay đổi property thì ta trỏ đến địa chỉ đó, và ghi đè lên giá trị cũ chứ không phải thêm mới vào

  // ?? Vậy với input type là checkbox thì xử lý như thế nào ?
  // * Input type checkbox sẽ trả ra giá trị là 'on' và 'off', mà thường chúng ta nên xử lý về giá trị boolean
  // * nên trong hàm handleChange ta viết thêm 1 điều kiện. Nếu type là checkbox,thì là không lấy event.target.value, mà lấy event.target.checked

  // ?? Làm sao để chỉ cần tạo 1 cái form mà có thể sử dụng được nhiều cho component ????
  // ! USE THE FUCKING CUSTOM HOOK

  return (
    <div className='p-5'>
      <form
        onSubmit={handleSubmit}
        className='flex gap-mx-3'
        autoComplete='off'
      >
        <div className='flex flex-col gap-y-3'>
          <input
            type='text'
            name='fullname'
            value={values.fullname}
            className='w-full max-width-[300px] p-3 border border-grey-100 rounded-lg'
            placeholder='Enter your name'
            onChange={handleChange}
          />
          {nameError}
        </div>
        <textarea
          className='w-full max-w-[300px] p-5 border border-gray-200 rounded-lg'
          onChange={handleChange}
          name='message'
        ></textarea>
        <select name='country' onChange={handleChange}>
          <option value='vietnam'></option>
          <option value='usa'></option>
          <option value='japan'></option>
          <option value='korea'></option>
        </select>
        <input type='checkbox' name='hobby' onChange={handleChange} />
        <button type='submit' className='rounded-lg bg-green-600 p-2'>
          Submit here{' '}
        </button>
      </form>
    </div>
  );
};

export default Form;
