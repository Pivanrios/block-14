//Create a JavaScript code that prints each number from 1 to 100 on a new line.
//create a for loop that will go from 1 till 100 
for (let i=1; i < 101; i++){
    //For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
    if ( i%3==0 && i%5==0 ){
        console.log("FizzBuzz")
    }else if( i%3==0 ) { //For each multiple of 3, print "Fizz" instead of the number.
        console.log("Fizz")
    }else if( i%5==0 ){//For each multiple of 5, print "Buzz" instead of the number.
        console.log("Buzz")
    }else{//else log the number
        console.log(i)
    }
}
