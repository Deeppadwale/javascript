

// function sayMyName(){
//     console.log("D");
//     console.log("E");
//     console.log("E");
//     console.log("p");
// }

// // sayMyName()

// // function addTwoNumbers(number1, number2){

// //     console.log(number1 + number2);
// // }

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// // console.log("Result: ", result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("hitesh"))
// // console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));





function addTable(n){
    for(let i = n;  i<=n*10; i+=n)
        console.log(i)
 }
// addTable(2)


// function addEven(num){
//     if(num%2==0){
//     console.log("This is even number")
//  }
//  else{
//     console.log("This is odd number")
//  }
// }
// addEven(num);


let obj={
    temperature:"Hot",
    nature:"Good"
};

for(const newobj in obj){
    console.log ( obj[newobj])
}


let myName=["iam","Deep"]

for (const mynewname of myName){
    console.log( typeof mynewname)
}

const a=[1,2,3]
a[3]=4
a.push(5);
console.log(a)

function showmethod(marks){
      let mark=marks ?? 'absent'   // ?? operator return null and undefined
       console.log(mark)

}
showmethod(24)
showmethod()
showmethod(5)


