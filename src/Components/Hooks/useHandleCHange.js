import { useState } from 'react';

export default function useHandleChange(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const type = e.target.type;
    // ! Dùng turnery operator hoặc if ... return đều work
    type === 'checkbox'
      ? setValues({ ...values, [e.target.name]: e.target.checked })
      : setValues({ ...values, [e.target.name]: e.target.value });
  };
  return {
    values,
    handleChange,
  };
}
