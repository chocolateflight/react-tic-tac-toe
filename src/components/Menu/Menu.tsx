import React, { useState } from 'react';
import oIconGrey from '../../assets/svg/icon-o-grey.svg';
import xIconGrey from '../../assets/svg/icon-x-grey.svg';
import oIconGreen from '../../assets/svg/icon-o-green.svg';
import xIconGreen from '../../assets/svg/icon-x-green.svg';

type Props = {
  menu: boolean;
  updatePlayer: (A: string) => void;
  startGame: () => void;
  setGameMode: (A: string) => void;
};

const Menu = (props: Props) => {
  const [selectedPlayer, setSelectedPlayer] = useState('x');

  const playerSelectionHandler = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    props.updatePlayer(target.id);
    setSelectedPlayer(target.id);
  };

  const newPVPGameHandler = () => {
    props.setGameMode('pvp');
    props.startGame();
  };

  const newCPUGameHandler = () => {
    return;
  };

  const x = (
    <img
      id='x'
      src={selectedPlayer === 'o' ? xIconGrey : xIconGreen}
      draggable='false'
      alt='icon'
      className={`${
        selectedPlayer === 'o' ? '' : 'bg-greyDark w-full object-contain rounded-lg'
      } h-[56px] self-center justify-self-center py-[12px]`}
      onClick={playerSelectionHandler}
    />
  );
  const o = (
    <img
      id='o'
      src={selectedPlayer === 'x' ? oIconGrey : oIconGreen}
      draggable='false'
      alt='icon'
      className={`${
        selectedPlayer === 'x' ? '' : 'bg-greyDark w-full object-contain rounded-lg'
      } h-[56px] self-center justify-self-center py-[12px]`}
      onClick={playerSelectionHandler}
    />
  );

  return (
    <div className={`${props.menu ? 'hidden' : ''} md:text-xs`}>
      <div
        id='pick-player'
        className={`flex flex-col gap-y-[24px] justify-center items-center h-[192px] w-full bg-greenLight rounded-lg shadow-darkest px-[24px] mb-[32px]`}
      >
        <span className='select-none'>PICK PLAYER 1'S MARK</span>
        <div
          id='selection'
          className='h-[72px] grid grid-cols-2 bg-greenDark w-full rounded-lg px-[12px]'
        >
          {x}
          {o}
        </div>
        <span className='select-none'>REMEMBER: X GOES FIRST</span>
      </div>
      {/* CPU MIGHT BE ADDED LATER */}
      {/* <div
        id='new-game-vs-CPU'
        className='select-none w-[full] h-[56px] bg-orangeDark rounded-xl flex justify-center items-center text-greenDark shadow-orange hover:bg-orangeLight'
        onClick={newCPUGameHandler}
      >
        <span className='uppercase'>New Game (VS CPU) INOP</span>
      </div> */}
      <div
        id='new-game-vs-player'
        className='select-none w-[full] h-[56px] bg-blueDark rounded-xl flex justify-center items-center text-greenDark shadow-blue mt-[16px] hover:bg-blueLight'
        onClick={newPVPGameHandler}
      >
        <span className='uppercase'>New Game (VS Player)</span>
      </div>
    </div>
  );
};

export default Menu;
