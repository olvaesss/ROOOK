export declare class REFRESH_TOKEN {
    secret: String;
}
export declare class ACCESS_TOKEN {
    lifetime: Number;
    secret: String;
}
export declare let TOKENS: [ACCESS_TOKEN, REFRESH_TOKEN];
