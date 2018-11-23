"use strict";
var JonnyCode;
(function (JonnyCode) {
    var Watchable = /** @class */ (function () {
        function Watchable(value, handler) {
            this._value = value;
            this._handlers = [];
            if (handler != null) {
                this.addHandler(handler);
            }
        }
        Object.defineProperty(Watchable.prototype, "value", {
            // Version 1 - Create an Observable object
            get: function () { return this._value; },
            set: function (val) {
                var _this = this;
                this._value = val;
                this._handlers.forEach(function (handler) {
                    handler(_this._value);
                });
            },
            enumerable: true,
            configurable: true
        });
        Watchable.prototype.addHandler = function (handler) {
            this._handlers.push(handler);
        };
        Watchable.prototype.removeHandler = function (handler) {
            var indexOf = this._handlers.indexOf(handler);
            if (indexOf > -1) {
                this._handlers.splice(indexOf, 1);
            }
        };
        // Version 2 - Modify prototype
        Watchable.watch = function (value, handler) {
            value.__proto__._value = value;
            value.__proto__._handlers = [];
            value.__proto__.get = function () {
                return this._value;
            };
            value.__proto__.set = function (value) {
                var _this = this;
                this._value = value;
                this._handlers.forEach(function (handler) {
                    handler(_this._value);
                });
                return this._value;
            };
            value.__proto__.addHandler = function (handler) {
                this._handlers.push(handler);
                return this._value;
            };
            value.__proto__.removeHandler = function (handler) {
                var indexOf = this._handlers.indexOf(handler);
                if (indexOf > -1) {
                    this._handlers.splice(indexOf, 1);
                }
                return this._value;
            };
            if (handler != null) {
                value.addHandler(handler);
            }
            return value;
        };
        return Watchable;
    }());
    JonnyCode.Watchable = Watchable;
})(JonnyCode || (JonnyCode = {}));
//# sourceMappingURL=jonnyWatchable.js.map