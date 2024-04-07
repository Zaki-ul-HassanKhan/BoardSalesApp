import { useCallback, useRef } from "react";
import { BASE_URL } from "../../../config/config";
import useHttp from "../../hooks/useHttp";
import { LoginModel } from "../../../models/auth/LoginModel";
function useAuthService(){
    const {httpService} = useHttp(BASE_URL);

    const postUserCredentials = useCallback(
        (req: LoginModel) => {
            console.log("INPOST")
        return httpService.post('Authentication',req)
    },
    [httpService]
);


// const postUserCredentials = useCallback(
//     (onSuccess?:Function, onError?: Function) => {
//         console.log("IN postUserCredentials");
//     return httpService.get('https://jsonplaceholder.typicode.com/posts/1')
// },
// [httpService]
// );
const {current} = useRef({
    postUserCredentials
})
return current
}

export default useAuthService;