import oIcon from '../assets/svg/icon-o-grey.svg';
import xIcon from '../assets/svg/icon-x-grey.svg';
import restartIcon from '../assets/svg/icon-restart.svg';

type Props = {
  menu: boolean;
  restart: () => void;
};

const Settings = (props: Props) => {
  const x = <img draggable="false" src={xIcon} alt='icon' />;
  const o = <img draggable="false" src={oIcon} alt='icon' />;
  const restart = <img draggable="false" src={restartIcon} alt='icon' className='h-[15px] w-auto' />;

  const restartHandler = () => {
    props.restart()
  }

  return (
    <div
      className={`grid ${
        props.menu ? 'grid-cols-sm-user md:grid-cols-md-user' : 'grid-cols-menu md:grid-cols-menu'
      } grid-cols-sm-user gap-x-[20px] h-[40px] w-full mb-[64px] md:grid-cols-md-user md:h-[48px]`}
    >
      <svg
        width='72'
        height='32'
        xmlns='http://www.w3.org/2000/svg'
        className={`${
          props.menu ? '' : 'justify-self-center'
        } col-span-1 col-start-1 col-end-2 self-center`}
      >
        <g fill='none' fillRule='evenodd'>
          <path
            d='M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z'
            fill='#31C3BD'
          />
          <path
            d='M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z'
            fill='#F2B137'
            fillRule='nonzero'
          />
        </g>
      </svg>
      <div
        id='turn-indicator'
        className={`${
          props.menu ? '' : 'hidden'
        } select-none w-[96px] h-full flex items-center justify-center space-x-2 px-[16px] bg-greenLight rounded-lg shadow-darkest col-span-1 md:w-[140px]`}
      >
        <div id='icon' className='w-[16px] h-auto fill-greyDark'>
          {x} {/* make responsive */}
        </div>
        <span>TURN</span>
      </div>
      <div
        id='restart'
        className={`${
          props.menu ? '' : 'hidden'
        } w-[40px] h-full bg-greyDark rounded-lg shadow-lightest flex items-center justify-center col-span-1 justify-self-end hover:bg-greyLight md:w-[48px]`}
        onClick={restartHandler}
      >
        {restart}
      </div>
    </div>
  );
};

export default Settings;
