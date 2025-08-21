// if(true){
//     var varVariables = "this is true";
// }

// console.log(varVariables);

//output: this is true;
//because var has functional scoped.if there is no function it is going to be global.That's why it is available to the outside from the if block;
// if(true){
//     let letVariable = "this is ture";
// }

// console.log(letVariable);

//output: variables.js:13 Uncaught ReferenceError: letVariable is not defined;Because let has blocked scoped.It is only available to the if block;

/**********************************************************************/
// if(true){
//     var varVariables = "this is true";
// }
// var varVariables = "this is false";
// console.log(varVariables);

//Output: this is false; We can re-declar variables with var keyword.

// let letVariable = 'this is ture';
// let letVariable = 'this is false';

//Output: Uncaught SyntaxError: Identifier 'letVariable' has already been declared; We can not re-declar with let keyword;

/**************************************************************** */
// console.log(varVariable);
//Output: undefined;
// var keyword allow us to use variables before declare.that's why it is undefined;

// var varVariable = true;
// console.log(varVariable);
//Output: true;

/**************************************************************** */

// console.log(letVariable);
// let letVariable = true;
//Output: Uncaught ReferenceError: letVariable is not defined;
//// let keyword don't allow us to use variables before declare.that's why it is Uncaught ReferenceError;

// console.log(cosntVariable);
// const constVariable = true;
//Output: Uncaught ReferenceError: constVariable is not defined;
//// const keyword don't allow us to use variables before declare.that's why it is Uncaught ReferenceError;

/**************************************************************** */
// const constValue = 1;
// constValue = 1;
//Uncaught TypeError: Assignment to constant variable.Because const keyword for the contant value. We can not change the const value;

// let letValue = 1;
// letValue = 20;
// console.log(letValue);

// const xx = 30;
// let firstvalue = 2;
// firstvalue = 10;
// firstvalue = firstvalue + xx;
// console.log(firstvalue);
//Output: 40; Because let keyword allow us to re assign value;

/**************************************************************** */
// const objValue = {name: 'Bob'};
// objValue.name = 'kamal';
// console.log(objValue);
//output: {name: 'kamal'};
//we can not change the "objValue" this varibale value but we can change its property when variable value is object.

