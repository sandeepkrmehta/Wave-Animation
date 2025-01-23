import { useState } from 'react';
import Grid from './components/Grid';
import './App.css';

const App = () => {
  const [rows, setRows] = useState(15);
  const [cols, setCols] = useState(20);
  const [speed, setSpeed] = useState(200);

  return (
    <div>
      <h1 className="text-center text-white my-5">Wave Animation</h1>

      <div className="flex flex-wrap justify-center gap-6 mb-8 p-4">
        <label className="text-white flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          Rows:
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            className="mt-2 sm:mt-0 sm:ml-3 p-3 rounded-md bg-gray-800 text-white border-none"
          />
        </label>

        <label className="text-white flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          Columns:
          <input
            type="number"
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
            className="mt-2 sm:mt-0 sm:ml-3 p-3 rounded-md bg-gray-800 text-white border-none"
          />
        </label>

        <label className="text-white flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          Speed (ms):
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="mt-2 sm:mt-0 sm:ml-3 p-3 rounded-md bg-gray-800 text-white border-none"
          />
        </label>
      </div>

      <Grid rows={rows} cols={cols} speed={speed} />
    </div>
  );
};

export default App;
