declare namespace JonnyCode {
    class Watchable<T> {
        value: T;
        private _value;
        private _handlers;
        constructor(value: T, handler?: (value: T) => void);
        addHandler(handler: (value: T) => void): void;
        removeHandler(handler: (value: T) => void): void;
        static watch<T extends any>(value: T, handler?: (value: T) => void): T;
    }
}
//# sourceMappingURL=jonnyWatchable.d.ts.map