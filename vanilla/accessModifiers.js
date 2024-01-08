/**
 * public: can be accessed from inside and outside the class
 * protected(_var): can be accessed from inside the class and inheriting ones
 * private(#var): can only be accessed from inside the class
 */
{
    class CoffeeMachine {
        // private property
        #waterLimit = 200;

        constructor(power) {
            this._power = power;
        }

        // read-only
        get power() {
            return this._power;
        }

        // private method
        #fixWaterAmount(value) {
            if (value < 0) return 0;
            if (value > this.#waterLimit) return this.#waterLimit;
            return value;
        }

        // another way of getter
        getWaterAmount() {
            return this.#waterLimit;
        }

        // another way of setter
        setWaterAmount(value) {
            this.#waterLimit = this.#fixWaterAmount(value);
        }
    }

    let coffeeMachine = new CoffeeMachine(100);
    console.log(coffeeMachine.power); // 100

    coffeeMachine.setWaterAmount(150);
    console.log(coffeeMachine.getWaterAmount()); // 150
}
