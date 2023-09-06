export declare const db: FirebaseFirestore.Firestore;
export declare function getDataCurrent(where: any, what: any): Promise<{
    doc: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>;
    docRef: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
}>;
