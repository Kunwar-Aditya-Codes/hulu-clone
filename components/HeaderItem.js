import React from 'react';

const HeaderItem = ({ Icon, title }) => {
  return (
    <div className='flex flex-col group items-center cursor-pointer width-12 sm:w-20 hover:text-white '>
      <Icon className='group-hover:animate-bounce h-8 mb-1 ' />
      <p className='opacity-0  group-hover:opacity-100 tracking-widest'>
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
