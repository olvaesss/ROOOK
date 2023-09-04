"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataCurrent = exports.db = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const serviceAccount = (`rooook-39f9b-firebase-adminsdk-kex1f-8d391fb55a.json`);
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)(serviceAccount)
});
exports.db = (0, firestore_1.getFirestore)();
async function getDataCurrent(where, what) {
    const docRef = exports.db.collection(String(where)).doc(String(what));
    const doc = await docRef.get();
    return { doc, docRef };
}
exports.getDataCurrent = getDataCurrent;
//# sourceMappingURL=DataBase.js.map