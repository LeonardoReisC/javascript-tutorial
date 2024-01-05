"use strict";

// 'var' has no block scope
{
    if (true) {
        var a = true; // global-scoped
    }
    console.log(a); // true,

    for (var i = 0; i < 10; i++) {
        var one = i; // global-scoped
    }
    console.log(i); // 10
    console.log(one); // 9

    function sayHi() {
        if (true) {
            var phrase = "Hi!"; // function-scoped
        }
        console.log(phrase); // Hi!
    }
    sayHi();
}

// 'var' can be declared below their use
{
    function sayHi() {
        phrase = "Hi!";

        console.log(phrase); // Hi!

        var phrase; // hoisting: raised to the top
    }
    sayHi();
}
{
    function sayHi() {
        phrase = "Hi!";

        console.log(phrase); // Hi!

        if (false) {
            var phrase; // also works, code blocks are ignored
        }
    }
    sayHi();
}

// IIFE: a way to emulate block-level visibility
{
    // parentheses around function
    (function() {
        console.log('way 1');
    })()
    
    // parentheses around the whole thing
    (function() {
        console.log('way 2');
    }())

    // bitwise NOT operator
    !function() {
        console.log('way 3');
    }()
    
    // unary plus
    +function() {
        console.log('way 4');
    }()
}
