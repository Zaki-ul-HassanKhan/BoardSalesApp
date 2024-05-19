import { useCallback, useRef } from "react";
import { BASE_URL } from "../../../config/config";
import useHttp from "../../hooks/useHttp";
import { LoginModel } from "../../../models/auth/LoginModel";
function useAuthService(){
    const {httpService} = useHttp(BASE_URL);

    const postUserCredentials = useCallback(
        (req: LoginModel) => {
        return httpService.post('Authentication',req)
    },
    [httpService]
);

const {current} = useRef({
    postUserCredentials
})
return current
}

export default useAuthService;