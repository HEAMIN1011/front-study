//operator
//oper01.js

let x = 10;
let y = 10;
let z = '10';

console.log(x == y);  //t
console.log(x == z);  //t
console.log(x === y); //t
console.log(x === z); //f
// != !==


console.log( 1==1 && 2==2);
// A && B 둘다 참 -> 참
// A || B 둘다 거짓 -> 거짓


console.log( 1==1 && 10); //10 
console.log(1!=1 && 10); //f  거짓이니까 뒤로 넘어갈 필요 ㄴㄴ 어차피 F

console.log(1!=1 || 20); //20  거짓이면 뒤로 넘어가서 실행ㅇㅇ
console.log(1==1 || 20); //t

//조건 참 -> A 실행
let a = 10;
//조건 a == 10이면 -> A 실행

if(a == 10){
    console.log("A");
}

a == 10 && console.log("A");  //앞에가 참이면 뒤 실행함



let q = 10;
let w = '20';
let e = 30;

console.log(q+w);
console.log(q+e);
console.log(q+' ' + e);

console.log(q+ String(e));
console.log(q+ Number(w));

console.log(number("123"));
console.log(number("123.456"));