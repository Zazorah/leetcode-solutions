// Problem: Spreadsheet
// Difficulty: Medium
// Link: https://leetcode.com/problems/design-spreadsheet/description/?envType=daily-question&envId=2025-09-19

class Spreadsheet {
  private spreadsheetData: Map<number, Map<number, number>>;
  private coordsLookup: Map<string, [number, number]>;
  private columnLookup: Map<string, number> = new Map([
    ["A", 1],
    ["B", 2],
    ["C", 3],
    ["D", 4],
    ["E", 5],
    ["F", 6],
    ["G", 7],
    ["H", 8],
    ["I", 9],
    ["J", 10],
    ["K", 11],
    ["L", 12],
    ["M", 13],
    ["N", 14],
    ["O", 15],
    ["P", 16],
    ["Q", 17],
    ["R", 18],
    ["S", 19],
    ["T", 20],
    ["U", 21],
    ["V", 22],
    ["W", 23],
    ["X", 24],
    ["Y", 25],
    ["Z", 26],
  ]);

  constructor(rows: number) {
    this.spreadsheetData = new Map();
    this.coordsLookup = new Map();

    for (let i = 1; i <= rows; i++) {
      this.spreadsheetData.set(i, new Map());
    }
  }

  _cellToCoordinates(cell: string): [number, number] {
    if (this.coordsLookup.has(cell)) {
      return this.coordsLookup.get(cell)!;
    }

    const result: [number, number] = [0, 0];
    const split = [cell[0], cell.slice(1)];

    for (let i = 0; i < 2; i++) {
      if (this.columnLookup.has(split[i]!)) {
        result[i] = this.columnLookup.get(split[i]!)!;
        continue;
      }

      result[i] = parseInt(split[i]!);
    }

    this.coordsLookup.set(cell, result);
    return result;
  }

  setCell(cell: string, value: number): void {
    const coords = this._cellToCoordinates(cell); // 0 - Column. 1 - Row

    if (this.spreadsheetData.has(coords[1])) {
      const row = this.spreadsheetData.get(coords[1])!;

      row.set(coords[0]!, value);
    }
  }

  resetCell(cell: string): void {
    this.setCell(cell, 0);
  }

  _getCellValue(cell: string): number {
    // Try as number.
    if (!isNaN(Number(cell))) {
      return parseInt(cell);
    }

    // Try as cell.
    const coords = this._cellToCoordinates(cell); // 0 - Column. 1 - Row
    if (this.spreadsheetData.has(coords[1])) {
      const row = this.spreadsheetData.get(coords[1])!;

      if (row.has(coords[0])) {
        return row.get(coords[0])!;
      }
    }

    // Assume cell was empty and return 0.
    return 0;
  }

  getValue(formula: string): number {
    const split = formula.replace("=", "").split("+");
    const leftValue = this._getCellValue(split[0]!);
    const rightValue = this._getCellValue(split[1]!);

    return leftValue + rightValue;
  }
}

// Test cases
// const tester = new Spreadsheet(3);
// console.log(tester.getValue("=5+7")); // Expected: 12
// tester.setCell("A1", 10);
// console.log(tester.getValue("=A1+6")); // Expected: 16
// tester.setCell("B2", 15);
// console.log(tester.getValue("=A1+B2")); // Expected: 25
// tester.resetCell("A1");
// console.log(tester.getValue("=A1+B2")); // Expected: 15

// console.log("---");

const tester2 = new Spreadsheet(530);
console.log(tester2.getValue("=29483+15079")); // Expected: 44562
console.log(tester2.getValue("=A333+A135")); // Expected: 0
console.log(tester2.getValue("=J215+P337")); // Expected: 0
tester2.resetCell("F241");
tester2.setCell("Y104", 2018);
tester2.setCell("O71", 2353);
console.log(tester2.getValue("=Y104+O71")); // Expected: 4371
console.log(tester2.getValue("=73100+39834")); // Expected: 112934
tester2.setCell("Y118", 58058);
console.log(tester2.getValue("=O71+Y104")); // Expected: 4371
tester2.resetCell("O71");
tester2.resetCell("Y118");
console.log(tester2.getValue("=F254+J85")); // Expected: 0
