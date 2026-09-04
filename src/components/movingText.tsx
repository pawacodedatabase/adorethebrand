import React from 'react';

const MovingText: React.FC = () => {
  return (
    <div className="overflow-hidden w-full bg-[#000] p-2">
      <div className="whitespace-nowrap animate-marquee text-sm  text-center text-[#ffffff]">
      <span className='text-[#ff0000] font-semibold'> Red Oak</span>- <span className='text-[#fff] font-thin'>Raised Right. Tastes Better.</span>
      </div>
    </div>
  );
};

export default MovingText;
