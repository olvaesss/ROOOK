"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKENS = exports.ACCESS_TOKEN = exports.REFRESH_TOKEN = void 0;
class REFRESH_TOKEN {
    constructor(Email, Password) {
        this.payload = {};
        this.payload.Email = Email;
        this.payload.Password = Password;
    }
}
exports.REFRESH_TOKEN = REFRESH_TOKEN;
class ACCESS_TOKEN {
    constructor(Email, Password) {
        this.lifetime = 86400;
        this.payload = {};
        this.payload.Email = Email;
        this.payload.Password = Password;
    }
}
exports.ACCESS_TOKEN = ACCESS_TOKEN;
exports.TOKENS = [];
//# sourceMappingURL=auth.model.js.map