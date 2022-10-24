import React from 'react';

const Fragment = (React as any).Fragment;

type Props = {
  menu: boolean;
  gameMode: string;
};

const Stats = (props: Props) => {
  return (
    <Fragment>
      <div
        id='stats'
        className={`${
          props.menu ? '' : 'hidden'
        } select-none grid grid-cols-sm-user gap-x-[20px] h-[64px] w-full mb-[48px] mt-[20px] md:h-[72px] md:grid-cols-md-user`}
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

export default Stats;
