"use strict";

// scoping // line (10-14)
// lexical scoping // line (16-20)
// scope // line (27-75)
// scope chain // line (82-107)
// hoistion // line (123-131)
//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // scoping

// // scoping - scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // lexical scoping

// // lexical scoping - lexical scope is the definition area of an expression. In other words, an item's lexical scope is the place in which the item got created. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // scope

// // scope - scope is a space or area or environment in which a certain variable is declared. //

// // types of scope - 1. global scope , 2. function scope , 3. block scope. //

//============================================================================================================================================//

// // global scope

// // global scope -  variables declared Globally (outside any function) have global Scope. global variables can be accessed from anywhere in a JavaScript program. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const studntName = "Tumpa"; // global scope. //

// // we can call this studentName variable from anywhere in the javaScript program. //

//============================================================================================================================================//

// // function scope

// // function scope - variable declared inside any function have function scope. function variabele can not be accessed outside the function block. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function doMath(x, y) {
//   const sum = x + y; // function variable //
//   // sum variable can't be accessed outside the block. //
//   return sum;
//   // if we use "use strict" then the function scope will act like a block scope. //
// }
// console.log(doMath(2, 4));

//============================================================================================================================================//

// // block scope

// // this scope restricts the variable that is declared inside a specific block, from access by the outside of the block. //

//--------------------------------------------------------------------------------------------------------------------------------------------//
// const age = 18;

// if (age === 18) {
//   const birthYear = 2022 - 18; // birthYear is a block scope. //
//   console.log(birthYear);
// } else {
//   console.log(false);
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // scope chain

// // scope chain - one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope. //

// // scope of a variable - scope of a variable is the place from where a variabel is being colled. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const firstName = "Tumpa";

// function first() {
//   const age = 25; // function scope. //

//   if (age >= 18) {
//     const NID = true; // block scope. //
//     var passport = true; // function scope. //
//     // a variable decleared using var can be accessed from anywher fron the function (first()). //
//   }

//   function second() {
//     const job = "Programmer"; // function scope. //
//     console.log(`${firstName} is a ${age} years old ${job}.`);
//   }
//   second();
// }
// first();

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // hoistion

// // javaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared. //

//============================================================================================================================================//

// // funvtion declaration is hoisting supported but function expration and arrow function does not support hoistion. //

//============================================================================================================================================//

// a variable declared by const and let does not support hoisting means we can't access the variable before declaring it. a variable declared by var dose support hoistin but the value is undefined. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(age);
// var age = 20; // value "undefined" //

//============================================================================================================================================//

// // temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed. temporal Dead Zone starts when the code execution enters the block which contains the let or const declaration and continues until the declaration has executed. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // this keyword

// // in JavaScript, the 'this' keyword refers to an object. which object depends on how this is being invoked (used or called).the this keyword refers to different objects depending on how it is used. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const tumpaObj = {
//   fullName: "tumpa",
//   birthYear: 1996,

//   clacAge: function () {
//     return 2022 - this.birthYear;
//     // this refers to tumpaObj //
//   },
// };

// console.log(tumpaObj.clacAge());

//--------------------------------------------------------------------------------------------------------------------------------------------//
