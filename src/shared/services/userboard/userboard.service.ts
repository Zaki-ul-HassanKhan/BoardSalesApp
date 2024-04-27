import { useCallback, useRef } from "react";
import { BASE_URL } from "../../../config/config";
import useHttp from "../../hooks/useHttp";
import { AppUpdateUserBoardsRequest } from "../../../models/userboard/AppUpdateUserBoardsRequest";

function useUserBoardService(){
    const {httpService} = useHttp(BASE_URL);
const addUpdateUserBoard = useCallback(
    (req: AppUpdateUserBoardsRequest) => {
        console.log("INPOST")
    return httpService.post('UserBoard/AddUpdateUserBoard',req)
},
[httpService]
);


const {current} = useRef({
    addUpdateUserBoard,
})
return current
}

export default useUserBoardService;