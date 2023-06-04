// import { request } from "./request/request";

// export default request;

import { post } from "./request/request-post";
import { put } from "./request/request-put";
import { get } from "./request/request-get";

export const request = {
    put,
    post,
    get,
} 