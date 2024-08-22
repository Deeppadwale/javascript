
//object literal 


const jsNew={
    name:"Deep",
    age:24,
    email:"deeppadawale@gmail.com"
};

console.log(jsNew.email)
console.log(jsNew["email"])



jsNew.greating=function(){
    console.log(`hellow deep ${this.email}`)
}
console.log(jsNew.greating())
console.log(jsNew.greatingTwo())
