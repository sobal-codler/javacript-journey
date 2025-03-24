const score = 400;
//console.log(score);

const balance = new Number(100)
//console.log(balance);       // convert into objects and prototype

//console.log(balance.toString());

//console.log(balance.toFixed(2));  // return mentiond strength of number

const otherNumber = 123.3454

//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en'));
//console.log(hundreds.toLocaleString('en-IN'));

/*
1. Static Methods of Number
These methods are called directly on the Number object.

Method	                                Description
Number.isFinite(value)	                Checks if a value is a finite number.
Number.isInteger(value)	                Checks if a value is an integer.
Number.isNaN(value)	                    Checks if a value is NaN (more reliable than the global isNaN()).
Number.isSafeInteger(value)	            Checks if a value is a safe integer (between -(2^53 - 1) and 2^53 - 1).
Number.parseFloat(string)	            Parses a string and returns a floating-point number (same as parseFloat()).
Number.parseInt(string, radix)	        Parses a string and returns an integer (same as parseInt()).

2. Instance Methods of Number
These methods are called on a number value or a Number object.

Method	                                Description
toExponential(fractionDigits)	        Returns a string representing the number in exponential notation.
toFixed(digits)	                        Returns a string representing the number with a fixed number of decimal places.
toLocaleString(locales, options)	    Returns a string with a language-sensitive representation of the number.
toPrecision(precision)	                Returns a string representing the number to a specified precision.
toString(radix)	                        Returns a string representing the number in the specified radix (base).
valueOf()	                            Returns the primitive value of the Number object.

3. Static Properties of Number
These properties are accessed directly on the Number object.

Property	                            Description
Number.EPSILON	                        The smallest interval between two representable numbers.
Number.MAX_SAFE_INTEGER	                The maximum safe integer in JavaScript (2^53 - 1).
Number.MAX_VALUE	                    The largest positive representable number (1.7976931348623157e+308).
Number.MIN_SAFE_INTEGER	                The minimum safe integer in JavaScript (-(2^53 - 1)).
Number.MIN_VALUE	                    The smallest positive representable number (5e-324).
Number.NaN	                            Represents "Not-a-Number" (same as NaN).
Number.NEGATIVE_INFINITY	            Represents negative infinity (-Infinity).
Number.POSITIVE_INFINITY	            Represents positive infinity (Infinity).

4. Global Functions for Numbers
These are global functions (not part of the Number object) but are commonly used with numbers.

Function	                            Description
isFinite(value)	                        Checks if a value is a finite number (global version).
isNaN(value)	                        Checks if a value is NaN (global version, less reliable than Number.isNaN).
parseFloat(string)	                    Parses a string and returns a floating-point number.
parseInt(string, radix)	                Parses a string and returns an integer.
*/

// --------------------------Math--------------------------

//console.log(Math);  // it is math object built in js

//console.log(Math.abs(-5)); // convert -ive to +ive (absolute)
//console.log(Math.round(1.345)); // return round of value depend upon 5 above or below
//console.log(Math.ceil(1.345));  // return round but always give upper value
//console.log(Math.floor(1.345)); // always give lower value

//console.log(Math.random); // always give random value between 0 to 1

//console.log((Math.random()*10) + 1);
//console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

for (let index = 0; index < min; index++) {
    const min = 10
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
//console.log(Math.floor(Math.random() * (max - min + 1) + min));    // formula to set range of numbers between specific number







