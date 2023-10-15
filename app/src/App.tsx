import React from 'react';
import logo from './logo.svg';
import './App.css';

import CellViewer from './components/CellViewer';
import MarkerFilter from './components/MarkerFilter';
import UMAP from './components/UMAP';
import TSNE from './components/TSNE';

function App() {
  return (
    <div className='content'>
      <div className='main'>
        <CellViewer />
        <div className='stats'>
          <UMAP />
          <TSNE />
        </div>
      </div>

      <aside className='filters'>
        <MarkerFilter />
      </aside>
    </div>
  );
}

export default App;
