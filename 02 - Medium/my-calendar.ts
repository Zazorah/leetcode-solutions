// Problem: My Calendar I
// Difficulty: Medium
// Link: https://leetcode.com/problems/my-calendar-i/description/?envType=problem-list-v2&envId=design

class MyCalendar {
  private bookings: [number, number][] = [];

  book(startTime: number, endTime: number): boolean {
    // Check to see if there are no conflicts
    for (const existingBooking of this.bookings) {
      if (startTime < existingBooking[1] && existingBooking[0] < endTime) {
        return false;
      }
    }

    this.bookings.push([startTime, endTime]);
    return true;
  }
}

// Test Cases
const calendar = new MyCalendar();
console.log(calendar.book(10, 20)); // Expected: True
console.log(calendar.book(15, 25)); // Expected: False
console.log(calendar.book(20, 30)); // Expected: True
