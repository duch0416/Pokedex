export enum Types {
  ELECTRIC = "electric",
  FIRE = "fire",
  GRASS = "grass",
  WATER = "water",
}

export enum Colors {
  YELLOW = "#ffce4b",
  RED = "	#fb6c6c",
  GREEN = "#48D0B0",
  BLUE = "#77bdfe",
  BLACK = "#000000",
}

export const ColorMap = new Map([
  [Types.ELECTRIC, Colors.YELLOW],
  [Types.FIRE, Colors.RED],
  [Types.GRASS, Colors.GREEN],
  [Types.WATER, Colors.BLUE],
]);
