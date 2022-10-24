import xIconOutline from '../../assets/svg/icon-x-outline.svg';
import oIconOutline from '../../assets/svg/icon-o-outline.svg';
import xIcon from '../../assets/svg/icon-x.svg';
import oIcon from '../../assets/svg/icon-o.svg';

type Props = {};

const Field = (props: Props) => {
  const x = <img draggable='false' src={xIcon} alt='icon' />;
  const o = <img draggable='false' src={oIcon} alt='icon' />;
  const xOut = <img draggable='false' src={xIconOutline} alt='icon' />;
  const oOut = <img draggable='false' src={oIconOutline} alt='icon' />;

  return (
    <div className='w-[96px] h-[96px] flex justify-center items-center bg-greenLight col-span-1 rounded-lg shadow-darkest px-[28px] py-[24px] md:h-[140px] md:w-[140px]'>
      {x}
    </div>
  );
};

export default Field;
