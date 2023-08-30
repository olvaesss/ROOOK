import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
const serviceAccount = (`rooook-39f9b-firebase-adminsdk-kex1f-8d391fb55a.json`);
initializeApp({
    credential: cert(serviceAccount)
});
export const db = getFirestore();