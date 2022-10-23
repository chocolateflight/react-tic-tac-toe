import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';
import Settings from './components/Settings';

function App() {
  const menu = false; {/* Change later */}
  const selected = "o"; {/* Change later */}
  return (
    <div className='bg-greenDark flex flex-col justify-center items-center h-screen text-greyDark p-[24px]'>
      <div className='w-[328px] md:w-[470px]'>
        <Settings menu={menu} />
        <Menu menu={menu} selected={selected}/>
        <Game menu={menu} />
      </div>
    </div>
  );
}

export default App;
