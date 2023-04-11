"use strict";

// java script --
// scoping --
// lexical scoping --
// scope --
// scope chain --
// hoistion --

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // java script //

// // javascript is a high level , prototype based , object oriented , multi-paradian , iterpreted or just-in-tume (JST) compiled , dynamic , sungle threadded ,garbage collected , programming language with first class function and non blocking event loop concurrency model . //

//============================================================================================================================================//

// // high-level language - high-level programming language is a language that is more user-friendly and closer to human-readable language than machine code. High-level languages provide programmers with a more abstracted and easy-to-understand syntax for writing software code. They typically use common words and mathematical symbols to represent programming instructions, making it easier for programmers to read, write, and understand the code. Examples of high-level programming languages include Python, Java, JavaScript, Ruby, and C#. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // low-level language - Low-level programming languages are programming languages that are close to machine language, the language of the actual computer hardware. Low-level languages have a concise set of instructions that map directly to the machine's basic operations, such as reading and writing to memory and performing arithmetic operations. Examples of low-level programming languages include assembly language and machine code. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// //  garbage-collector - In computer science, a garbage collector is a mechanism that automatically manages memory in a programming language. It tracks which memory is being used and which is not, freeing up unused memory so that it can be reused by other parts of the program. This prevents memory leaks and makes programming in the language more convenient for the programmer, as they do not have to manually manage memory allocation and deallocation. Garbage collectors can be found in many high-level programming languages such as Java, Python, and Ruby. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // memory allocation - In programming, memory allocation refers to the process of reserving a portion of the computer's memory for the execution of a program or application. The memory allocated is used to store variables, data structures, objects, and other program components while the program is running. Memory allocation can be done in two ways: static and dynamic. Static memory allocation is when the memory is allocated at compile time and remains fixed throughout the program's execution. Dynamic memory allocation, on the other hand, is when memory is allocated at run time, and the size can be changed during the program's execution. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // interpreted language - An interpreted language is a programming language where the source code is not compiled before running the program, but rather interpreted line by line at runtime. In an interpreted language, the program is executed directly by the interpreter, without the need for an intermediary object file or machine code. Examples of interpreted languages include Python, Ruby, JavaScript, and Perl. Interpreted languages are generally slower than compiled languages, but they offer the advantage of being more flexible and easier to use, as they allow developers to quickly test and modify code. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // compiled language - A compiled language is a programming language where the source code written by the programmer is transformed into machine code, which can be executed by a computer. This process is done using a compiler program that converts the human-readable code into a binary format that the computer can understand directly without the need for an interpreter. Some examples of compiled languages include C, C++, Java, and Swift. The advantages of compiled languages include faster execution times and better optimization, while the disadvantages include longer development times due to the compilation process and potential platform dependencies. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // just-in-time - Just-in-time (JIT) programming languages are languages that combine aspects of both interpreted and compiled languages. In JIT languages, the code is initially compiled into bytecode or machine code, but it is not executed immediately. Instead, the code is compiled on-the-fly, as it is needed during runtime. This allows JIT languages to optimize the code for the specific system that it is running on, leading to faster performance. It also allows for dynamic features such as just-in-time code generation and hot-swapping of code at runtime. Some examples of JIT programming languages include Java, Python, and JavaScript. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // multi-paradigm - A multi-paradigm programming language is a programming language that supports more than one programming paradigm, which is a way of approaching and solving problems using programming concepts and principles. For example, a multi-paradigm programming language may support imperative, functional, object-oriented, and logical programming paradigms. This flexibility allows programmers to use the most appropriate programming paradigm for a given problem, which can make code more modular, reusable, and maintainable. Some examples of multi-paradigm programming languages include Python, Java, C++, and JavaScript. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Procedural - Procedural programming is a programming paradigm in which the program is structured around procedures, also known as routines or subroutines. Procedures are reusable blocks of code that can be called by the main program or other procedures to perform a specific task. In procedural programming, the focus is on solving problems by breaking them down into smaller, more manageable parts that can be solved one at a time. The program is written as a series of procedures that interact with each other to solve the problem at hand. These procedures often take input, perform some computation, and return a result. Procedural programming languages include C, Pascal, and Fortran. While other programming paradigms such as object-oriented programming have gained popularity in recent years, procedural programming is still widely used in certain domains, such as scientific computing and systems programming. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // object-oriented-programming - OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes code into objects that can interact with one another. Each object has data and behavior, represented by its attributes and methods, respectively. OOP is based on the concepts of encapsulation, inheritance, and polymorphism. Encapsulation refers to the practice of bundling data and behavior into a single object and preventing direct access to that object's data from outside the object. Inheritance allows objects to be based on other objects, inheriting their attributes and methods. Polymorphism refers to the ability of objects to take on multiple forms or behaviors, depending on the context in which they are used. OOP provides many benefits, including code reuse, easier maintenance, and better organization of code. Some popular programming languages that support OOP include Java, Python, and C++. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Functional-programming - Functional programming is a programming paradigm that emphasizes the use of pure functions, which means that functions have no side effects and always return the same output given the same input. In functional programming, data is treated as immutable and transformations are performed by creating new data rather than modifying existing data. Functional programming languages often provide higher-order functions, which allow functions to be passed as arguments and returned as values. Common examples of functional programming languages include Haskell, Lisp, and Clojure, while many other languages such as JavaScript and Python also support functional programming concepts. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Prototype-based object-oriented - Prototype-based object-oriented programming is a style of object-oriented programming where objects are not instances of a class, but rather are created by cloning existing objects that serve as prototypes. Each object contains a reference to its prototype object, and it inherits its properties and methods. In JavaScript, for example, objects are created using constructor functions, and the prototype property of the constructor function is used to define the shared properties and methods of all instances created by that constructor function. Objects created from the constructor function inherit these properties and methods through the prototype chain.Prototype-based programming allows for more flexible and dynamic object creation, as objects can be modified and extended at runtime. However, it can also be more difficult to reason about the behavior of objects, as their properties and methods are not explicitly defined in a class. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // first-class-functon - In programming language, a function is said to be first-class if it can be assigned to a variable, passed as an argument to other functions, and returned as a value from a function. In other words, first-class functions can be treated like any other value in the language. They can be manipulated and passed around in the same way as integers, strings, or arrays. This concept is important in functional programming, where functions are often used as building blocks to create complex operations. Having first-class functions allows for greater flexibility and expressiveness in code, as functions can be composed and reused in many different ways. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Dynamic-programming-languages - Dynamic programming languages are programming languages that execute at runtime, and their behavior can change during runtime. In these languages, variable types are determined at runtime, and the code is compiled at runtime. This allows for more flexibility and interactivity in programming, but can also result in slower performance and more runtime errors if code is not properly tested. Examples of dynamic programming languages include Python, Ruby, and JavaScript. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // single-threaded - In computing, single-threaded refers to the execution of a single sequence of instructions in a program at a time. It means that only one set of instructions is processed at a time and the program executes each instruction sequentially, one after another, until the program completes or an interruption occurs. Single-threaded programs can be simpler to write and debug, but they may not take full advantage of modern multi-core processors and can suffer from performance issues when dealing with complex or time-consuming tasks. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Concurrency-model - Concurrency model refers to how a programming language or framework handles multiple tasks or processes executing at the same time. In general, concurrency refers to the ability of a program to perform multiple tasks concurrently, while parallelism refers to the ability to perform multiple tasks in parallel. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Non-blocking event loop concurrency-model - Non-blocking event loop concurrency model is a programming model that is used by JavaScript and some other languages to handle I/O operations in a non-blocking way. In this model, the program's execution is event-driven and non-blocking. This means that the program does not wait for I/O operations to complete, but instead registers a callback function that is called when the I/O operation is complete. The event loop is a mechanism used by the JavaScript runtime to manage events, callbacks, and other asynchronous operations. It continuously monitors the program's execution and event queue, and processes events and callbacks as they are added to the queue. This allows the program to handle many I/O operations in parallel without blocking the execution of other code. One of the benefits of the non-blocking event loop model is that it can handle many I/O operations without the need for multiple threads or processes, making it more efficient in terms of memory usage and performance. However, it requires careful handling of asynchronous code to avoid problems such as callback hell and race conditions. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // callstack (js engine) - In JavaScript, a call stack is a mechanism for keeping track of function calls during program execution. It is a data structure that stores information about the active functions in a program at any point in time. When a function is called, it is added to the top of the call stack. The function is then executed, and any further function calls are added to the top of the stack. When a function returns, it is removed from the stack, and control is passed back to the calling function. The call stack helps to ensure that functions are executed in the correct order and that function calls do not cause memory errors. It also allows for the easy tracking of program flow and debugging of errors. However, the call stack has a limited size, and if too many functions are called without returning, the stack can overflow, causing a stack overflow error. This can happen if there is an infinite recursive loop or if a large number of nested function calls are made. Understanding the call stack is important for JavaScript developers, as it can help to identify and fix errors in code. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // heape (js engine) - In JavaScript, the heap is a region in memory where objects are allocated during runtime. The heap is managed by the JavaScript engine's garbage collector, which automatically deallocates objects that are no longer referenced by the program. When a JavaScript program is executed, the engine allocates memory on the heap for objects such as arrays, objects, and functions. The size of the heap is limited by the available memory on the machine running the program. The heap is organized as a large, contiguous block of memory, with objects allocated on it in a dynamic, unpredictable way. The JavaScript engine's garbage collector periodically scans the heap to find and deallocate objects that are no longer referenced by the program. This process is automatic and transparent to the programmer, allowing them to focus on writing code without worrying about memory management. Overall, the heap is an essential component of the JavaScript runtime environment, providing a dynamic and flexible way to manage memory during runtime. //
//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // scoping //

