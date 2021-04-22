import React from 'react';

import './App.css';
import Line from './charts/Line';
import VBar from './charts/VBar';
import HBar from './charts/HBar';
import Doughnut from './charts/Doughnut';

const App = () => {
  return (
    <div className='App'>
      <Line />
      {/* <VBar /> */}
      {/* <HBar /> */}
      {/* <Doughnut /> */}
    </div>
  );
};

export default App;
