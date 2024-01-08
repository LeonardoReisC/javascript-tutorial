// No static inheritance in built-ins
{
    class PowerArray extends Array {
        isEmpty() {
            return this.length === 0;
        }
    }

    let arr = new PowerArray(1, 2, 3, 4, 5);
    console.log(arr.isEmpty()); // false

    let filteredArr = arr.filter((item) => item >= 3);
    console.log(filteredArr.constructor === PowerArray); // true, returned PowerArray
    console.log(filteredArr); // PowerArray(3) [ 3, 4, 5 ]
    console.log(filteredArr.isEmpty()); // false
}

// can return Array instead
{
    class PowerArray extends Array {
        isEmpty() {
            return this.length === 0;
        }

        static get [Symbol.species]() {
            return Array;
        }
    }

    let arr = new PowerArray(1, 2, 3, 4, 5);
    console.log(arr.isEmpty());

    let filteredArr = arr.filter((item) => item >= 3);
    console.log(filteredArr.constructor === Array); // true
}
