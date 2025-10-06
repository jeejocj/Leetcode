/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    let seat = seats.sort((a, b) => a - b)
    let student = students.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum += Math.abs(student[i] - seat[i])

   }
   return sum
};