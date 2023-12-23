import { initializeApp,cert } from 'firebase-admin/app';
import { getFirestore} from 'firebase-admin/firestore';
import LoginUserDTO from './users/dto/LoginUserDTO';
import IUser from './users/interfaces/IUser';
const serviceAccount = (`rooook-39f9b-firebase-adminsdk-kex1f-8d391fb55a.json`);
initializeApp({
    credential: cert(serviceAccount)
});
export const db = getFirestore();

class Database{
    public async getUser(Email:string, Password:string){
        const docRef = db.collection('users').doc(Email)
        const doc = await docRef.get()
        console.log(doc)
        return doc
    }

    async loginUser(data:LoginUserDTO){

    }
}

export  const DB = new Database