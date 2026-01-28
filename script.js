let userName='maureen';
let userAge= 28;
let isLoggedIn='true'
let selectedCourse= 'null'
//the console
console.log(userName)
console.log(userAge)
console.log(isLoggedIn)
console.log(selectedCourse)
//loops
//using a for loop,print each fruit in the array
let fruits = ['apples','banana','mango'];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
let lives=3;
while(lives>0) {
    console.log('you have' + lives +' lives lost');
    lives--
}
let attempt=false;
do{
    console.log('try again');
    }while(attempt>0)
    

    let numbers=[1,2,3,4,5]
    for(let num of numbers){
        console.log(num);
    }
    //comparison operators
    //1.>
    5 > 10
    5 < 10
    5<=10
    5>=10
    'true'!==true
    //logical operators combine 2 conditions and test them.Both sides are suppossed to be either true or false if you use&&
    //using || don't really matter
    //and=&&
    //or=||
    let myKeys=true;
    let myPhone=false;
    console.log(myKeys||myPhone)
    let myWallet=true
    let mySide=false
    console.log(myWallet && mySide)
//!reverses
console.log(!myKeys&&!myPhone)
//ternary operator
let sunny=true
if(sunny){
    console.log('go swim')

}else{
    console.log('bring an umbrella')

}
let age=18
if(age<=18){
    console.log('vote')
}else{
    console.log('nope')
}
let vote= age >=18 ? 'vote': 'nope'
console.log('vote')
//65. is a ternary operator









let results=75;
if(results >=90){
    console.log('A')
}else if(results >=80){
    console.log('B')
}else if(results >=70){
    console.log('C')

}
else{console.log('F')}
let final= results >=90 ? 'A':'F'
console.log(75)



