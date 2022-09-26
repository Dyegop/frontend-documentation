/*
DATES
    -Creating date object
        -var d = new Date() // Current date
        -var d = new Date(year, month, day, hours, minutes, seconds, milliseconds)
        -var d = new Date(milliseconds)
        -var d = new Date(date string)
    -Calling the Date object directly, such as now = Date(), returns a string rather than a Date object

MATH
    -Perform mathematical tasks
    -All properties/methods of Math can be called by using Math as an object
    -Some properties:
        -E	-> Euler's number
        -PI	-> PI number

REGEXP
    -Sequence of characters that forms a search pattern
    -Creating regexp object
        -slashes     -> /pattern/modifiers;
        -constructor -> new RegExp('pattern', 'modifiers') | new RegExp(/pattern/, 'modifiers')
    -Properties:
        -flags      -> flags in alphabetic order
        -source     -> pattern text
        -lastIndex  -> index at which to start the next match
        -ignoreCase -> indicate if -i flag is used
        -global     -> indicate if -g flag is used
        
    -Modifiers(flags):
        -i -> perform case-insensitive matching	
        -g -> perform a global match (find all matches rather than stopping after the first match)	
        -m -> perform multiline matching
    -Patterns:
        -[abc]  -> find any of the characters between the brackets	
        -[0-9]  -> find any of the digits between the brackets	
        -(x|y)  -> find any of the alternatives separated with |
        -\d     -> find a digit
        -\D     -> find any character that is not a digit 
        -\s     -> find a whitespace character	
        -\b     -> find a match at the beginning or at the end of a word
        -\uxxxx -> find the Unicode character specified by the hexadecimal number xxxx
        -n+	    -> matches any string that contains at least one n
        -n*	    -> matches any string that contains zero or more occurrences of n
        -n?	    -> matches any string that contains zero or one occurrences of n
        -.      -> matches any single character except line terminators
*/

// DATE FUNCTIONS

// getFullYear()     -> get the year as a four digit number (yyyy)
// getMonth()        -> get the month as a number (0-11)
// getDate()         -> get the day as a number (1-31)
// getHours()        -> get the hour (0-23)
// getMinutes()      ->	get the minute (0-59)
// getSeconds()      -> get the second (0-59)
// getMilliseconds() -> get the millisecond (0-999)
// getTime()         -> get the time (milliseconds since January 1, 1970)
// getDay()          -> get the weekday as a number (0-6)
// Date.now()	     -> get the time
// setDate(n)         -> set the day as a number (1-31)
// setFullYear(date)  -> set the year (YYYY, MM, DD) (MM, DD are optional)
// setHours(n)        -> set the hour (0-23)
// setMilliseconds(n) -> set the milliseconds (0-999)
// setMinutes(n)      -> set the minutes (0-59)
// setMonth(n)        -> set the month (0-11)
// setSeconds(n)      -> set the seconds (0-59)
// setTime(n)         -> set the time (milliseconds since January 1, 1970)
var d = new Date();
d.setFullYear(2020, 11, 3);
document.getElementById("demo").innerHTML = d.getTime();





// MATH FUNCTIONS

//abs(x)	           -> return the absolute value of x
//acos/asin/atan(x)	   -> return the arccosine/arcsine/arctangent in radians
//acosh/asinh/atanh(n) -> return the hyperbolic arccosine/arcsine/arctangent
//cos/sin/tan(x)       -> return the cosine in radians
//exp(x)	           -> return the exponential value
//log(x)               -> return the natural logarithmof x
//max/min(x, y,...)    -> return the number with the highest value
//random()	           -> return a random number between 0 and 1
//round(x)	           -> return x to the nearest integer
//sqrt(x)              -> return the square root of x
//trunc(x)	           -> return the integer part of a number (x)





// REGEXP FUNCTIONS

// match(regexp)        -> return first match or null (all matches if -g flag is used)
// matchAll(regexp)     -> return an iterable with matches
// replace(regexp, str) -> replace every regexp found with str
// search(regexp)       -> return the position of the first match or -1 if none found
// split(regexp, limit) -> split a string using the regexp (or a substring) as a delimiter
// exec(str)            -> execute a search for a match returning an array or Null
// test(str)            -> test a regular expression for a specified string
let str1 = "I love JavaScript";
let str2 = '<h1>Hello, world!</h1>';
let str3 = "John Smith";
let regexp = /<(.*?)>/g;
console.log(str1.match(/Java(Script)/));
console.log(str2.matchAll(regexp));
alert(str3.replace(/(john) (smith)/i, '$2, $1'))  // $n represents the nth capture group of the regexp
alert(str1.search( /love/i ) );
alert('12-34-56'.split('-'));
alert(regexp.exec(str2));
alert( /love/i.test(str1));