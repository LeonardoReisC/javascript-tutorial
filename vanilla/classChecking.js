/**
 * obj instanceof Class
 * checks if Class.prototype is equal to one of the prototypes in the obj
 * prototype chain
 */
{
    class Rabbit {}
    let rabbit = new Rabbit();
    console.log(rabbit instanceof Rabbit); // true
}
{
    function Rabbit() {}
    console.log(new Rabbit() instanceof Rabbit); // true
}
{
    let arr = [1, 2, 3];
    console.log(arr instanceof Array); // true
    console.log(arr instanceof Object); // true, Array inherits Object
}

// 'instanceof' can be modified
{
    class Animal {
        // anything that has canEat property in an Animal
        static [Symbol.hasInstance](obj) {
            if (obj.canEat) return true;
        }
    }

    let obj = { canEat: true };
    console.log(obj instanceof Animal); // true
}

/**
 * Object.prototype.toString
 * can be used to extend typeof or to be an alternative for instanceof
 */
{
    let user = {
        [Symbol.toStringTag]: "User",
    };

    let objectToString = Object.prototype.toString;

    console.log(objectToString.call(123)); // [object Number]
    console.log(objectToString.call(user)); // [object User]
}