// // scoping - Scoping in JavaScript refers to the rules that determine where variables, functions, and objects are accessible in your code. In other words, scoping determines the accessibility and visibility of variables and functions in different parts of your code. JavaScript has two types of scoping: global scoping and local scoping. In global scoping, variables and functions are accessible from anywhere in your code. In local scoping, variables and functions are only accessible within a specific block of code, such as a function or loop. JavaScript uses lexical scoping, which means that the scope of a variable is determined by its location within the code. Variables declared outside of a function have a global scope, while variables declared inside a function have a local scope. Scoping is important in JavaScript because it helps prevent naming collisions, ensures code organization, and enables encapsulation. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // lexical scoping //

// // lexical scoping - Lexical scoping, also known as static scoping, is a concept in programming that describes how variables are resolved in a nested structure of functions. It defines how variable names are resolved at compile-time based on their location in the source code. In JavaScript, each function creates its own lexical scope, which is the set of variables that are accessible within that function. When a variable is referenced inside a function, the JavaScript engine looks up the scope chain to find the value of the variable, starting with the current function's scope and working its way up the chain of enclosing functions until it finds a match. If the variable is not found in any of the scopes, a ReferenceError is thrown. This behavior allows for encapsulation of variables and functions within the scope of their parent functions, preventing naming conflicts and allowing for more modular code. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // scope //

