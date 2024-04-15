import { useCallback, useRef } from "react";
import { BASE_URL } from "../../../config/config";
import useHttp from "../../hooks/useHttp";
import { LoginModel } from "../../../models/auth/LoginModel";
import { RegisterUserRequest } from "../../../models/user/RegisterUserRequest";
function useUserService(){
    const {httpService} = useHttp(BASE_URL);

    const createUser = useCallback(
        (req: RegisterUserRequest) => {
            console.log("INPOST")
        return httpService.post('User',req)
    },
    [httpService]
    );

    const getUsers = useCallback(
        () => {
            console.log("INPOST")
        return httpService.get('User')
    },
    [httpService]
    

);

const {current} = useRef({
    createUser,
    getUsers
})
return current
}

export default useUserService;