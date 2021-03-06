/**
 * @format
 * @flow strict-local
 */

const Colors = {
  gray: '#f6f6f6',
  grayDimmed: 'rgba(246, 246, 246, .5)',
  blueGray5050: 'rgba(236, 239, 241, .5)',
  blueGray50: '#eceff1',
  blueGray100: '#cfd8dc',
  blueGray: '#b0bec5',
  blueGray300: '#90a4ae',
  blueGray400: '#78909c',
  blueGray500: '#607d8b',
  blueGray600: '#546e7a',
  blueGray700: '#455a64',
  white: '#ffffff',
  whiteDimmed: 'rgba(255,255,255, .25)',
  black: '#212121',
  purple: '#9c27b0',
  deppPurple: '#673ab7',
  orange: '#ff9800',
  orange900: '#e65100',
  deepOrange: '#ff5722',
  amber: '#ffc107',
  green: '#4caf50',
  red: '#f44336',
  indigo: '#3f51b5',
  indigo900: '#1a237e',
  deepPurple: '#5e35b1',
  blue: '#2196f3',
  teal: '#009688',
  brown: '#795548',
  transparent: 'transparent',

  primary: '#5b86e5',

  gradientPrimary: '#5b86e5',
  gradientSecondary: '#36d1dc',
  gradientSecondaryDimmed: 'rgba(54, 209, 220, .25)',
};

export type ColorTypes = $Keys<typeof Colors>;
export default Colors;
