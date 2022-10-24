import { useState } from 'react';
import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';
import ModalEnd from './components/Modals/ModalEnd';
import ModalReset from './components/Modals/ModalReset';
import Settings from './components/Settings';

function App() {
  const [winner, setWinner] = useState<string>(); // x or o
  const [currentPlayer, setCurrentPlayer] = useState<string>('x'); // x or o
  const [gameStarted, setGameStarted] = useState<boolean>(false); // true or false
  const [gameMode, setGameMode] = useState<string>('pvp'); // pvp or cpu
  const [showRestartModal, setShowRestartModal] = useState<boolean>(false); // true false
  const [showEndModal, setShowEndModal] = useState<boolean>(false); // true false
  const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);

  const updateDataHandler = (enteredData: Array<string>) => {
    setData([...enteredData]);
  };

  const openRestartModal = () => {
    setShowRestartModal(true);
  };

  const closeRestartModal = () => {
    setShowRestartModal(false);
  };

  const restartHandler = () => {
    const divs = document.getElementsByClassName('inputfield');
    for (let i = 0; i < divs.length; i++) {
      divs[i].innerHTML = '';
    }
    setData(['', '', '', '', '', '', '', '', '']);
    setShowRestartModal(false);
  };

  const updateWinner = (enteredWinner: string) => {
    setWinner(enteredWinner);
  };

  const updatePlayer = (enteredPlayer: string) => {
    setCurrentPlayer(enteredPlayer);
  };

  const updateGameStarted = () => {
    setGameStarted(!gameStarted);
  };

  const updateGameMode = (enteredGameMode: string) => {
    setGameMode(enteredGameMode);
  };

  return (
    <div className='bg-greenDark flex flex-col justify-center items-center h-screen text-greyDark'>
      <ModalEnd modal={showEndModal} />
      <ModalReset
        modal={showRestartModal}
        closeModal={closeRestartModal}
        restartGame={restartHandler}
      />
      <div className='w-[328px] md:w-[470px]'>
        <Settings menu={gameStarted} restart={openRestartModal} />
        <Menu
          menu={gameStarted}
          updatePlayer={updatePlayer}
          startGame={updateGameStarted}
          setGameMode={updateGameMode}
        />
        <Game
          menu={gameStarted}
          updateWinner={updateWinner}
          currentPlayer={currentPlayer}
          updateData={updateDataHandler}
          currentData={data}
        />
      </div>
    </div>
  );
}

export default App;
