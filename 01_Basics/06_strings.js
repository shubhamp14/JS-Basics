/*Essential JavaScript String Methods

Here’s a breakdown of some of the most useful JavaScript string methods that every tester should be familiar with:

1. charAt()
    Usage: string.charAt(index)
    Description: Returns the character at the specified index.
    Example: If you need to verify the first character of a response code, response.charAt(0) could be used to assert whether it’s the expected character.
2. concat()
    Usage: string1.concat(string2)
    Description: Joins two or more strings and returns a new joined strings.
    Example: Useful in scenarios where you need to construct strings dynamically during tests.
3. includes()
    Usage: string.includes(substring, position)
    Description: Determines whether one string may be found within another string, returning true or false as appropriate.
    Example: This can be particularly handy in validation checks to see if a certain error message or output contains a specific word or phrase.
4. indexOf()
    Usage: string.indexOf(searchValue, fromIndex)
    Description: Returns the index of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
    Example: Useful for finding the position of a substring within a string which can help in extracting specific data from a response.
5. replace()
    Usage: string.replace(regexp|substr, newSubstr|function)
    Description: Returns a new string with some or all matches of a pattern replaced by a replacement.
    Example: In test automation, you might use this method to sanitize data or to modify a response text to verify functionality.
6. slice()
    Usage: string.slice(beginIndex[, endIndex])
    Description: Extracts a section of a string and returns it as a new string, without modifying the original string.
    Example: This is particularly useful when you need to extract specific parts of the strings in logs or outputs for verification.
7. split()
    Usage: string.split([separator[, limit]])
    Description: Divides a String into an ordered list of substrates, puts these substrates into an array, and returns the array.
    Example: Splitting response texts based on a delimiter to parse and use the data effectively in tests.
8. toLowerCase() and toUpperCase()
    Usage: string.toLowerCase() and string.toUpperCase()
    Description: Returns the calling string value converted to lower case or upper case.
    Example: These methods are essential when performing case-insensitive comparisons in your tests.
9. trim()
    Usage: string.trim()
    Description: Trims whitespace from both ends of a string.
    Example: Very useful in cleaning up the input and output data in tests, ensuring that your test cases are not affected by unintended whitespace.*/