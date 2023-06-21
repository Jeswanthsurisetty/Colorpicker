import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker({ colors }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      <button
        className="pick-button"
        onClick={toggleColorList}
        style={{ backgroundColor: selectedColor }}
      >
        Pick a color
      </button>
      {isOpen && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelection(color)}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ColorPicker;
