/*

//variable declarations
//variable name and variable value

var fruit = "apple"
let guviname = "vijay"

//re assigning of names

fruit = "orange"
guviname = "kalil"

//constant name cannot be changed
const studentName = "Mafaaz"

console.log("Fruit name :" ,fruit)//calling the variable name
console.log("Mentor Name :" ,guviname)
console.log("Student Name : ",studentName)
console.log("----------------------------------------------------------------------------------------")

//datatypes
  
//string => character ""
//integer => 1234345
//boolean => true or false
//array => ["string", number,  bool] - collections of data 

//Conditions
console.log("Conditions---------")
// five rupees - chocolates

console.log(5 === "5")//want to check type
console.log(5 == "5")//boolean true condition
// === " check its type of value"
// == " check the value alone  "

var money = 10
if(money >= 5){
    console.log("Big chocolates")
}if(money >=2){
    console.log("Small chocolates")
}else{
    console.log("No chocolates")
}
console.log("----------------------------------------------------------------------------------------")

//looping
console.log("looping------------")
//for loop

//starting   //running  //increment 
for(let i=0; i<=5; i++){
    console.log("i am called :" ,i);
}

console.log("----------------------------------------------------------------------------------------")

//array
console.log("Array------------")
let array = ["kasheef","mafaaz","kalil","kareem"];

    array.push("Nasiha") //To add a value in LAST of array list
    console.log(array);

    array.pop("Nasiha") //To out a value in LAST of array list
    console.log(array);

    array.unshift("rajesh") //To add a FIRST value
    console.log(array);

    array.shift("rajesh") //To remove first value
    console.log(array);

    console.log(array.length) //To find a length
    //index start from 0
    console.log(array[2]) //To get the 2 index value of array

    //we need to select a one by one index of array using for loop
    for(let i=0; i<array.length; i++){ // i++ => i=i+1
        console.log(array[i])
    }
    console.log("-----------------------------------------------------------------------------------------")

    //we need to combine and define a value in for using if condition
    for(let i=0; i<array.length; i++){ // i++ => i=i+1
        if(array[i] == "kasheef"){ //if only there a KASHEEF value
            console.log(array[i],i) // and its  index
        }
    }
    console.log("-----------------------------------------------------------------------------------------")

    // Example 1
    //check tha array list is there any alter name and then add the another name with array list using f0r loop
    let array1 = ["kasheef","mafaaz","kalil","kareem"];  
    for(let i=0; i<array1.length; i++){
        if(array1[i] == "khalidh"){
            console.log(array1[i]);
             break;
        } else {
            array1.push("khalidh");
            break;
        }
    }
    console.log(array1);

    console.log("-----------------------------------------------------------------------------------------")

//functions => set of things done in one block 
// - function keyword
// - function name(){
// - set of operations
// }


function FuncName(){
    //set of operations can be done in one block
    console.log("Hi there")
    console.log("this is kasheef")
    console.log("thankyou")
}
 //function call or invoking
 FuncName();

 //Functions with parameter and arguments
  
 function AddNumbers(num1, num2){
    const sum = num1 + num2;
    console.log(sum)
 }
  //function call or invoking
  AddNumbers(25,25)

//Example 2
//car has a mileage per hour plus speed per hour and fuel capacity.
//a car how long it travel

//we want to approach a problem as "LAYMAN APPROACH"
//mileage = 30 km/liter  speed = 75km/hr   fuel = 5 liter  RemainingHoursOfTravel = ?

function RemainingHoursOfTravel(mileage,speed,fuel){
    const kilometers = mileage * fuel;
    const hoursOfTravel = kilometers/speed;
    console.log(hoursOfTravel)
}
//function calling
RemainingHoursOfTravel(30,75,5)

console.log("-----------------------------------------------------------------------------------------")

//split and join function

let userInput = "Kasheef"
let userInput2 = "Basha"

console.log("The user input : " ,userInput)

let output = userInput.split("");//split
console.log("The output is : " ,output)

let joinOutput = output.join(",");//Join
console.log("The JoinOutput is : " , joinOutput)

let concatValue = userInput.concat(userInput2);//CONCAT- Joining the Two string
console.log("The Concat value is : " , concatValue);

//Alter method for concat
console.log(userInput+userInput2);

let para = "Hey there you failed the test"
console.log("Actual para is : " , para);
 
let replaceValue = para.replace("failed" , "passed");//replacing the value in string
console.log("Replace para is : " , replaceValue);

console.log("-----------------------------------------------------------------------------------------")

//string to integer
//to convert a string into number using => parseInt
console.log("String into number is : " ,parseInt("10")+10);

//to convert a string into number in alter way => BEFORE STRING ADD A PLUS(+) VARIABLE
console.log("String into number using (+)variable : " , +"10"+10);

console.log("-----------------------------------------------------------------------------------------")

//sort a value
let sampleArr = [3,4,5,8,9,2];
let sorterArr = sampleArr.sort();//sorting value in Asscending order
console.log("The Asscending order sorted array : " , sorterArr);

let sorterArr1 = sampleArr.reverse();//sorting value in descending order
console.log("The Descending order sorted array : " , sorterArr1);

console.log("-----------------------------------------------------------------------------------------")

//Example 3
// input = "kasheef basha"
//output =  k
//          a
//          s
//          h
//          e
//          E
//          F
let inputName = "kasheef basha"

let splitValue = inputName.split(" ");
console.log("Split value is : " , splitValue);

let joinInput = splitValue.join("");
console.log("Join value is : " , joinInput);
for(let i=0; i< joinInput.length; i++){
    console.log(joinInput[i])
}

console.log("-----------------------------------------------------------------------------------------")

//Example 4
// input = "30 5 75"
// output = 2

let input = "30 5 75";
let inputSplitValues = input.split(" ");
console.log(inputSplitValues);

let mileage =inputSplitValues[0]
let fuel = inputSplitValues[1]
let speed = inputSplitValues[2]
console.log(mileage,fuel,speed);

let kilometers = mileage * fuel;
let hoursOfTravel = kilometers/speed;
console.log("Hours Travel : ",hoursOfTravel.toFixed(2));//.toFixed(2) => after the decimal point execute 2 numbers

console.log("-----------------------------------------------------------------------------------------")

//To find mathematical caluculation like ROOT we can use => Math.sqrt(3)

// let a = 20;
// let area = 1/4 * (Math.sqrt(3)) * (a*a)

//output given as a decimail point after two digit we can use => .toFixed(2)
//console.log(area.toFixed(2));

console.log("-----------------------------------------------------------------------------------------")

//Example 5
//Output : 9 18 27

let N = 3;
let str = "";

for (let i=1; i<=N; i++){
    str = str + (i*9) + " ";
}
console.log(str.trim()); //To clear the white space we csn use .trim()

console.log("-----------------------------------------------------------------------------------------")

//Example 6
// Input Description:
// A single line containing an integer.

// Output Description:
// Print the even and odd integers of the integer in a separate line.

//Output : 2 4
//         1 3

let a1 = "1234";
let Values = a1.split("").sort(); //Assending to descending order  
console.log(Values);

let odd = "";
let even = "";
for(let i=0; i<a1.length; i++){
    if(a1[i] % 2 == 0){ // modulas % gives remained 0 // 276 line meaning => even number ah irundha
        even = even + a1[i] + " "
    }else{
        odd = odd + a1[i] + " "
    }
}
console.log(even.trim());//To clear the white space we csn use .trim()
console.log(odd.trim());//To clear the white space we csn use .trim()

console.log("-----------------------------------------------------------------------------------------")

//Example 7
// Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

// Input Description:
// Three numbers corresponding to the coefficients of x(squared), x and constant are given as an input in that particular order

// Output Description:
// Print the two values of X after rounding off to 2 decimal places if required.

// Sample Input :
// 1 5 6

// Sample Output :
// -2.00
// -3.00

let A = "1 5 6";
let values2 = A.split(" ");
console.log(values2)

let a = values2[0] 
console.log(a);

let b = values2[1]
console.log(b);

let c = values2[2]
console.log(c);

let formula1 = (-b + Math.sqrt(((b*b)) - (4*a*c))) / (2*a);
let formula2 = (-b - Math.sqrt(((b*b)) - (4*a*c))) / (2*a);

console.log(formula1.toFixed(2));
console.log(formula2.toFixed(2));

console.log("-----------------------------------------------------------------------------------------")

//Example 7
// Input Description:
// A number "A" representing some distance in kilometer is provided to you as the input.

// Output Description:
// Convert and print this value in meters and centimeters.

// Sample Input :
// 2

// Sample Output :
// 2000
// 200000

let km = "2"
console.log(km);

let m = km * 1000;
let cm = km * 100000;

console.log(m);
console.log(cm);

console.log("-----------------------------------------------------------------------------------------")

//Example 8
// Print the First 3 multiples of the given number "N". (N is a positive integer)
// Note: print the characters with a single space between them.
// Input Description:
// A positive integer is provided to you as an input.
// Output Description:
// Print the First 3 multiples of the number with single spaces between them as an output.
// Sample Input :
// 2
// Sample Output :
// 2 4 6

let n = "2"
let sum = "";            
for(let i=1; i<=3; i++){
    sum = sum + (i*n) + " "
}
console.log(sum);

console.log("-----------------------------------------------------------------------------------------")

//Example 9
// Write a code to get the input and print it 5 times.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Output contains 5 lines with each line having the value N.

// Sample Input :
// 4
// Sample Output :
// 4
// 4
// 4
// 4
// 4

let N1 = 4;
for(let i=1; i<=5; i++){
    console.log(N1);
}

console.log("-----------------------------------------------------------------------------------------")

// Write a code get an integer number as input and print the sum of the digits.

//Example 10
// Input Description:
// A single line containing an integer.

// Output Description:
// Print the sum of the digits of the integer.

// Sample Input :
// 124
// Sample Output :
// 7

let intNumber = "124";
let sumOfDigits = intNumber.split("");
console.log(sumOfDigits);

let sum1 = 0;
for (let i=0; i<intNumber.length; i++){
    sum1 = sum1 + (+intNumber[i]);//to convert a string into number in alter way => BEFORE STRING ADD A PLUS(+) VARIABLE

}
console.log(sum1);

console.log("-----------------------------------------------------------------------------------------")

//Example 11  
// Let "C1"  be a string. Remove all the whitespaces and find it's length.

// Input Description:
// A string is provide as an input

// Output Description:
// Remove all the whitespaces and then print the length of the remaining string.

// Sample Input :
// Lorem Ipsum
// Sample Output :
// 10

let C1 = "Lorem Ipsum";
let sampleInput = C1.split(" ");
console.log(sampleInput);
console.log(sampleInput.join(""));
console.log(sampleInput.join("").length);

console.log("-----------------------------------------------------------------------------------------")

//ARRAY Example 12
// You are given with an array. For each element present in the array your task is to print the next smallest than that number. If it is not smallest print -1

// Input Description:
// You are given a number ‘n’ representing size of array. And n space separated numbers.

// Output Description:
// Print the next smallest number present in array and -1 if no smallest is present

// Sample Input :
// 7
// 10 7 9 3 2 1 15
// Sample Output :
// 7 3 3 2 1 -1 -1

let size = 7;
let arr1 = [10,7,9,3,2,1,15]; //reference to check the code in pythonTutor 

console.log(arr1);
let res = [];

for (let i=0; i<size; i++){
    let flag = false;
    for(let j=i+1; j<size; j++){
        if(arr1[j] < arr1[i]){
            res.push(arr1[j]); //it can add a existing array in last so we using array
            flag = true;
            break;
        }
    }
    if(flag === false){
        res.push(-1);
    }
}
console.log(res.join(" "));

console.log("-----------------------------------------------------------------------------------------")

//toUpperCase()
let str = "kasheef"
console.log(str.toUpperCase());//Fully capital letter

//Example 13                                       
// Given a string and a number K, change every kth character to uppercase from beginning in string.
// Sample Testcase :
// INPUT
// string 2
// OUTPUT      
// sTrInG
let input = "string"
let number = 2;      
let str = input.split("");
console.log(str);

if (number != 0){ //not equal to zero
    console.log(input)
}else{
    for(let i=number-1; i<str.length; i=i+number){// i=i+number
        //console.log(str[i],i);
        str[i] = str[i].toUpperCase();
        
    }
    console.log(str.join(""));
}
 
//Example 14
//palindrome or Not

let input = "dogmaiamgod";
let initialValue = input.split("");
console.log("initial Value is : ",initialValue);

let revValue = initialValue.reverse();
console.log("reverse value is : " , revValue);

let joinValue = revValue.join();
console.log("Join value is : " , joinValue);

if(initialValue == joinValue){
    console.log("yes");
}else{
    console.log("No");
} 

//Example 15
// 2 to power of 8

let base = 2;
let power = 8;
let powerOfBase = Math.pow(base,power);// to find the power value
console.log(powerOfBase); 

//Example 16
// you are given with array of numbers.you have to find whether array is beautiful or not. A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5

// Input Description:
// You are given a number ‘n’ denoting the size of array.Next line contains n space separated numbers.

// Output Description:
// Print 1 if array is beautiful and 0 if it is not

// Sample Input :
// 5
// 5 25 35 -5 30
// Sample Output :
// 1

let length = 5;
let arrElements = [5,25,35,-5,30]
console.log(arrElements);

let value = 0;

for(let i=0; i<length; i++){
    console.log(parseInt(arrElements[i]));
    value += arrElements[i];// value = value + arrElements[i]
    console.log(value);
}
// % Modulas => divisible means Zero , nondivisible means number , gives remainder
if(value %2 !=0 || value %3 !=0 || value %5 !=0){          // !=> not , || => or , % => modulas , & => and
    console.log(0)
} else{
    console.log(1)
}

 //Example 17
//  Given a number N print a right angled traingle structure with the starting level as single 1 and every immediate proceeding level with 2 more additional ones than the previous level .Repeat the pattern for N levels.
// Input Size : N <= 1000
// Sample Testcase :
// INPUT
// 3
// OUTPUT
// 1  
// 1 1 1
// 1 1 1 1 1

let input = 3;
let output = ""

for(let i=0; i<input; i++){
    for(let j=1; j<=i; j++){
        output += 1 +" " + 1 +" ";//output = output + 1 //and leaving space
    }
    output += "1";
    output += "\n";// to go to next line
}
console.log(output);


 //Example 18
//  Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
// Sample Testcase :
// INPUT
// 3
// 2 6
// OUTPUT
// yes

let N = 3 ;
let arr = "2 6";
//let R = 6;
let splifOfL = arr.split(" ");
let L = splifOfL[0];
let R = splifOfL[1]
console.log(L,R);

if (N > L && N < R){
    console.log('yes');
} else{
    console.log("No");
}

//same prblm using function
//function -> function Name -> (parameterd) -> {}
function checkInBetween(N,L,R){
    if (N > L && N < R){
        console.log('yes');
    } else{
        console.log("No");
    }
}
//Function calling -> function Name -> (arguments)  ===> arguments means value
checkInBetween(N,L,R);

//Example 19
// Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.
// Sample Testcase :
// INPUT
// 4 2
// 1 2 3 3
// OUTPUT
// yes

//getting input from user
let input_of_N = "4 2";
let input_of_K = "1 2 3 3";

let arr_of_N = input_of_N.split(" ");//[4, 2]
//console.log(arr_of_N)
let arr_of_K = input_of_K.split(" ");//[1, 2, 3, 3]


function check_num(kasheef_of_N, kalil_of_K){

    let flag = false;
    for(let i = 0; i < kasheef_of_N.length; i++){
        //console.log(kasheef_of_N[i])
        for(let j = 0; j < kalil_of_K.length; j++){
            //console.log(kalil_of_K[j])
            if(kasheef_of_N[i] == kalil_of_K[j]){
                flag = true;
                break;
            }
        }
    }

    //condition checking
    if(flag == true){
        console.log("yes!!!!!!!!!!");
    } else {
        console.log("No.............")
    }


}

check_num(arr_of_N, arr_of_K);

//Example 20
// Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.
// Sample Testcase :
// INPUT
// 5 5
// OUTPUT
// yes

let inputOfN = 5;
console.log(inputOfN);

let inputOfM = 5;
console.log(inputOfM);

function isSqrt(num1, num2){
    var productOfValue = num1 * num2;
    var sqrtRoot = Math.sqrt(productOfValue);
    console.log(sqrtRoot)
    if(sqrtRoot % 1 === 0){ //gives remainder is not a squareroot, if remainder gives is a squareroot
        console.log("yes...");
    }else{
        console.log("no...")
    }
}

isSqrt(inputOfN,inputOfM);

//Example 21
// Write a code to get an integer N and print values from 1 till N in a separate line.

// Input Description: 
// A single line contains an integer N.

// Output Description:
// Print the values from 1 to N in a separate line.

// Sample Input :
// 5
// Sample Output :
// 1
// 2
// 3
// 4
// 5
let N = 5;

function print(num1){
    for(let i=1; i<=num1 ; i++){
        console.log(i)
    }
}
print(N);

//Basic Hoisting

1. let and const is a block scope

console.log(a);
var a = 15;
 //output : undefined

 console.log(b);
 let b = 15;
//output : Uncaught ReferenceError: Cannot access 'b' before initialization

console.log(c);
const c = 15;
//output : Uncaught ReferenceError: Cannot access 'c' before initialization

let value = "kasheefbasha";
console.log(value.slice(7));// front to back => omiting the first seven words and gives after words
//Output : basha

let value1 = "kasheefbasha";
console.log(value1.slice(-7));// back to front => omiting the first seven words
//Output : efbasha 

//Example 22

// Given a string S check if is a valid email id based on the following conditions
// 1. @ should be presented
// 2. @ & . should not be repeated; - 1 timer (counter) - only one time - we need to open as GLOBAL
// 3. there should be atleast four characters betwwen @ and .
// 4. there should be atleast 3 characterr before  @
// 5. the end of mail id should be .com
// if its a valid email id prnt "yes " else print "no"
// Input Size : |S| <= 100000
// Sample Testcase :
// INPUT
// test@gmail.com
// OUTPUT  
// yes 

let  validEmail = "test@gmail.com";
function isEmail(str){
    console.log(str)

    let countOfAt = 0;
    let countOfDot = 0;
    let indexOfAt;
    let indexOfDot;

    for(let i=0; i<str.length; i++){
       if(str[i] === "@"){ //@ is there are not - @ iruka illaya
            countOfAt++; //counting the number of at   
            indexOfAt = i; //finding the At value of index

       }else if (str[i] === "."){ //. is there are not - . iruka illaya // we need to check both @ and . so we use else if
            countOfDot++; //counting the numbers of dot
            indexOfDot = i; //finding the Dot value of index
       }
        
    }

    if(
        countOfAt === 1 && //countOfAt one dan irukanum
        countOfDot === 1 && // countOfDot one dan irukanum
        (indexOfDot - indexOfAt) >= 5  && //finding inbetween . and @ , inbetween 4 characters
        (indexOfAt >= 3) && // test@ => 0 1 2 3 ===> atleast 3 characterr before  @
        str.slice(-4) === ".com" // . c o m => 1 2 3 4 and it should be equal to .com so we are using === ".com"
      ) {
        console.log("valid emailId ---- yess");
      } else{
        console.log("Invalid emailId ---- no");
      }

    console.log(countOfAt);
    console.log(countOfDot);

}

isEmail(validEmail)

//Example 23
// A person saves his monthly saving according to given schema. He saves same amount of money which is equal to the money saved in immediate previous two months. Assume, initially he saved 1000 rupees and in first month he saved another 1000. Your task is to tell how much he had totally saved at the end of ‘n’ months

// Input Description:
// You will be given a number ‘n’->No. of months

// Output Description:
// Print the total savings at the end of ‘n’ months

// Sample Input :
// 1
// Sample Output :
// 2000

 let month = 1 ;
 let initialSaving = 1000;
 let latestSaving = 0;
 let overAllSaving = 0;

 for (let i=1; i<=month; i++){
    latestSaving =  1000*i; //1000
    overAllSaving = latestSaving + initialSaving; //2000
    initialSaving = overAllSaving; //2000
 }
console.log(overAllSaving);

//Example 24
// Simi is learning about palindromic numbers. Her teacher gave him the task to count all palindromic numbers present in that range.Simi has told you about this and want your help. You design an algorithm in order to help simi.

// Input Description:
// You will be given a number ‘n’

// Output Description:
// Print the count of all palindromic numbers till ‘n’(inclusive)

// Sample Input :
// 5
// Sample Output :
// 5

let input = "10";

function noOfPalindromes(num){

    let counter = 0;
    for(let i=1; i<=num; i++){ // 1 2 3 4 5 6 7 8 9
        let convertNumber = i.toString(); // 1-> "1"
        let reverseNumber = convertNumber.split("").reverse().join(""); // "1"
        
        if(convertNumber === reverseNumber) {//"1" === "1" - num and reverseNum both are equal ah irundhuchu nah
            counter++; // 1 - adding 1 in overall counter  
        }
        }      

        console.log(counter);
    }


noOfPalindromes(input);  

// JAVA SCRIPT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  primitive datatypes :

//  String (value)
//  Boolean (value)
//  Number (value)
//  Float (value)

//  non primitive datatypes :

//  Array (address)
//  object (address)

// Array - collection of data

const arr = ["kasheef","kalil","mafaaz"]
console.log(arr);
//accessing the array
console.log(arr[1]);

//adding last value in array
arr.push("kareem");
console.log(arr);

//deleting last value in array
arr.pop("kareem");//no need to specify the value
console.log(arr);

//adding first value in array
arr.unshift("khalidh");
console.log(arr);

//remove first value in array
arr.shift("khalidh");
console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// objects - (key : value) 

const studentObj = 
{
    name : "kasheef",
    age : 21,
    isStudent : true
}
console.log(studentObj);
//accessing the object or iteration using key.....(dot operations)
console.log(studentObj.name)
console.log(studentObj.age)
console.log(studentObj.isStudent)

//changing the values in objetc
console.log(studentObj);
studentObj.name = "kalil";
studentObj.age = 25;
studentObj.isStudent = false;
console.log(studentObj);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Nested array of objects - multiple data can stored

const arrOfObjects = [
{
    name : "kasheef",
    age : 21,
    isStudent : true,
    stack : ["html", "css", "js"]
},

{
    name : "mafaaz",
    age : 12,
    isStudent : true,
    stack : ["html", "css"]
}

]
console.log(arrOfObjects);
console.log(arrOfObjects[0]);//first value of array using Index
console.log(arrOfObjects[0].name);//accessing the object
console.log(arrOfObjects[0].stack);//accessing the object in array
console.log(arrOfObjects[0].stack[2]);//accessing the object in array using index
console.log(arrOfObjects[1].stack[1]); //task

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//copy by value and copy by reference

//copy by value ................()
// It has seperate memory values
//call by vaue has different addresses
//primitive datatype

var a = 15; //12hyhjys67 - different addresses
var b = a;  //23gdjkla78 - different addresses
console.log("b :" ,b)//15
console.log("a :" ,a)//15

b = 20;

console.log("b :" ,b);//20
console.log("a :" ,a);//15

//copy by reference ................()
//call by reference has same addresses
//non primitive datatype

let a1 = {value : 15};  // 12ghjkl12 - same addresses
let b1 = a1;            // 12ghjkl12 - same addresses

console.log("b1 :", b1);//15
console.log("a1 :", a1);//15

b1.value = 20;

console.log("b1 :", b1);//20
console.log("a1 :", a1);//20

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//window property
// console.log(window);
// console.log(window.alert);
// window.alert("hey error plz.."); //alert message

//document 
console.log(window.document);
console.log(document);

//XML HTTP request

let xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET","https://restcountries.com/v3.1/all"); //Api data getting from restcountries to our side
xhr.send(); //sending the request
xhr.onload = function(){ //onload calling function
    const data = JSON.parse(xhr.response) //getting in JSON format data
    console.log(data);
    console.log(data[0]);//index 
    console.log(data[0].name); //getting name in 0th index
    console.log(data[0].name.official); //getting full 0th data anything 

    console.log(xhr.response); //getting response to our side
    console.log(xhr.status); //viewing status

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Hoisting - variables and function declarations are moved to the top of their scope before code execution.

d();
console.log(a); //hoisting
var a = 15;
console.log(a);

function c(){
    var b = 20;
    console.log(b)
}

c();

function d(){
    var d = 26;
    console.log(d);

}
// output :

// 26
// undefined
// 15
// 20

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// functions working in JS
// function statement or declaration

function name (){
    console.log("the name is Kasheef")
}
name();

//function expression - declaring tha variale function and then call the function is known as function expression
var name1 = function (){
    console.log("hi there")
}
name1();

// parameter and arguments
var inputNames = "kasheef"
function name2(a){
    console.log("hello world")
    console.log(a);
}
name2(inputNames);

//first class function - Ability of calling function inside a function....................................................................

function addition(num){
    return num+num
}

function displayFunction(fn){ // first class function
    console.log("The called function is: " , fn(10))
    return fn(10); // we can return the function too
}

displayFunction(addition);
console.log(displayFunction(addition));

// Annonomous function - without function name is called annanomous function...............................................................

var names = function (){
    console.log("Hi Kasheef")
}
names();

//imediately invoking function Exptression - IIFE............................................................................................

(function multiply(num){
    console.log(num*num);
})(9) //-we can wrap and call imediately 

// Arrow Function.............................................................................................................................

 var a = (num) => {
    return num * 2;
}

console.log("The Arrow function is : " , a);

//alter method

var arrow = (num1) => num1 * 2;

console.log("The arrow function is : " , arrow(5));


*/

