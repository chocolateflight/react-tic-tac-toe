import oIconGrey from '../../assets/svg/icon-o-grey.svg';
import xIconGrey from '../../assets/svg/icon-x-grey.svg';
import oIconGreen from '../../assets/svg/icon-o-green.svg';
import xIconGreen from '../../assets/svg/icon-x-green.svg';

type Props = {
  menu: boolean;
  selected: string;
};

const Menu = (props: Props) => {
  const x = (
    <img
      src={props.selected === 'x' ? xIconGrey : xIconGreen}
      draggable='false'
      alt='icon'
      className={`${
        props.selected === 'x' ? '' : 'bg-greyDark w-full object-contain rounded-lg'
      } h-[56px] self-center justify-self-center py-[12px]`}
    />
  );
  const o = (
    <img
      src={props.selected === 'o' ? oIconGrey : oIconGreen}
      draggable='false'
      alt='icon'
      className={`${
        props.selected === 'o' ? '' : 'bg-greyDark w-full object-contain rounded-lg'
      } h-[56px] self-center justify-self-center py-[12px]`}
    />
  );

  return (
    <div className={`${props.menu ? '' : 'hidden'} md:text-xs`}>
      <div
        id='pick-player'
        className={`flex flex-col gap-y-[24px] justify-center items-center h-[192px] w-full bg-greenLight rounded-lg shadow-darkest px-[24px] mb-[32px]`}
      >
        <span>PICK PLAYER 1'S MARK</span>
        <div
          id='selection'
          className='h-[72px] grid grid-cols-2 bg-greenDark w-full rounded-lg px-[12px]'
        >
          {x}
          {o}
        </div>
        <span>REMEMBER: X GOES FIRST</span>
      </div>
      <div
        id='new-game-vs-player'
        className='w-[full] h-[56px] bg-orangeDark rounded-xl flex justify-center items-center text-greenDark shadow-orange hover:bg-orangeLight'
      >
        <span className='uppercase'>New Game (VS CPU)</span>
      </div>
      <div
        id='new-game-vs-cpu'
        className='w-[full] h-[56px] bg-blueDark rounded-xl flex justify-center items-center text-greenDark shadow-blue mt-[16px] hover:bg-blueLight'
      >
        <span className='uppercase'>New Game (VS Player)</span>
      </div>
    </div>
  );
};

export default Menu;
