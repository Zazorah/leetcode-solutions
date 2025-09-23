// Problem: Design Parking System
// Difficulty: Easy
// Link: https://leetcode.com/problems/design-parking-system/description/

class ParkingSystem {
  private bigSpaces: number;
  private medSpaces: number;
  private smallSpaces: number;

  constructor(big: number, medium: number, small: number) {
    this.bigSpaces = big;
    this.medSpaces = medium;
    this.smallSpaces = small;
  }

  addCar(carType: number): boolean {
    if (carType == 1) {
      if (this.bigSpaces > 0) {
        this.bigSpaces -= 1;
        return true;
      }
    } else if (carType == 2) {
      if (this.medSpaces > 0) {
        this.medSpaces -= 1;
        return true;
      }
    } else if (carType == 3) {
      if (this.smallSpaces > 0) {
        this.smallSpaces -= 1;
        return true;
      }
    }

    return false;
  }
}
// Test cases
const parking = new ParkingSystem(1, 1, 0);
console.log(parking.addCar(1));
console.log(parking.addCar(2));
console.log(parking.addCar(3));
console.log(parking.addCar(1));
