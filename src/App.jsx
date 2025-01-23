import { useState } from 'react';
import Grid from './components/Grid';
import './App.css';

const App = () => {
  const [rows, setRows] = useState(15);
  const [cols, setCols] = useState(20);
  const [speed, setSpeed] = useState(200);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'white', margin: '20px 0' }}>
        Wave Animation
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <label style={{ color: 'white', marginRight: '10px' }}>
          Rows:
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            style={{ margin: '0 10px' }}
          />
        </label>
        <label style={{ color: 'white', marginRight: '10px' }}>
          Columns:
          <input
            type="number"
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
            style={{ margin: '0 10px' }}
          />
        </label>
        <label style={{ color: 'white' }}>
          Speed (ms):
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            style={{ margin: '0 10px' }}
          />
        </label>
      </div>
      <Grid rows={rows} cols={cols} speed={speed} />
    </div>
  );
};

export default App;
