//----------------------------------- Assignment 4 -----------------------------------//


/*
1. What is the difference between instance methods and static methods?
    Instance methods:
        Instance methods are member function defined in an object and they are intended to be called on instances of a class.
        They have access to get and modify instances's properties.
    Static methods
        Static methods are functions defined on the class and they are not confined to any specific instance.
        They do not have access to get and modify instance properties because they are not called on instances.


2. How does Javascript handle concurrency?
    Javascript handles concurrency by asynchronous programming and event loop which includes call stack, callbacks, and web apis.

3. What is async/await? How does it differ from using the promise instance methods?
    Async/await is a syntactic feature allowing asynchronous function to be structured and behave like synchronous code.
    They are built on top of promises and provide a cleaner and more readable way to handle synchronous operations.
    On the other hand, promise instance methods require using .then() and .catch() methods resulting in nested and complicated code.


4. Can you use await outside of an async function?
No.

5. What is callback hell and why is it considered a problem?
    Callback hell is a nested callback functions used in asynchronous operations. 
    Callback hell is often deeply nested and it's difficult to read and maintain.

*/