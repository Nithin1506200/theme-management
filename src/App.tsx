import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import './App.css';
// import Dummy from '@/components/generic/dummy/DummyComponent';
import './css/index.scss';
import { Theme, allThemes } from './css/themes';

function App() {
  const [theme, setTheme] = useState<Theme>('default');

  return (
    <div className={'App ' + theme}>
      {allThemes.map((e) => (
        <button
          key={e}
          className={e}
          onClick={() => {
            setTheme(e);
          }}>
          {e} theme
        </button>
      ))}
      <h1>hello world</h1>
      <button> this is button </button>
      <div
        style={{
          backgroundColor: 'var(--secondary-background-col)',
          border: 'var(--primary-border)',
          borderRadius: 'var(--border-radius-1)'
        }}>
        <h1>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit
          accusantium vel iste? Ad, ex veniam commodi beatae magnam eligendi nulla? Maxime ad
          incidunt fuga dolore aut deleniti optio id.
        </h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium quidem dolorum
          repudiandae nulla reiciendis eos accusamus, voluptatem et perspiciatis itaque a possimus
          quis ullam numquam harum dignissimos quaerat consectetur.
        </h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores, sunt asperiores,
          repellat officiis, similique atque laboriosam necessitatibus at veniam recusandae officia!
          Optio unde quidem aperiam debitis deserunt? Hic, placeat!
        </h3>
      </div>
    </div>
  );
}

export default App;
