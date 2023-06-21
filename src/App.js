import React from 'react';
import ColorPicker from './ColorPicker';

function App() {
  const colors = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
    '#00FFFF',
    '#FFA500',
    '#800080',
    '#008000',
    '#000080',
    '#FFC0CB',
    '#800000',
    '#008080',
    '#FFD700',
    '#A52A2A',
    '#FF4500',
    '#696969',
    '#FF8C00',
    '#8B008B',
    '#808080',
  ];
  
  return (
    <div className="app">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
