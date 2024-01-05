"use strict";

// Creation
// new Date(): now
let now = new Date();
console.log(now); // shows current date/time

/**
 * Timestamp
 * number of millisecs that has passed since Jan 1st 1970
 */

// new Date(timestamp): create a Date from the timestamp
let Jan01_1970 = new Date(0);
console.log(Jan01_1970); // 1970-01-01T00:00:00.000Z

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969); // 1969-12-31T00:00:00.000Z

// new Date(dateString): parsed automatically
let date = new Date("2024-01-04");
console.log(date); // 2024-01-04T00:00:00.000Z

// new Date(year, month, date, hours, minutes, seconds, ms)
let May15_2003_0730 = new Date(2003, 4, 15, 7, 30);
console.log(May15_2003_0730); // 2003-05-15T10:30:00.000Z

let Jan01_2003 = new Date(2003, 0);
console.log(Jan01_2003); // 2003-01-01T02:00:00.000Z

// Access date components
console.log(May15_2003_0730.getFullYear()); // 2003
console.log(May15_2003_0730.getMonth()); // 4
console.log(May15_2003_0730.getDate()); // 15
console.log(May15_2003_0730.getHours()); // 7
console.log(May15_2003_0730.getUTCHours()); // 10
console.log(May15_2003_0730.getMinutes()); // 30
console.log(May15_2003_0730.getDay()); // 4, Thursday
console.log(May15_2003_0730.getTime()); // 1052994600000, timestamp
console.log(May15_2003_0730.getTimezoneOffset()); // 180, 3 hours

// Setting date components
let today = new Date();

today.setDate(5);
today.setHours(0, 0, 0, 0);
console.log(today); // 2024-01-05T03:00:00.000Z

// Autocorrection: automatically adjust out-of-range values
date = new Date(2023, 1, 28);
date.setDate(date.getDate() + 2);
date.setSeconds(date.getSeconds() + 70);

console.log(date); // 2023-03-02T03:01:10.000Z

// Date to number: converted to its timestamp
date = new Date();
console.log(+date); // 1704420206149

// date diff
let start = Date.now(); // same as new Date().getTime()

for (let i = 0; i < 1e6; i++) {
    let doSomething = i ** 3;
}

let end = Date.now();
console.log(`The loop took ${end - start} ms`);

// Date.parse from a string
let ms = Date.parse("2003-05-15T07:30:00.000-03:00");
console.log(new Date(ms)); // 2003-05-15T10:30:00.000Z
