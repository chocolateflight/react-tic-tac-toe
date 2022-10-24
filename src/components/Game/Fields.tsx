import React from 'react';
import xIconOutline from '../../assets/svg/icon-x-outline.svg';
import oIconOutline from '../../assets/svg/icon-o-outline.svg';
import xIcon from '../../assets/svg/icon-x.svg';
import oIcon from '../../assets/svg/icon-o.svg';

const x = `<img draggable='false' className="select-none pointer-events-none" src=${xIcon} alt='icon' />`;
const o = `<img draggable='false' className="select-none pointer-events-none" src=${oIcon} alt='icon' />`;
const xOut = `<img id="outImg" draggable='false' className="select-none pointer-events-none" src=${xIconOutline} alt='icon' />`;
const oOut = `<img id="outImg" draggable='false' className="select-none pointer-events-none" src=${oIconOutline} alt='icon' />`;

const Fragment = (React as any).Fragment;

type Props = {
  currentPlayer: string;
  dataString: Array<string>;
  updateData: (A:Array<string>)=>void;
};

const Fields = (props: Props): JSX.Element => {
  let data = props.dataString;

  const onClick = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    if (data[+target.id] !== 'x' && data[+target.id] !== 'o') {
      data[+target.id] = props.currentPlayer;
      target.innerHTML = `${props.currentPlayer === 'x' ? x : o}`;
      props.updateData(data);
    }
  };

  const onMouseEnter = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (data[+target.id] !== 'x' && data[+target.id] !== 'o') {
      target.innerHTML = `${props.currentPlayer === 'x' ? xOut : oOut}`;
    }
  };

  const onMouseLeave = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (data[+target.id] !== 'x' && data[+target.id] !== 'o') {
      target.innerHTML = '';
    }
  };

  const ids: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  return (
    <>
      {ids.map((id) => {
        return (
          <div
            id={id}
            key={id}
            className='inputfield w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          ></div>
        );
      })}
    </>
  );
};

export default Fields;
