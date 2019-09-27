class Cell {
  id: string;
  row: number;
  column: number;
  opened: boolean;
  flagged: boolean;
  mined: boolean;
  neighborMineCount: number;
  constructor(
    row: number,
    column: number,
    opened: boolean,
    mined: boolean,
    neighborMineCount: number
  ) {
    this.row = row;
    this.column = column;
    this.id = row + "" + column;
    this.opened = opened;
    this.mined = mined;
    this.neighborMineCount = neighborMineCount;
  }
}
export { Cell };
