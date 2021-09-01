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