// Stolen from https://stackoverflow.com/a/31615643
const appendSuffix = n => {
  var s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

// function appendLeadingZeroes(n) {
//   if (n <= 9) {
//     return "0" + n;
//   }
//   return n
// }

const appendLeadingZeroes = n => {
  if (n <=9) {
    return "0" + n;
  }
  return n;
}

module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayWithSuffix = appendSuffix(dateObject.getDate());

  return `${dayWithSuffix} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()} at ${appendLeadingZeroes(dateObject.getHours())}:${appendLeadingZeroes(dateObject.getMinutes())}`;
};
