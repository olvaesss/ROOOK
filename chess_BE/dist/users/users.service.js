"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const DataBase_1 = require("../DataBase");
let UsersService = exports.UsersService = class UsersService {
    async Register(User) {
        const doc = (await (0, DataBase_1.getDataCurrent)('users', User.Email)).doc;
        const docRef = (await (0, DataBase_1.getDataCurrent)('users', User.Email)).docRef;
        if ((await doc).exists) {
            return console.log('unreg');
        }
        else {
            User.CreateDate = new Date;
            docRef.set(User);
            return console.log('reg');
        }
    }
    async Login(User) {
        const doc = (await (0, DataBase_1.getDataCurrent)('users', User.Email)).doc;
        const docRef = (await (0, DataBase_1.getDataCurrent)('users', User.Email)).docRef;
        let data = await doc.data();
        if ((await doc).exists) {
            if ((User.Email == data.Email) && (User.Password == data.Password)) {
                return console.log("Succses");
            }
            else {
                return console.log("Invalid input data");
            }
        }
        else {
            return console.log("Invalid input data");
        }
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map