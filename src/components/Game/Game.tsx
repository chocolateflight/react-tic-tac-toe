import React, { useState } from 'react';
import Fields from './Fields';
import Stats from './Stats';

const Fragment = (React as any).Fragment;

type Props = {
  menu: boolean;
};

const Game = (props: Props) => {
  const [currentPlayer, setCurrentPlayer] = useState("x")



  return (
    <Fragment>
      <div
        id='game-container'
        className={`${
          !props.menu ? '' : 'hidden'
        } grid grid-cols-sm-user grid-rows-3 w-[full] gap-x-[20px] gap-y-[24px] md:grid-cols-md-user`}
      >
        <Fields currentPlayer={currentPlayer}  />
      </div>
      <Stats menu={props.menu} />
    </Fragment>
  );
};

export default Game;
