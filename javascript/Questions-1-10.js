// QUESTİON 1 ####################################################################################
String.prototype.toJadenCase = function () {
    `/*
    Jaden Smith, the son of Will Smith, is the star of films 
    such as The Karate Kid (2010) and After Earth (2013). 
    Jaden is also known for some of his philosophy that he 
    delivers via Twitter. When writing on Twitter, he is known 
    for almost always capitalizing every word. For simplicity, 
    you'll have to capitalize each word, check out how contractions are 
    expected to be in the example below.
  
    Your task is to convert strings to how they would be written 
    by Jaden Smith. The strings are actual quotes from Jaden Smith, 
    but they are not capitalized in the same way he originally typed them.
    */`

    return this.split(' ').map(item => (item !== "" ? (item[0].toUpperCase() + item.slice(1)) : "")).join(" ")
}
// console.log("i want to go home.".toJadenCase())




// QUESTİON 2(1) ######################################################################################
function isPangram1(string) {
    `/* 
    A pangram is a sentence that contains every single letter of the alphabet 
    at least once. For example, the sentence "The quick brown fox jumps over 
    the lazy dog" is a pangram, because it uses the letters A-Z at least once 
    (case is irrelevant).

    Given a string, detect whether or not it is a pangram. Return True if it is, 
    False if not. Ignore numbers and punctuation.
    */`

    newString = string.toLowerCase().split("").filter((a, b, c) => { return a.match(/[a-z]/) })

    return newString.filter((a, b, c) => { return c.indexOf(a) === b }).length === 26
}
// console.log(isPangram1("The quick brown fox jumps over the lazy dog"))




// QUESTİON 2(2)
function isPangram2(string) {

    `/* 
    A pangram is a sentence that contains every single letter of the alphabet 
    at least once. For example, the sentence "The quick brown fox jumps over 
    the lazy dog" is a pangram, because it uses the letters A-Z at least once 
    (case is irrelevant).

    Given a string, detect whether or not it is a pangram. Return True if it is, 
    False if not. Ignore numbers and punctuation.
    */`


    var abc = "abcdefghijklmnopqrstuvwxwz".split("")
    string = string.toLowerCase()

    for (i of string) {
        abc = abc.filter(e => { return e !== i })
    }

    return abc.length === 0 && "it is pangram" || "it is not pangram"
}
// console.log(isPangram2("The quick brown fox jumps over the lazy dog"))





// QUESTİON 3 #######################################################################################
`
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all 
of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and 
return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" 
would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
`

function disemvowel1(str) {
    const vowelList = ["i", "e", "u", "a", "o", "I", "E", "U", "A", "O"].toString();
    return str.split("").filter((a, b, c) => {
        return !vowelList.includes(a)
    }).join("")
}

function disemvowel2(str) {
    const vowelList = ["i", "e", "u", "a", "o", "I", "E", "U", "A", "O"];
    let newstr = "";
    for (i of str) {
        if (!vowelList.includes(i)) {
            newstr += i
        }
    }
    return newstr
}

function disemvowel3(str) {
    return str.replace(/[aeiou]/gi, '');
}
// console.log(disemvowel3("This website, is for losers LOL!"))




// QUESTİON 4 #######################################################################################
function toArray(obj) {
    `
    make array of array from given object keys and values
    `

    let liste = []
    for (i of Object.keys(obj)) {
        liste.push([i, obj[i]])
    }

    return liste
}
// console.log(toArray({ a: 1, b: 2 }))





// QUESTİON 5 #######################################################################################
function iqTest(numbers) {
    `
    Bob is preparing to pass IQ test. The most frequent task in 
    this test is to find out which one of the given numbers differs 
    from the others. Bob observed that one number usually differs 
    from the others in evenness. Help Bob — to check his answers, 
    he needs a program that among the given numbers finds one that 
    is different in evenness, and return a position of this number.

    ! Keep in mind that your task is to help Bob solve a real IQ test, 
    which means indexes of the elements start from 1 (not 0)

    Examples:
    iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

    iqTest("1 2 1 1") => 2 // Second number is eve
    `
    let even = [], odd = [];
    let newArr = numbers.split(" ")
    for (i of newArr) {
        Number(i) % 2 ? odd.push(i) : even.push(i);
    }
    return odd.length > even.length ? newArr.indexOf(even[0]) + 1 : newArr.indexOf(odd[0]) + 1

}
// console.log(iqTest("1, 3, 7, 8, 9, 5"))



// QUESTİON 6 #######################################################################################
function duplicateEncode(word) {
    `
    The goal of this exercise is to convert a string 
    to a new string where each character in the new string 
    is "(" if that character appears only once 
    in the original string, or ")" if that character 
    appears more than once in the original string. 
    Ignore capitalization when determining if a 
    character is a duplicate.

    Examples

    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 
    `

    let x = word.toLowerCase().split("");
    let y =""
    for (const i of x) {
        x.indexOf(i) === x.lastIndexOf(i) ? y+="(" :  y+=")"
    }
    return y
}
// console.log(duplicateEncode("Success")) // )())())


// QUESTİON 7 #######################################################################################
function flickSwitch(arr) {
    `
    Create a function that always returns true 
    for every item in a given array. However, 
    if an element is the word "flick", 
    switch to always returning the opposite boolean value.

    Examples

    flickSwitch(["edabit", "flick", "eda", "bit"]) ➞ [true, false, false, false]
    flickSwitch(["flick", 11037, 3.14, 53]) ➞ [false, false, false, false]
    flickSwitch([false, false, "flick", "sheep", "flick"]) ➞ [true, true, false, false, true]
    
    Notes

    "flick" will always be given in lowercase.
    An array may contain multiple flicks.
    Switch the boolean value on the same element as the flick itself.
    `
	num = 0
	return arr.map(i =>{
		if (i == "flick") {	num++ }
		return ((num % 2) == 0 ? true : false)
	})
}
console.log(flickSwitch(["edabit", "flick", "eda", "bit"]))


// QUESTİON 8 #######################################################################################
// QUESTİON 9 #######################################################################################
// QUESTİON 10 #######################################################################################
