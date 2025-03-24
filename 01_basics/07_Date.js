let myDate = new Date();        //type is object
//console.log('1. ' + myDate.toString());             //Mon Mar 24 2025 06:45:16 GMT+0000 (Coordinated Universal Time)
//console.log('2. ' + myDate.toDateString());         //Mon Mar 24 2025
//console.log('3. ' + myDate.toISOString());          //2025-03-24T06:45:16.926Z
//console.log('4. ' + myDate.toJSON());               //2025-03-24T06:45:16.926Z
//console.log('5. ' + myDate.toLocaleDateString());   //3/24/2025
//console.log('6. ' + myDate.toLocaleString());       //3/24/2025, 6:45:16 AM
//console.log('7. ' + myDate.toLocaleTimeString());   //6:45:16 AM
//console.log('8. ' + myDate.toTimeString());         //06:45:16 GMT+0000 (Coordinated Universal Time)
//console.log('9. ' + myDate.toUTCString());          //Mon, 24 Mar 2025 06:45:16 GMT


let myCreatedDate = new Date(2023, 0,23)
//console.log(myCreatedDate.toDateString());

let myNewDate = new Date(2023, 0,23, 5, 3)
//console.log(myNewDate.toLocaleString());

let myNewDate1 = new Date("2023-01-15")
//console.log(myNewDate1.toLocaleString());

let myNewDate2 = new Date("01-16-2023")
//console.log(myNewDate2.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDato = new Date()
console.log(newDato);
console.log(newDato.getMonth() + 1);
console.log(newDato.getDay());

newDato.toLocaleString('default', {
    weekday: "long",
})











/*

Date Methods
a. Getter Methods
These methods retrieve specific parts of a date.

Method	Description
getFullYear()	Returns the year (4 digits).
getMonth()	Returns the month (0-11, 0 = January).
getDate()	Returns the day of the month (1-31).
getDay()	Returns the day of the week (0-6, 0 = Sunday).
getHours()	Returns the hour (0-23).
getMinutes()	Returns the minutes (0-59).
getSeconds()	Returns the seconds (0-59).
getMilliseconds()	Returns the milliseconds (0-999).
getTime()	Returns the timestamp (milliseconds since January 1, 1970).
getTimezoneOffset()	Returns the timezone offset in minutes (UTC - local time).

*/



/*

b. Setter Methods
These methods modify specific parts of a date.

Method	Description
setFullYear(year)	Sets the year (4 digits).
setMonth(month)	Sets the month (0-11, 0 = January).
setDate(day)	Sets the day of the month (1-31).
setHours(hours)	Sets the hour (0-23).
setMinutes(minutes)	Sets the minutes (0-59).
setSeconds(seconds)	Sets the seconds (0-59).
setMilliseconds(ms)	Sets the milliseconds (0-999).
setTime(timestamp)	Sets the date using a timestamp (milliseconds since January 1, 1970).


*.


/*

c. Conversion Methods
These methods convert a date to a string.

Method	Description
toString()	Returns a string representation of the date.
toDateString()	Returns the date portion as a string.
toTimeString()	Returns the time portion as a string.
toISOString()	Returns the date in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).
toUTCString()	Returns the date in UTC format.
toLocaleString()	Returns a localized string representation of the date.
toLocaleDateString()	Returns the date portion as a localized string.
toLocaleTimeString()	Returns the time portion as a localized string.

*/

/*

3. Static Methods
Method	Description
Date.now()	Returns the current timestamp (milliseconds since January 1, 1970).
Date.parse(dateString)	Parses a date string and returns the timestamp.
Date.UTC(year, month, ...)	Returns the timestamp for the specified UTC date.


4. Date Properties
The Date object itself has no properties, but its instances have properties like __proto__ that point to the Date prototype.

5. Working with Dates
a. Formatting Dates
Use toLocaleString() or libraries like moment.js or date-fns for advanced formatting.

b. Comparing Dates
Use timestamps (getTime()) to compare dates:

javascript
Copy
let date1 = new Date(2023, 9, 5);
let date2 = new Date(2023, 9, 6);
console.log(date1.getTime() < date2.getTime()); // true
c. Adding/Subtracting Time
Manipulate dates using set methods:

javascript
Copy
let date = new Date();
date.setDate(date.getDate() + 7); // Add 7 days
console.log(date);
6. Common Use Cases
a. Countdown Timer
javascript
Copy
let futureDate = new Date(2023, 11, 25); // December 25, 2023
let now = new Date();
let diff = futureDate.getTime() - now.getTime();
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(`Days until Christmas: ${days}`);
b. Age Calculator
javascript
Copy
let birthDate = new Date(1990, 5, 15); // June 15, 1990
let now = new Date();
let age = now.getFullYear() - birthDate.getFullYear();
if (now.getMonth() < birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())) {
  age--;
}
console.log(`Age: ${age}`);
7. Summary
Category	Count	Examples
Getter Methods	10	getFullYear, getMonth, getDate, getDay, getHours, getMinutes, getSeconds, getMilliseconds, getTime, getTimezoneOffset
Setter Methods	8	setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime
Conversion Methods	7	toString, toDateString, toTimeString, toISOString, toUTCString, toLocaleString, toLocaleDateString, toLocaleTimeString
Static Methods	3	Date.now, Date.parse, Date.UTC
8. Total Count
Getter Methods: 10

Setter Methods: 8

Conversion Methods: 7

Static Methods: 3

Total: 28 methods in the Date object.


*/

