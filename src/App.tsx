import ReactPlayer from 'react-player/youtube';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import './App.css';
import { useState } from 'react';

function App() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const handle = useFullScreenHandle();
  return (
    <>
      <FullScreen handle={handle}>
        <div className='overlay'>
          <div className='time'>21:45</div>
          <div style={{ position: 'absolute' }}>
            <button onClick={handle.enter}>Enter</button>
            <button onClick={handle.exit}>Exit</button>
            <button onClick={() => setPlaying((prev) => !prev)}>Play</button>
            <button onClick={() => setMuted((prev) => !prev)}>Mute</button>
          </div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=FslCeCp1GqM'}
            playing={playing}
            muted={muted}
            controls={false} // set to false
            width={'100vw'}
            height={'100vh'}
            config={{
              playerVars: {
                disablekb: 1,
                iv_load_policy: 3,
              },
            }}
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </FullScreen>
    </>
  );
}

export default App;
