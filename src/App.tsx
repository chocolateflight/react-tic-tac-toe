import { useEffect, useState } from 'react';
import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';
import ModalEnd from './components/Modals/ModalEnd';
import ModalReset from './components/Modals/ModalReset';
import Settings from './components/Settings';

function App() {
  const [winner, setWinner] = useState<string>(""); // x or o
  const [currentPlayer, setCurrentPlayer] = useState<string>('x'); // x or o
  const [gameStarted, setGameStarted] = useState<boolean>(false); // true or false
  const [gameMode, setGameMode] = useState<string>('pvp'); // pvp or cpu
  const [showRestartModal, setShowRestartModal] = useState<boolean>(false); // true false
  const [showEndModal, setShowEndModal] = useState<boolean>(true); // true false
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

  const openEndModal = () => {
    setShowEndModal(true)
  }

  const closeEndModal = () => {
    setShowEndModal(false)
  }

  const restartHandler = () => {
    const divs = document.getElementsByClassName('inputfield');
    for (let i = 0; i < divs.length; i++) {
      divs[i].innerHTML = '';
    }
    setData(['', '', '', '', '', '', '', '', '']);
    setShowRestartModal(false);
    setShowEndModal(false)
    setGameStarted(false)
    setWinner("")
    setGameMode("")
  };

  const updateWinner = (enteredWinner: string) => {
    setWinner(enteredWinner);
  };

  const updatePlayer = (enteredPlayer: string) => {
    setCurrentPlayer(enteredPlayer);
  };

  const updateGameStarted = () => {
    setGameStarted(true);
  };

  const updateGameMode = (enteredGameMode: string) => {
    setGameMode(enteredGameMode);
  };

  useEffect(() => {
    if (winner === "x") {
      openEndModal()
    } else if (winner === "o") {
      openEndModal()
    } else if (winner === "tie") {
      openEndModal()
    }
  }, [winner])

  return (
    <div className='bg-greenDark flex flex-col justify-center items-center h-screen text-greyDark'>
      <ModalEnd modal={showEndModal} winner={winner} restartGame={restartHandler}/>
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
          gameStart={gameStarted}
          gameMode={gameMode}
          updateWinner={updateWinner}
          currentPlayer={currentPlayer}
          updatePlayer={updatePlayer}
          updateData={updateDataHandler}
          currentData={data}
        />
      </div>
    </div>
  );
}

export default App;
