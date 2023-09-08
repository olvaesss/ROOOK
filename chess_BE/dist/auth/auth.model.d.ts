export declare class REFRESH_TOKEN {
    constructor(Email: String, Password: String);
    header: {
        'alg': "MD5";
        'typ': 'REF';
    };
    payload: any;
}
export declare class ACCESS_TOKEN {
    constructor(Email: String, Password: String);
    lifetime: Number;
    header: {
        'alg': "MD5";
        'typ': 'ACC';
    };
    payload: any;
}
export declare let TOKENS: any[];
