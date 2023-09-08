"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const DataBase_1 = require("../DataBase");
const auth_model_1 = require("./auth.model");
const md5_1 = require("./md5/md5");
let AuthService = exports.AuthService = class AuthService {
    async GiveTokens(User) {
        const docRef = (await (0, DataBase_1.getDataCurrent)('users', User.Email)).docRef;
        const REFRESH = await this.GiveRefreshToken(User.Email, User.Password);
        const ACCESS = await this.GiveAccessToken(User.Email, User.Password);
        console.log(REFRESH, ACCESS);
        auth_model_1.TOKENS.push(ACCESS, REFRESH);
        docRef.update({ 'REFRESH': REFRESH });
        delete auth_model_1.TOKENS[0];
        delete auth_model_1.TOKENS[1];
        console.log(auth_model_1.TOKENS);
    }
    async GiveRefreshToken(Email, Password) {
        const SECRET_KEY = 'cAtInSign';
        let REFRESH = new auth_model_1.REFRESH_TOKEN(Email, Password);
        const unsignedToken = (0, md5_1.default)(REFRESH.header) + '.' + (0, md5_1.default)(REFRESH.payload);
        const signature = (0, md5_1.default)(unsignedToken + '.' + SECRET_KEY);
        return signature;
    }
    async GiveAccessToken(Email, Password) {
        const SECRET_KEY = 'outCaTsiGn';
        let ACCESS = new auth_model_1.ACCESS_TOKEN(Email, Password);
        const unsignedToken = (0, md5_1.default)(ACCESS.header) + '.' + (0, md5_1.default)(ACCESS.payload);
        const signature = (0, md5_1.default)(unsignedToken + '.' + SECRET_KEY);
        return signature;
    }
    async UpdateRefreshToken(User) {
        return { REFRESH_TOKEN: auth_model_1.REFRESH_TOKEN };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map