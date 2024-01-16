import ReactPlayer from 'react-player/youtube';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import './App.css';

function App() {
  const handle = useFullScreenHandle();
  return (
    <>
      <FullScreen handle={handle}>
        <div className='overlay'>
          <button onClick={handle.enter}>Enter</button>
          <button onClick={handle.exit}>Exit</button>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=u9vK5utTcxE=1'}
            playing
            muted
            controls
            width={'100vw'}
            height={'100vh'}
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </FullScreen>
    </>
  );
}

export default App;
