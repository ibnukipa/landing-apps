/**
 * @format
 * @flow strict-local
 */

// Paddings and Margins
const Spaces = {
  ultraSmall: 3,
  extraSmall: 5,
  smaller: 8,
  small: 10,
  regular: 15,
  large: 20,
  larger: 22,
  extraLarge: 25,
  ultraLarge: 27,
};

export type SpaceTypes = $Keys<typeof Spaces>;
export default Spaces;
