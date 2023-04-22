//Create a JavaScript code that accepts an array of numbers 
//and returns a new array with only the odd numbers from the original array. 
//If there is only one odd number in the array, return an array with that single value.

//create an array of arrays (aoa) to check all the values. 
const aoa = [[2, 4, 6, 8, 11, 20, 15, 22], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [70, 42, 55, 81, 21, 91, 34], [2, 4, 6, 8, 10, 11, 12]];
console.log("I spect a 4:", aoa.length);

//create an empty array to save the odd numbers
let oddNumbers = []; //let because its gonna reset each loop?

//make a loop so we can see our check each set of values
for(let j = 0; j < aoa.length; j++){
    //a temporary variable that will store our array
    let temp = aoa[j]; //Temporal variable
    let oddNumbers = []; //use let because its gonna reset each loop?
    //console.log("Array that is being evaluated:", temp)

    //start a for loop to check each element of the array
    for(let i = 0; i < temp.length; i++){
        //add a condition to see if the element is an odd number
        if ( !(temp[i]%2 == 0) ){
            //add element to the new array
            oddNumbers.push(temp[i])
            //console.log("Expect an odd number:", oddNumbers.push(temp[i]))
        }
    }
    console.log("Expected result:",oddNumbers)
}
