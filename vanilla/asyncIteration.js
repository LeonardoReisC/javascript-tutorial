"use strict";

/**
 * Async iterables
 * next() must return a promise (to be fulfilled with the next value)
 *  */
{
    let range = {
        from: 1,
        to: 5,
        [Symbol.asyncIterator]() {
            return {
                current: this.from,
                last: this.to,

                async next() {
                    // delay
                    await new Promise((resolve) => setTimeout(resolve, 1000));

                    if (this.current <= this.last) {
                        return { done: false, value: this.current++ };
                    } else {
                        return { done: true };
                    }
                },
            };
        },
    };

    (async () => {
        for await (let value of range) {
            console.log(value); // 1, 2, 3, 4, 5
        }
    })();
}

// Async generators
{
    async function* generateSequence(start, end) {
        for (let i = start; i <= end; i++) {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // delay

            yield i;
        }
    }

    (async () => {
        for await (let value of generateSequence(1, 5)) {
            console.log(value); // 1, 2, 3, 4, 5
        }
    })();
}

// Using async generators for async iterables
{
    let range = {
        from: 1,
        to: 5,
        async *[Symbol.asyncIterator]() {
            for (let value = this.from; value <= this.to; value++) {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                yield value;
            }
        },
    };

    (async () => {
        for await (let value of range) {
            console.log(value); // 1, 2, 3, 4, 5
        }
    })();
}
