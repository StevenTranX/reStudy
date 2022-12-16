import React from 'react';

const Option = ({ show, data }) => {
  return (
    <>
      {show && (
        <div className='border border-gray-300 p-5 '>
          <div className=''>
            {data.length > 0 &&
              data.map((item) => (
                <div key={item.key} className='text-xl font-semibold'>
                  {item.title}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Option;
