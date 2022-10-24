import React from 'react';
import Field from './Field';
import Stats from './Stats';

const Fragment = (React as any).Fragment;

type Props = {
  menu: boolean;
};

const Game = (props: Props) => {
  return (
    <Fragment>
      <div
        id='game-container'
        className={`${
          !props.menu ? '' : 'hidden'
        } grid grid-cols-sm-user grid-rows-3 w-[full] gap-x-[20px] gap-y-[24px] md:grid-cols-md-user`}
      >
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
      </div>
      <Stats menu={props.menu} />
    </Fragment>
  );
};

export default Game;
