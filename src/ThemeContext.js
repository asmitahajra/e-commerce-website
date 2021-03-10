import React from 'react';

export const Theme = {
  light: {
    backgroundColor: 'white',
    color: 'black',
  },

  dark: {
    backgroundColor: 'black',
    color: 'white',
  },

};

export const ThemeContext = React.createContext(Theme.light);