// // scope - Scope refers to the set of variables, functions, and objects that are accessible in a particular area of a code. The scope determines which variables are available for use in different parts of the code. In JavaScript, there are two main types of scope: global scope and local scope. //

// // types of scope - 1. global scope , 2. function scope , 3. block scope. //

//============================================================================================================================================//

// // global scope //

// // global scope -  variables declared Globally (outside any function) have global Scope. global variables can be accessed from anywhere in a JavaScript program. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const studntName = "Tumpa"; // global scope. //

// // we can call this studentName variable from anywhere in the javaScript program. //

//============================================================================================================================================//

// // function scope //

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

// // block scope //

// // Block scope restricts the variable that is declared inside a specific block, from access by the outside of the block. //

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

// // scope chain //

// // scope chain - In JavaScript, the scope chain refers to the hierarchy of variable scopes that are available to a piece of code at any given point in time. When a variable is referenced in a function or block of code, JavaScript first looks for the variable in the local scope, and then works its way up the chain of enclosing scopes until it finds the variable or reaches the global scope. The scope chain is determined by the way that functions are nested within one another in JavaScript. When a function is defined within another function, the inner function has access to variables in the outer function's scope, as well as variables in any outer scopes that enclose it. This creates a chain of nested scopes that JavaScript uses to resolve variable references. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // scope of a variable - The scope of a variable refers to the region of the program where the variable can be accessed. In JavaScript, variables declared using var, let, or const have different scopes. Variables declared using var have function scope, which means they can be accessed anywhere within the function where they are declared. If a variable is declared outside of any function, it has global scope, and can be accessed from anywhere in the program. Variables declared using let or const have block scope, which means they can be accessed only within the block where they are declared. A block is any code within curly braces { }, such as a function, a loop, or an if statement. It's important to understand the scope of variables in order to avoid unexpected behavior in your code. If you try to access a variable outside of its scope, you will get a reference error. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const firstName = "Tumpa";

