namespace JonnyCode {

    export class Watchable<T> {

        // Create an Observable value

        public get value(): T { return this._value; }
        public set value(val: T) {
            this._value = val;

            this._handlers.forEach(handler => {
                handler(this._value);
            });
        }

        private _value: T;
        private _handlers: Array<(value: T) => void>;

        constructor(value: T, handler?: (value: T) => void) {
            this._value = value;

            this._handlers = [];

            if (handler != null) {
                this.addHandler(handler);
            }
        }

        public addHandler(handler: (value: T) => void): void {
            this._handlers.push(handler);
        }

        public removeHandler(handler: (value: T) => void): void {

            const indexOf = this._handlers.indexOf(handler);
            
            if (indexOf > -1) {
                this._handlers.splice(indexOf, 1);
            }
        }
    }
}