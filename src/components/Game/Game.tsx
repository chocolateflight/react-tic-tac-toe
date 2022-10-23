import React from 'react';
import xIconOutline from '../../assets/svg/icon-x-outline.svg';
import oIconOutline from '../../assets/svg/icon-o-outline.svg';
import xIcon from '../../assets/svg/icon-x.svg';
import oIcon from '../../assets/svg/icon-o.svg';

const Fragment = (React as any).Fragment;

const x = <img src={xIcon} alt='icon' />;
const o = <img src={oIcon} alt='icon' />;
const xOut = <img src={xIconOutline} alt='icon' />;
const oOut = <img src={oIconOutline} alt='icon' />;

const Game = () => {
  return (
    <Fragment>
      <div
        id='game-container'
        className='grid grid-cols-sm-user grid-rows-3 w-[full] gap-x-[20px] gap-y-[24px] md:grid-cols-md-user'
      >
        <div className='w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'>
          {x}
        </div>
        <div className='w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'>
          {o}
        </div>
        <div className='w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'>
          {xOut}
        </div>
        <div className='w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'>
          {oOut}
        </div>
        <div className='w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'>
          {x}
        </div>
        <div className='w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'>
          {o}
        </div>
        <div className='w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'>
          {xOut}
        </div>
        <div className='w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'>
          {oOut}
        </div>
        <div className='w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'>
          {x}
        </div>
      </div>
      <div
        id='stats'
        className='grid grid-cols-sm-user gap-x-[20px] h-[64px] w-full mb-[48px] mt-[20px] md:h-[72px] md:grid-cols-md-user'
      >
        <div
          id='my-win'
          className='w-[96px] h-full rounded-lg flex flex-col justify-center items-center bg-blueDark md:w-[140px]'
        >
          <span className='text-greenDark'>You</span>
          <span className='text-greenDark text-s'>10</span> {/*Make dynamic*/}
        </div>
        <div
          id='ties'
          className='w-[96px] h-full rounded-lg flex flex-col justify-center items-center bg-greyDark md:w-[140px]'
        >
          <span className='text-greenDark'>Ties</span>
          <span className='text-greenDark text-s'>10</span> {/*Make dynamic*/}
        </div>
        <div
          id='cpu-win'
          className='w-[96px] h-full rounded-lg flex flex-col justify-center items-center bg-orangeDark md:w-[140px]'
        >
          <span className='text-greenDark'>CPU</span>
          <span className='text-greenDark text-s'>10</span> {/*Make dynamic*/}
        </div>
      </div>
    </Fragment>
  );
};

export default Game;