// function first() {
//   const age = 25; // function scope. //

//   if (age >= 18) {
//     const NID = true; // block scope. //
//     var passport = true; // function scope. //
//     // a variable decleared using var can be accessed from anywher in the function (first()). //
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

// // hoistiog //

// // Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their respective scopes during the creation phase of the JavaScript execution context. This means that even if a variable or function is declared later in the code, it can still be accessed before its actual declaration. However, it's important to note that only the declarations are hoisted, not the actual assignments. //

//============================================================================================================================================//

// // funvtion declaration is hoisting supported but function expration and arrow function does not support hoistion. //

//============================================================================================================================================//

// a variable declared by const and let does not support hoisting means we can't access the variable before declaring it. a variable declared by var dose support hoistin but the value is undefined. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(age);
// var age = 20; // value "undefined" //

//============================================================================================================================================//

// // Temporal Dead Zone - TDZ is the period of time during which the let and const declarations cannot be accessed. temporal Dead Zone starts when the code execution enters the block which contains the let or const declaration and continues until the declaration has executed. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // this keyword //

// // In JavaScript, this refers to the object that the function belongs to or the object that is currently being operated on.The value of this is determined by how the function is called, and it can have different values depending on the context in which it is used. //

// 1. Global context: If this is used outside of any function or object, it refers to the global object (i.e. window in a browser or global in Node.js). //

// 2. Function context: If this is used inside a function that is not a method of an object, it refers to the global object by default. However, if the function is called with a specific context (using call() or apply()), this will refer to that context. //

// 3. Method context: If this is used inside a method of an object, it refers to the object itself. //

// 4. Constructor context: If this is used inside a constructor function (a function that is used to create new objects), it refers to the new object that is being created. //

//It's important to be aware of how this works in JavaScript, as it can affect how your code behaves and can lead to unexpected results if not used correctly. //

//============================================================================================================================================//

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

// const compiter = {
//   clockspeed: 3.9,

//   turboFan: () => {
//     return this.clockspeed * 99;
//     // "this" keyword does not work is arrow function. //
//   },
// };

// console.log(compiter.turboFan());

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // closures //

// // In JavaScript, a closure is created when a function is defined within another function, and the inner function has access to the outer function's variables and parameters even after the outer function has returned. Closures are useful for creating private variables and encapsulating code. They allow the inner function to access the state of the outer function, even after it has completed execution. Closures can also be used to create factory functions that generate new functions with specific behavior. In simple terms, a closure is a function that has access to variables in its outer (enclosing) scope, even after the outer function has finished executing. //

//============================================================================================================================================//

const refregarator = function () {
  let coke = 5;

  const mini = function () {
    if (coke <= 0) {
      console.log("No mere cokes left");
    } else {
      console.log(coke--);
    }
  };
  return mini;
};

const drink = refregarator();

drink();
drink();
drink();
drink();
drink();
drink();
drink();
drink();
