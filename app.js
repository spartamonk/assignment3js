// 1. Write a JavaScript function that reverse a number.
function reverseNumber(num) {
  let reversedNum = num.toString().split('').reverse().join('')
  return Number(reversedNum)
}

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

function isPalindrome(text) {
  const currState = text.split('').join('').replace(/\s/g, '').toLowerCase()
  const reversedState = text
    .split('')
    .reverse()
    .join('')
    .replace(/\s/g, '')
    .toLowerCase()
  if (currState === reversedState) {
    return true
  } else {
    return false
  }
}

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

function stringCombinator(str) {
  const listOfStrings = []
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      listOfStrings.push(str.slice(i, j))
    }
  }

  return listOfStrings
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortAlphabetical(str) {
  let letters = str.split('')
  return letters.sort().join('')
}

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
function capitalizeString(str) {
  let capitalize = str.split(' ')
  capitalize = capitalize.reduce((acc, curr) => {
    acc.push(curr[0].toUpperCase() + curr.slice(1))
    return acc
  }, [])
  capitalize = capitalize.join(' ')
}

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

function findLongestWord(str) {
  const sentenceArr = str.split(' ')
  let longestWord = ''
  sentenceArr.reduce((arr, curr) => {
    if (curr.length > longestWord.length) {
      longestWord = curr
    }
    return arr
  }, '')
  return longestWord
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const words = str.replace(/\s/g, '').toLowerCase().split('')
  let count = 0
  words.map((i) => {
    if (vowels.includes(i)) {
      count++
    }
  })
  return count
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function checkPrime(num) {
  if (num === 1) {
    return false
  } else if (num === 2) {
    return true
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
}
// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function typeOfData(data) {
  return typeof data
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix(num) {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push([])
    for (let j = 0; j < num; j++) {
      if (i === j) {
        arr[i][j] = 1
      } else {
        arr[i][j] = 0
      }
    }
  }
  return arr
}
// console.log(identityMatrix(2))





// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4
function secondLowestAndGreatestNum(arrNum) {
  const newArr = arrNum.sort((i, j) => i - j)
  newArr.shift()
  newArr.pop()
  return newArr.reduce(
    (acc, curr) => {
      if (curr === Math.max(...newArr)) {
        acc.secondGreatest = curr
      }
      if (curr === Math.min(...newArr)) {
        acc.secondLowest = curr
      }
      return acc
    },
    { secondLowest: 0, secondGreatest: 0 }
  )
}

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

// 13. Write a JavaScript function to compute the factors of a positive integer

function factorsOfNum(num) {
  const factors = []
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i)
    }
  }
  return factors
}

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1
function amountToCoins(amnt, coins) {
  return coins.reduce((acc, curr) => {
    if (amnt >= curr) {
      newAmnt = amnt - curr
      acc.push(...[curr].concat(amountToCoins(newAmnt, coins)))
    } else {
      coins.shift()
      return amountToCoins(amnt, coins)
    }
    return acc
  }, [])
}

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.

function findThePowerOf(b, exp) {
  return Math.pow(b, exp)
}

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function extractUniqueCharacters(str) {
  const characters = str.replace(/\s/g, '')
  return [...new Set(characters)].join(' ')
}

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function numberOfOccurancesOfLetter(str) {
  const allString = str.replace(/\s/g, '').split('')
  return allString.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1
    } else {
      acc[curr] = 1
    }
    return acc
  }, {})
}

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.

// 19. Write a JavaScript function that returns array elements larger than a number.

function valuesLargerThanNumber(arr, num) {
  return arr.reduce((acc, curr) => {
    if (curr > num) {
      return acc.concat(curr)
    } else {
      return acc
    }
  }, [])
}
// console.log(valuesLargerThanNumber([22, 34, 54, 66, 66, 44], 23))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateID(num) {
  let text = ''
  const sam_char_list =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < num; i++) {
    text += sam_char_list.charAt(
      Math.floor(Math.random() * sam_char_list.length)
    )
  }
  return text
}
// console.log(generateID(6))

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

function countLetterInString(str, l) {
  let count = 0
  for (let item of str) {
    if (item === l) {
      count += 1
    }
  }
  return count
}

// console.log(countLetterInString('jollof', 'o'))

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'

function firstNotRepeatedChar(str) {
  let firstUniqueChar = ''
  let charCount = 0
  const sortStr = str.split('').sort()
  for (let i = 0; i < sortStr.length; i++) {
    charCount = 0
    for (let j = 0; j < sortStr.length; j++) {
      if (sortStr[i] === sortStr[j]) {
        charCount += 1
      }
    }
    if (charCount < 2) {
      firstUniqueChar = sortStr[i]
      break
    }
  }
  return firstUniqueChar
}
// console.log(firstNotRepeatedChar('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr) {
  const newArr = arr.sort((a, b) => b - a)
  return newArr
}

// console.log(
//   bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// )

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function longestCountryName(countries) {
  const longestCountry = countries.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr
  }, '')
  return longestCountry
}

// console.log(
//   longestCountryName(['Australia', 'Germany', 'United States of America'])
// )

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.








// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function passFunction(fn) {
  return fn
}

// 29. Write a JavaScript function to get the function name.

function getFunctionName(fnName) {
  return fnName.name
}
