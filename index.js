function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
    return [];
  };
  console.log(rangeOfNumbers(1, 10)) 

  // let Sum = document.getElementById("SUM")
  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(0, 1, 2));

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today, tomorrow);

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; 
console.log(highToday, highTomorrow);

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const { today: { low : minToday }} = LOCAL_FORECAST;
const { today: {high : maxToday }} = LOCAL_FORECAST;
console.log(minToday, maxToday);

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
let d = 8, e = 6;
[d, e] = [e, d];
console.log(e, d);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(source) {
  const [, , ...arr] = source; 
  return arr;
}
console.log(removeFirstTwo(source));

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0;
console.log(half(stats));

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for(let i=0; i<arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Dat", 23, "Male"));

class Thermostat {
  constructor(temp) {
    this._temp = 5/9 * (temp - 32)
  }
  get temperature() {
     return this._temp;
  }
  set temperature(updatedTemp){
    this._temp = updatedTemp;
  }
}
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature; 
console.log(temp)

// export const uppercaseString = (string) => {
//   return string.toUpperCase();
// }
// const lowercaseString = (string) => {
//   return string.toLowerCase()
// }
// export { lowercaseString };







