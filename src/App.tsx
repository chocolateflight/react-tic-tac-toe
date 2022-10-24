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

  const updateWinner = (enteredWinner:string) => {
    setWinner(enteredWinner)
  }

  const updatePlayer = (enteredPlayer:string) => {
    setCurrentPlayer(enteredPlayer)
  }

  const updateGameStarted = () => {
    setGameStarted(!gameStarted)
  }

  const updateGameMode = (enteredGameMode:string) => {
    setGameMode(enteredGameMode)
  }

  const menu = gameStarted; {/* Change later */}
  const modal = ""; {/* Change later */}

  return (
    <div className='bg-greenDark flex flex-col justify-center items-center h-screen text-greyDark'>
      <ModalEnd modal={modal}/>
      <ModalReset modal={modal} />
      <div className='w-[328px] md:w-[470px]'>
        <Settings menu={menu} />
        <Menu menu={menu} updatePlayer={updatePlayer} startGame={updateGameStarted} setGameMode={updateGameMode}/>
        <Game menu={menu} updateWinner={updateWinner} currentPlayer={currentPlayer} />
      </div>
    </div>
  );
}

export default App;
