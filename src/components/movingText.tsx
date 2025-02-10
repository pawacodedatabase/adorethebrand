import React from 'react';

const MovingText: React.FC = () => {
  return (
    <div className="overflow-hidden w-full bg-[#000] p-2">
      <div className="whitespace-nowrap animate-marquee text-sm  text-center text-[#ffffff]">
       Follow us on<span className='text-[#ff0000] font-semibold'> on Tiktok </span>- <span className='text-[#ff0000] font-semibold'>@adore_thebrand</span>
      </div>
    </div>
  );
};

export default MovingText;
