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


6. Summary of Methods and Properties
Category	            Count	        Examples
Static Methods	        6	            isFinite, isInteger, isNaN, isSafeInteger, parseFloat, parseInt
Instance Methods	    6	            toExponential, toFixed, toLocaleString, toPrecision, toString, valueOf
Static Properties	    8	            EPSILON, MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE, NaN, NEGATIVE_INFINITY, POSITIVE_INFINITY
Global Functions	    4	            isFinite, isNaN, parseFloat, parseInt

7. Total Count
Static Methods:         6

Instance Methods:       6

Static Properties:      8

Global Functions:       4

Total: 24 methods and properties related to numbers in JavaScript.
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

/*

1. Math Methods
Method	                Description
Math.abs(x)	            Returns the absolute value of x.
Math.acos(x)	        Returns the arccosine of x (in radians).
Math.acosh(x)	        Returns the hyperbolic arccosine of x.
Math.asin(x)	        Returns the arcsine of x (in radians).
Math.asinh(x)	        Returns the hyperbolic arcsine of x.
Math.atan(x)	        Returns the arctangent of x (in radians).
Math.atan2(y, x)	    Returns the arctangent of the quotient of y and x (in radians).
Math.atanh(x)	        Returns the hyperbolic arctangent of x.
Math.cbrt(x)	        Returns the cube root of x.
Math.ceil(x)	        Returns the smallest integer greater than or equal to x.
Math.clz32(x)	        Returns the number of leading zeros in the 32-bit binary representation of x.
Math.cos(x)	            Returns the cosine of x (in radians).
Math.cosh(x)	        Returns the hyperbolic cosine of x.
Math.exp(x)	            Returns e^x, where e is Euler's number (~2.718).
Math.expm1(x)	        Returns e^x - 1, where e is Euler's number.
Math.floor(x)	        Returns the largest integer less than or equal to x.
Math.fround(x)	        Returns the nearest 32-bit single-precision float representation of x.
Math.hypot(...args)	    Returns the square root of the sum of squares of its arguments.
Math.imul(x, y)	        Returns the result of 32-bit integer multiplication of x and y.
Math.log(x)	            Returns the natural logarithm (base e) of x.
Math.log1p(x)	        Returns the natural logarithm of 1 + x.
Math.log10(x)	        Returns the base-10 logarithm of x.
Math.log2(x)	        Returns the base-2 logarithm of x.
Math.max(...args)	    Returns the largest of the given numbers.
Math.min(...args)	    Returns the smallest of the given numbers.
Math.pow(x, y)	        Returns x raised to the power of y.
Math.random()	        Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
Math.round(x)	        Returns the value of x rounded to the nearest integer.
Math.sign(x)	        Returns the sign of x (1 for positive, -1 for negative, 0 for zero).
Math.sin(x)	            Returns the sine of x (in radians).
Math.sinh(x)	        Returns the hyperbolic sine of x.
Math.sqrt(x)	        Returns the square root of x.
Math.tan(x)	            Returns the tangent of x (in radians).
Math.tanh(x)	        Returns the hyperbolic tangent of x.
Math.trunc(x)	        Returns the integer part of x (removes fractional digits).

2. Math Properties
Property	            Description
Math.E	                Euler's number (~2.718).
Math.LN2	            Natural logarithm of 2 (~0.693).
Math.LN10	            Natural logarithm of 10 (~2.302).
Math.LOG2E	            Base-2 logarithm of e (~1.442).
Math.LOG10E	            Base-10 logarithm of e (~0.434).
Math.PI	                Pi (~3.14159).
Math.SQRT1_2	        Square root of 1/2 (~0.707).
Math.SQRT2	            Square root of 2 (~1.414).

3. Summary of Math Methods and Properties
Category	            Count	        Examples
Math Methods	        33	            abs, acos, acosh, asin, asinh, atan, atan2, atanh, cbrt, ceil, clz32, cos, cosh, exp, expm1, floor, fround, hypot, imul, log, log1p, log10, log2, max, min, pow, random, round, sign, sin, sinh, sqrt, tan, tanh, trunc
Math Properties	        8	            E, LN2, LN10, LOG2E, LOG10E, PI, SQRT1_2, SQRT2

4. Total Count
Math Methods:           33
Math Properties:        8

Total: 41 methods and properties in the Math object.

*/






