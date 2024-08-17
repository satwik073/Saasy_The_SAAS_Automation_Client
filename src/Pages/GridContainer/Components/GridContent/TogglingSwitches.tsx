import React, { useState } from 'react';

const Switcher5 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div className='h-5 w-10 rounded-full bg-[#fefefe] shadow-inner'></div>
          <div
            className={`dot shadow-switch-1 absolute top-[-4px] flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 ease-in-out ${
              isChecked ? 'translate-x-4' : 'translate-x-0'
            }`}
          >
            <span
              className={`active h-4 w-4 rounded-full ${
                isChecked ? 'bg-[#000000]' : 'bg-[#10B981]'
              }`}
            ></span>
          </div>
        </div>
      </label>
    </>
  );
};

export default Switcher5;
