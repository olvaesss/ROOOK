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
let AuthService = exports.AuthService = class AuthService {
    async GiveTokens(User) {
        const doc = (await (0, DataBase_1.getDataCurrent)('users', User.Email)).doc;
        const docRef = (await (0, DataBase_1.getDataCurrent)('users', User.Email)).docRef;
        const REFRESH_TOKEN = { 'qwe': 'qwe' };
        const ACCSES_TOKEN = { 'qweqsad': 'qwdas' };
        docRef.set(REFRESH_TOKEN);
        return { REFRESH_TOKEN, ACCSES_TOKEN };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map