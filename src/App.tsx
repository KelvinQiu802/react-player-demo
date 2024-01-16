import ReactPlayer from 'react-player/youtube';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import './App.css';

function App() {
  const handle = useFullScreenHandle();
  return (
    <>
      <button onClick={handle.enter} style={{ position: 'absolute' }}>
        Enter
      </button>
      <FullScreen handle={handle}>
        <div style={{ overflow: 'hidden' }}>
          <button
            onClick={handle.exit}
            style={{ position: 'absolute', top: 500, left: 500 }}
          >
            Exit
          </button>
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
