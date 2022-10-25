import React, { useEffect, useState } from 'react';

const Fragment = (React as any).Fragment;

type Props = {
  menu: boolean;
  gameMode: string;
  roundWinner: string;
  playerOne: string;
};

const Stats = (props: Props) => {
  const [winPlayer1, setWinPlayer1] = useState<number>(0);
  const [winPlayer2, setWinPlayer2] = useState<number>(0);
  const [winTies, setWinTies] = useState<number>(0);

  useEffect(() => {
    if (props.roundWinner === 'x') {
      setWinPlayer1(winPlayer1 + 1);
    } else if (props.roundWinner === 'o') {
      setWinPlayer2(winPlayer2 + 1);
    } else if (props.roundWinner === 'tie') {
      setWinTies(winTies + 1);
    } else if (props.roundWinner === 'end') {
      setWinPlayer1(0);
      setWinPlayer2(0);
      setWinTies(0);
    }
  }, [props.roundWinner]);

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
          <span className='text-greenDark'>{`X (${
            props.playerOne === 'x' ? 'Player 1' : 'Player 2'
          })`}</span>{' '}
          {/* Make dynamic */}
          <span className='text-greenDark text-s'>{winPlayer1}</span> {/*Make dynamic*/}
        </div>
        <div
          id='ties'
          className='w-[96px] h-full rounded-lg flex flex-col justify-center items-center bg-greyDark md:w-[140px]'
        >
          <span className='text-greenDark'>Ties</span>
          <span className='text-greenDark text-s'>{winTies}</span> {/*Make dynamic*/}
        </div>
        <div
          id='cpu-win'
          className='w-[96px] h-full rounded-lg flex flex-col justify-center items-center bg-orangeDark md:w-[140px]'
        >
          <span className='text-greenDark'>{`O (${
            props.playerOne === 'o' ? 'Player 1' : 'Player 2'
          })`}</span>
          <span className='text-greenDark text-s'>{winPlayer2}</span> {/*Make dynamic*/}
        </div>
      </div>
    </Fragment>
  );
};

export default Stats;
