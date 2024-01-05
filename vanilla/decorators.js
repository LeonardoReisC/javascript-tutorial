"use strict";

// Transparent Caching
{
    function slow(x) {
        console.log(`Called with ${x}`);
        return x;
    }

    function cachingDecorator(func) {
        let cache = new Map();

        return function (x) {
            if (cache.has(x)) {
                return cache.get(x);
            }

            let result = func(x);

            cache.set(x, result);
            return result;
        };
    }

    slow = cachingDecorator(slow);
    slow(1); // Called with 1
    slow(1); // result returned from cache
}

// Using 'func.call' for the context
{
    let worker = {
        someMethod() {
            return 1;
        },

        slow(x) {
            console.log(`Called with ${x}`);
            return x * this.someMethod();
        },
    };

    function cachingDecorator(func) {
        let cache = new Map();

        return function (x) {
            if (cache.has(x)) {
                return cache.get(x);
            }

            let result = func.call(this, x);

            cache.set(x, result);
            return result;
        };
    }

    worker.slow = cachingDecorator(worker.slow);
    worker.slow(1); // Called with 1
    worker.slow(1); // result returned from cache
}

// Going multi-argument
{
    let worker = {
        slow(min, max) {
            console.log(`Called with ${min}, ${max}`);
            return min + max;
        },
    };

    function cachingDecorator(func, hash) {
        let cache = new Map();

        return function () {
            let key = hash(arguments);
            if (cache.has(key)) {
                return cache.get(key);
            }

            let result = func.call(this, ...arguments);

            cache.set(key, result);
            return result;
        };
    }

    function hash(args) {
        return args[0] + "," + args[1];
    }

    worker.slow = cachingDecorator(worker.slow, hash);
    worker.slow(1, 2); // Called with 1, 2
    worker.slow(1, 2); // result returned from cache
}

// call forwarding: passes all args along with the context to another function
{
    let func = function () {};

    let wrapper = function () {
        return func.apply(this, arguments);
    };
}

// Borrowing a method
{
    function hash() {
        return [].join.call(arguments); // this=arguments
    }
    console.log(hash(1, 2, 3, 4, 5)); // 1,2,3,4,5
}
