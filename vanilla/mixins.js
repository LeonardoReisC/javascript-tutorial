/**
 * Mixin
 * is a class containing methods that can be used by other classes without a
 * need to inherit from it
 */
{
    let eventMixin = {
        on(eventName, handler) {
            if (!this._eventHandlers) this._eventHandlers = {};
            if (!this._eventHandlers[eventName]) {
                this._eventHandlers[eventName] = [];
            }
            this._eventHandlers[eventName].push(handler);
        },

        off(eventName, handler) {
            let handlers = this._eventHandlers?.[eventName];
            if (!handlers) return;

            for (let i = 0; i < handlers.length; i++) {
                if (handlers[i] === handler) {
                    handlers.splice(i--, 1);
                }
            }
        },

        trigger(eventName, ...args) {
            if (!this._eventHandlers?.[eventName]) return;

            this._eventHandlers[eventName].forEach((handler) => {
                handler.apply(this, args);
            });
        },
    };

    // make a class
    class Menu {
        choose(value) {
            this.trigger("select", value);
        }
    }

    // add the mixin with event-related methods
    Object.assign(Menu.prototype, eventMixin);

    let menu = new Menu();

    // add a handler, to be called on selection:
    menu.on("select", (value) => console.log(`value selected: ${value}`));

    menu.choose("123");
}
