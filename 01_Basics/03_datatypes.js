"use strict"; // To treat all JS code as new version
//alert (3+3) we are using nodejs.not browser

/* 
A.Primitive Types:

In JavaScript, there are seven primitive types that you should be familiar with:
    1.Number: This is used for both integer and floating-point numbers. Knowing how JavaScript handles numbers, especially the pitfalls of floating-point arithmetic, can help you in testing calculations and numeric inputs.
    2.String: Strings are sequences of characters used for text. They are crucial in testing form submissions, data processing, and anywhere textual data is handled.
    3.Boolean: This type has two values—true and false. Booleans are often used in conditional testing, and understanding their conversion (truthy and falsy values) is key in logical flow testing.
    4.Undefined: A variable that has not been assigned a value is undefined. This can often indicate bugs or uninitialized variables in the code.
    5.Null: Null is a special keyword denoting a null value. Testing for null values is important in scenarios where an object is expected but not available.
    6.Symbol: Introduced in ECMAScript 2015, symbols are unique and immutable and are often used to add unique property keys to objects. Understanding symbols can be crucial when testing objects for properties that are not easily accessible.
    7.BigInt: This newer addition allows the representation of integers that are too large for the number type. BigInt can be critical in testing applications that deal with large numbers, such as financial services.
    9.Symbol: unique

B.Complex Types:

Apart from primitive types, JavaScript also has complex types like:
1.Object: The most used datatype in JavaScript, objects are collections of properties. As a manual tester, you will often encounter objects when testing APIs, user interfaces, and other interactive elements. Understanding how to navigate objects and their properties, including arrays and functions, is crucial.
Type Conversion.JavaScript is a loosely typed language, which means variables do not need a datatype declaration. This flexibility allows for type coercion, where JavaScript converts one datatype into another automatically. This can lead to unexpected results, so as a tester, understanding implicit and explicit conversions is essential to avoid false positives and negatives in test cases.

C.Testing Tips for JavaScript Datatypes:

Check for Type-Related Bugs: Always test for type conversion errors and unexpected datatype changes.
Use Strict Equality Operators: Use === and !== instead of == and != to avoid errors due to type coercion.
Test Edge Cases: Especially with numbers and strings, test the boundaries and limits to ensure the application can handle such cases.
Null and Undefined: Always check for these values in your tests to ensure that functions and calculations behave as expected when faced with unexpected or missing data.
*/

console.log(3
    +3
) //This is not coding standered. code readability should be high
console.log(3+3)

let name = "Shubham"
let age = 30
let isloggedin = true
let nullvalue = null
let undefined;

console.log(typeof age)