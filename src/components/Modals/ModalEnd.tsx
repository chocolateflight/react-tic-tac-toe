import xIcon from '../../assets/svg/icon-x.svg';
import oIcon from '../../assets/svg/icon-o.svg';

type Props = {
  modal: boolean;
  winner: string;
  restartGame: () => void;
  nextRound: () => void;
};

const ModalEnd = (props: Props) => {
  const x = <img draggable='false' src={xIcon} alt='icon' className='h-[28px]' />;
  const o = <img draggable='false' src={oIcon} alt='icon' className='h-[28px]' />;

  const quitHandler = () => {
    props.restartGame();
  };

  const nextRoundHandler = () => {
    props.nextRound();
  };

  return (
    <div
      className={`${
        props.modal ? '' : 'hidden'
      } select-none absolute w-full h-full backdrop-brightness-50 flex justify-center items-center`}
    >
      <div className='bg-greenLight h-[228px] w-full flex flex-col justify-around items-center py-[44px] md:h-[266px]'>
        <span id='win-message'>
          {props.winner === 'tie' ? "IT'S A TIE" : 'WE HAVE A WINNER'}
        </span>
        {/* Make dynamic */}
        <div id='takes-round' className='flex items-center gap-x-2'>
          {props.winner === 'x' ? x : props.winner === 'o' ? o : ''}
          <span
            className={`text-m md:text-l ${
              props.winner === 'x'
                ? 'text-blueDark'
                : props.winner === 'o'
                ? 'text-orangeDark'
                : ''
            }`}
          >
            {props.winner === 'tie' ? 'Nobody wins or looses!' : 'TAKES THE ROUND'}
          </span>
          {/* Change color when dynamic */}
        </div>
        <div
          id='buttons'
          className='h-[48px] flex justify-center items-center gap-x-[16px]'
        >
          <div
            id='quit'
            className='h-full p-[16px] rounded-lg text-greenDark bg-greyDark shadow-lightest hover:bg-greyLight'
            onClick={quitHandler}
          >
            <span>QUIT</span>
          </div>
          <div
            id='next-round'
            className='h-full p-[16px] rounded-lg text-greenDark bg-orangeDark shadow-orange hover:bg-orangeLight'
            onClick={nextRoundHandler}
          >
            <span>NEXT ROUND INOP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEnd;
