export declare const request: {
    put: <T>(url: string, params: any, props: import("./interfaces/request.interface").RequestInterface<T>) => void;
    post: <T_1>(url: string, params?: any, props?: import("./interfaces/request.interface").RequestInterface<T_1> | undefined) => void;
    get: <T_2>(url: string, props: import("./interfaces/request.interface").RequestInterface<T_2>) => void;
};
