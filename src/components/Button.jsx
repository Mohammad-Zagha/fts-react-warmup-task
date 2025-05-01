import React from 'react';
import './Button.css';

export const Button = ({ text, variant = 'primary' }) => {
  return (
    <button className={`button ${variant}`}>
      {text}
    </button>
  );
};