/**
 * @format
 * @flow strict-local
 */

// Fonts and Icons
const Sizes = {
  ultraSmall: 2,
  extraSmall: 8,
  smaller: 10,
  small: 12,
  regular: 14,
  large: 16,
  larger: 18,
  extraLarge: 20,
  ultraLarge: 24,
};

export type SizeTypes = $Keys<typeof Sizes>;
export default Sizes;