// console log functions.......................................................................................................................

const log = (param) => console.log(param);

log("hey how are you guys...................");

// FOR ITERATIVES..............................................................................................................................

const studentArr = ["kasheef", "kalil" ,"mafaaz", "suhail", "khalidh"];

for(let i=0; i<studentArr.length; i++){
    console.log(studentArr[i], i); //value and index
}

const studentObj = 
{
    name : "kasheef",
    age : 21,
    isStudent : true
}
var studentKeys = Object.keys(studentObj); //getting only keys
console.log("Keys are : " ,studentKeys);

var studentValues = Object.values(studentObj); //getting only values
console.log("values are : " ,studentValues);

//accessing with keys using for loop
for (let i=0; i<studentKeys.length; i++){
    console.log(studentKeys[i] , studentObj[studentKeys[i]]);// object kulla itereate pandrathu
}

//accessing only values
for (let i=0; i<studentValues.length; i++){
    console.log(studentValues[i]);
}
//we need to take for loop first value should be there in Array method

console.log(studentObj["name"] , studentObj["age"] , studentObj["isStudent"]);//mapping method - giving the string of names

log("....................for each, for in, for of .....................")
log("....................for each.....................")

// for each - array
// for in - object
// for of - string

//forEach has three parameter (value, index ,actualArr)
//only accessible for array
 
studentArr.forEach((value, index, actualArr) => {
    console.log(value , index , actualArr);
    
})

studentKeys.forEach((val, idx, accArr) => {
    console.log(studentObj[val]);
})

log("....................for in.....................")
// accessible for objects
// in array only index
//best used IN iterating a object value

for (s in studentArr){
    console.log(s);
}

//in object iterations  

for(obj in studentObj){
    console.log("keys are : " ,obj);
    console.log("values are : " ,studentObj[obj]);
    console.log("keys : " ,obj , "values : ",studentObj[obj]);
}

// in object iteration can change the values of array using condition

console.log(studentObj);

for(obj in studentObj){
    if (studentObj[obj] == "kasheef"){
        studentObj[obj] = "Ruqaiyah"
    }
}
console.log(studentObj);                         

log("....................for of.....................")
// array , string
//best used OF iterating a array and string

var stringer = "stringer";

for (arr of studentArr){
    console.log(arr, studentArr[arr]);
}

for (str of stringer){
    console.log(str)
}

//JSON is nothing but is a objec
//javascript object notation b
























































































