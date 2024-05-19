import { useCallback, useRef } from "react";
import { BASE_URL } from "../../../config/config";
import useHttp from "../../hooks/useHttp";
import { LoginModel } from "../../../models/auth/LoginModel";
import { RegisterUserRequest } from "../../../models/user/RegisterUserRequest";
import { UpdatePasswordRequest } from "../../../models/user/UpdatePasswordRequest";
import { DeleteAccountRequest } from "../../../models/user/DeleteAccountRequest";
import { UserResponseModel } from "../../../models/user/UserResponseModel";
import { UpdateUserRequest } from "../../../models/user/UpdateUserRequest";
import { UserListingsRequest } from "../../../models/userlistings/UserListingsRequest";
function useUserService(){
    const {httpService} = useHttp(BASE_URL);

    const createUser = useCallback(
        (req: RegisterUserRequest) => {
            
        return httpService.post('User',req)
    },
    [httpService]
    );
    

    const getUsers = useCallback(
        () => {
            
        return httpService.get('User')
    },
    [httpService]
);

const updatePassword = useCallback(
    (req: UpdatePasswordRequest) => {
        
    return httpService.post('User/UpdatePassword',req)
},
[httpService]
);

const deleteAccount = useCallback(
    (req: DeleteAccountRequest) => {
        
    return httpService.post('User/DeleteAccount',req)
},
[httpService]
);

const updateUser = useCallback(
    (req: UpdateUserRequest) => {
        
    return httpService.post('User/UpdateUser',req)
},
[httpService]
);

const getUser = useCallback(
    (id:number) => {
        
    return httpService.get(`User/${id}`)
},
[httpService]
);

const getLookups = useCallback(
    () => {
        
    return httpService.get(`User/GetLookups`)
},
[httpService]
);

const getUserListings = useCallback(
    (req: UserListingsRequest) => {
        
    return httpService.post('User/GetUserListings',req)
},
[httpService]
);

const {current} = useRef({
    createUser,
    getUsers,
    updatePassword,
    deleteAccount,
    updateUser,
    getUser,
    getLookups,
    getUserListings
})
return current
}

export default useUserService;