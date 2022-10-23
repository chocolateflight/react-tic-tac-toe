import xIcon from '../../assets/svg/icon-x.svg';
import oIcon from '../../assets/svg/icon-o.svg';

type Props = {
  modal: string;
};

const ModalEnd = (props: Props) => {
  const x = <img src={xIcon} alt='icon' className='h-[28px]' />;
  const o = <img src={oIcon} alt='icon' className='h-[28px]' />;

  return (
    <div
      className={`${
        props.modal === 'end' ? '' : 'hidden'
      } absolute w-full h-full backdrop-brightness-50 flex justify-center items-center`}
    >
      <div className='bg-greenLight h-[228px] w-full flex flex-col justify-around items-center py-[44px] md:h-[266px]'>
        <span id='win-message'>PLAYER 2 WINS!</span> {/* Make dynamic */}
        <div id='takes-round' className='flex items-center gap-x-2'>
          {x}
          <span className='text-m md:text-l'>TAKES THE ROUND</span>{' '}
          {/* Change color when dynamic */}
        </div>
        <div
          id='buttons'
          className='h-[48px] flex justify-center items-center gap-x-[16px]'
        >
          <div
            id='quit'
            className='h-full p-[16px] rounded-lg text-greenDark bg-greyDark shadow-lightest hover:bg-greyLight'
          >
            <span>QUIT</span>
          </div>
          <div
            id='next-round'
            className='h-full p-[16px] rounded-lg text-greenDark bg-orangeDark shadow-orange hover:bg-orangeLight'
          >
            <span>NEXT ROUND</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEnd;
