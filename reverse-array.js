//With a for loop, create a JavaScript code that creates a new array in reverse order.

//array that will save our set of values to evaluate
const aoa = [[1, 2, 3],[1, 3, 5, 7, 9, 11],[20, 50, 30, 60, 200],[1, -1, 2, -3, 5, -8, 13]];

//create a for loop that will take each element of the array of arrays
for (let j=0; j < aoa.length; j++){
    //console.log("expect to see j:", j)
    //declare our variables:
    let arr = aoa[j]; //the array we are going to change
    //console.log("Initial array:", arr)
    let revArr = []; //empty array where we will store the reversed array
    
    //create a for loop that will go thru each element of array
    for (let i=0; i < arr.length; i++){
        //add the value to the new array 
        revArr.unshift(arr[i])
    }
    //output expected for homework
    console.log("New array:", revArr)
}