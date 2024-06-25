/**
 * Overview of JavaScript Math Object<br>Introduction to Math Object**
The Math namespace in JavaScript is a utility that holds static properties and methods for performing mathematical operations and accessing mathematical constants. It is designed to work with the Number type but is incompatible with BigInt.
Key Characteristics
- Math is not a constructor, which means it cannot be instantiated with the new operator nor called as a function.
- Properties and methods within Math are static.
- Precision of Math functions can vary across different browsers or even on the same JavaScript engine but on different operating systems or architectures.

Static Properties
- Math.E: Represents Euler&#39;s number, approximately 2.718.
- Math.LN10: Natural logarithm of 10, roughly 2.303.
- Math.LN2: Natural logarithm of 2, about 0.693.
- Math.LOG10E: Base-10 logarithm of E, approximately 0.434.
- Math.LOG2E: Base-2 logarithm of E, around 1.443.
- Math.PI: Ratio of a circle&#39;s circumference to its diameter, approximately 3.14159.
- Math.SQRT1_2: Square root of ½, roughly 0.707.
- Math.SQRT2: Square root of 2, about 1.414.
- Math[@@toStringTag]: Initial value is the string &quot;Math&quot;, used in Object.prototype.toString().

Static Methods
- Math.abs(): Returns the absolute value.
- Math.acos(): Calculates the arccosine.
- Math.acosh(): Computes the hyperbolic arccosine.
- Math.asin(): Determines the arcsine.
- Math.asinh(): Calculates the hyperbolic arcsine.
- Math.atan(), Math.atan2(): Returns the arctangent and arctangent of the quotient of its arguments respectively.
- Math.atanh(): Computes the hyperbolic arctangent.
- Math.cbrt(): Returns the cube root.
- Math.ceil(): Rounds up to the nearest integer.
- Math.clz32(): Counts leading zeros in a 32-bit integer.
- Math.cos(), Math.cosh(): Returns the cosine and hyperbolic cosine.
- Math.exp(): Calculates e^x.
- Math.expm1(): e^x - 1.
- Math.floor(): Rounds down to the nearest integer.
- Math.fround(): Nearest single precision float.
- Math.hypot(): Square root of the sum of squares.
- Math.imul(): 32-bit integer multiplication.
- Math.log(), Math.log10(), Math.log1p(), Math.log2(): Logarithmic functions.
- Math.max(), Math.min(): Returns the largest/smallest of given numbers.
- Math.pow(): Base to the exponent power.
- Math.random(): Generates a pseudo-random number.
- Math.round(): Rounds to the nearest integer.
- Math.sign(): Returns the sign of a number.
- Math.sin(), Math.sinh(): Sine and hyperbolic sine.
- Math.sqrt(): Square root.
- Math.tan(), Math.tanh(): Tangent and hyperbolic tangent.
- Math.trunc(): Removes fractional digits.

Practical Examples
- Converting between degrees and radians: Functions like sin(), cos(), and tan() use radians, not degrees.<pre><code class="language-js">function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}
function radToDeg(rad) {
  return rad / (Math.PI / 180);
}
</code></pre>

- Calculating the height of an equilateral triangle:<pre><code class="language-js">50 * Math.tan(degToRad(60));
</code></pre>

- Generating a random integer within a range:<pre><code class="language-js">function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
</code></pre>


Specifications and Compatibility
- Refer to the ECMAScript Language Specification for detailed standards.
- Browser compatibility varies for different Math properties and methods.

 */