import { useCallback, useRef } from "react";
import { BASE_URL } from "../../../config/config";
import useHttp from "../../hooks/useHttp";
import { LoginModel } from "../../../models/auth/LoginModel";
import { RegisterUserRequest } from "../../../models/user/RegisterUserRequest";
import { UpdatePasswordRequest } from "../../../models/user/UpdatePasswordRequest";
import { DeleteAccountRequest } from "../../../models/user/DeleteAccountRequest";
import { UserResponseModel } from "../../../models/user/UserResponseModel";
import { UpdateUserRequest } from "../../../models/user/UpdateUserRequest";
function useLocationService(){
    const {httpService} = useHttp(BASE_URL);


const getLocations = useCallback(
    () => {
    return httpService.get(`User`)
},
[httpService]
);

const {current} = useRef({
    getLocations
})
return current
}

export default useLocationService();