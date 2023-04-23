//Create a JavaScript code that accepts a string of lowercase letters. 
//Print the word followed by how many consonants and vowels it has.

//an array that will save the words to evaluate
const aoa = ["hello", "ukelele", "awesome", "onomonopia", "textbook"];
console.log("I expect to see 5:", aoa.length)

//create a for loop to get each word to evaluate
for (let j = 0; j < aoa.length; j++){
    //console.log("testing for loop index:", j)
    //create 2 variables to keep count  of our vowels and consonants
    let vowel = 0;
    let consonant = 0;

    //declare a variable that will save the word that is going to be evaluated
    let word = aoa[j];
    //console.log("I expect to see the word:", word)

    //for loop that will look for the letters
    for (let i = 0; i < word.length; i++){
        //create different conditions to check if its a vowel
        word[i]==="a" || word[i]==="e" || word[i]==="i" || word[i]==="o" || word[i]==="u" ? vowel++ : consonant++
        //we use ternary notation for simplicity
    }
    //create the output required for the assignment
    console.log(`${word} has ${consonant} consontants and ${vowel} vowels`)
}
