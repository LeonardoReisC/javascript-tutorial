"use strict";

let i;

// while
i = 3;
while (i) {
    console.log(i);
    i--;
}

// do...while
i = 0;
do {
    console.log(i);
} while (i);

// for
for (i = 3; i; i--) {
    console.log(i);
}

// Labels for break/continue
outer: for (i = 0; i < 3; i++) {
    for (let j = 1; j < 3; j++) {
        if (j >= i) continue;

        console.log(`${i} ${j}`);
        break outer;
    }
}
