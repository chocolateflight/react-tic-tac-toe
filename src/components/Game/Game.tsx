import React, { useEffect, useState } from 'react';
import Fields from './Fields';
import Stats from './Stats';

const Fragment = (React as any).Fragment;

type Props = {
  gameStart: boolean;
  gameMode: string;
  updateWinner: (A: string) => void;
  currentPlayer: string;
  updatePlayer: (A: string) => void;
  updateData: (A: Array<string>) => void;
  currentData: Array<string>;
};

const Game = (props: Props) => {
  const data = props.currentData;

  const updateData = (enteredData: Array<string>) => {
    props.updateData([...enteredData]);
  };

  const updateWinner = (enteredWinner: string) => {
    props.updateWinner(enteredWinner);
  };

  const updatePlayer = (enteredPlayer: string) => {
    props.updatePlayer(enteredPlayer);
  };

  // while no winner - start, then round end modal

  useEffect(() => {
    if (data[0] === data[1] && data[0] === data[2] && data[0] !== '') {
      updateWinner(data[0]);
    } else if (data[3] === data[4] && data[3] === data[5] && data[3] !== '') {
      updateWinner(data[3]);
    } else if (data[6] === data[7] && data[6] === data[8] && data[6] !== '') {
      updateWinner(data[6]);
    } else if (data[0] === data[3] && data[0] === data[6] && data[0] !== '') {
      updateWinner(data[0]);
    } else if (data[1] === data[4] && data[1] === data[7] && data[1] !== '') {
      updateWinner(data[1]);
    } else if (data[2] === data[5] && data[2] === data[8] && data[2] !== '') {
      updateWinner(data[2]);
    } else if (data[0] === data[4] && data[0] === data[8] && data[0] !== '') {
      updateWinner(data[0]);
    } else if (data[2] === data[4] && data[2] === data[6] && data[2] !== '') {
      updateWinner(data[2]);
    } else if (!data.includes('')) {
      updateWinner('tie');
    }
  });

  return (
    <Fragment>
      <div
        id='game-container'
        className={`${
          !props.gameStart ? 'hidden' : ''
        } grid grid-cols-sm-user grid-rows-3 w-[full] gap-x-[20px] gap-y-[24px] md:grid-cols-md-user`}
      >
        <Fields
          currentPlayer={props.currentPlayer}
          dataString={data}
          updateData={updateData}
          updatePlayer={updatePlayer}
          gameMode={props.gameMode}
        />
      </div>
      <Stats menu={props.gameStart} gameMode={props.gameMode} />
    </Fragment>
  );
};

export default Game;
