//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];



/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const arrayO = numbers.filter(function(numO){
    return numO >= 25
}
);
console.log(arrayO);

const arrayOne = numbers.filter(function(num){
    return num % 5 === 0
}
);
console.log(arrayOne);


/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/
const arrayT = numbers.map(function(numb2){
    return numb2 ** 2
}
);
console.log(arrayT);

const arrayTwo = numbers.map(function(numb){
    return numb * 2
}
);
console.log(arrayTwo);


/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const arrayThree = numbers.filter(function(o){
    return o >= 20
}
).map(function(t){
return t ** 2
}
);
console.log(arrayThree);

const arrayFour = numbers.filter(function(th){
    return th % 5 === 0
}
).map(function(f){
return f * 3
}
);
console.log(arrayFour);



/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
function logger(array){
console.log(array)
}
logger([1, 5, 9, 13]);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
function toCelsius(temperatures){
return temperatures.map(function(temp){
    return (temp - 32 ) * (5/9)
}
);
}
console.log(toCelsius([0, 20, 40 , 60, 80, 100, 120]));
const temperatures = [0, 20, 40 , 60, 80, 100, 120];
/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
function hottestDays(temperatures, threshhold){
    return temperatures.filter(function(temp2){
 return temp2 > threshhold
});
}
console.log(hottestDays(temperatures, 65));


/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
function logHottestDays(temperatures, threshhold){
const tempsAboveThreshhold = temperatures.filter(function (temp){
    return temp > threshhold
})

    const tempsInCelsius = toCelsius(tempsAboveThreshhold);
    logger(tempsInCelsius);
}
logHottestDays(temperatures, 60);