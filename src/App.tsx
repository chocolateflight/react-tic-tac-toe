import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';
import ModalEnd from './components/Modals/ModalEnd';
import ModalReset from './components/Modals/ModalReset';
import Settings from './components/Settings';

function App() {

  const menu = false; {/* Change later */}
  const selected = "o"; {/* Change later */}
  const modal = ""; {/* Change later */}

  return (
    <div className='bg-greenDark flex flex-col justify-center items-center h-screen text-greyDark'>
      <ModalEnd modal={modal}/>
      <ModalReset modal={modal} />
      <div className='w-[328px] md:w-[470px]'>
        <Settings menu={menu} />
        <Menu menu={menu} selected={selected}/>
        <Game menu={menu} />
      </div>
    </div>
  );
}

export default App;
