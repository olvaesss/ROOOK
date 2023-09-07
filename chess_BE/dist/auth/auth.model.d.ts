export declare class REFRESH_TOKEN {
    header: {
        'alg': "HS256";
        'typ': 'JWT';
    };
    payload: {
        'Email': String;
        'Password': String;
    };
}
export declare class ACCESS_TOKEN {
    lifetime: Number;
    header: {
        'alg': String;
        'typ': 'JWT';
    };
    payload: {
        'Email': String;
        'Password': String;
    };
}
export declare let TOKENS: [ACCESS_TOKEN, REFRESH_TOKEN];
