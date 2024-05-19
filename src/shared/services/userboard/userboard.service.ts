import { useCallback, useRef } from "react";
import { BASE_URL } from "../../../config/config";
import useHttp from "../../hooks/useHttp";
import { AppUpdateUserBoardsRequest } from "../../../models/userboard/AppUpdateUserBoardsRequest";
import { DashboardBoardsRequest } from "../../../models/userboard/DashboardBoardsRequest";

function useUserBoardService(){
    const {httpService} = useHttp(BASE_URL);
const addUpdateUserBoard = useCallback(
    (req: AppUpdateUserBoardsRequest) => {
    return httpService.post('UserBoard/AddUpdateUserBoard',req)
},
[httpService]
);

const dashboardBoards = useCallback(
    (req: DashboardBoardsRequest) => {
    return httpService.post('UserBoard/DashboardBoards',req)
},
[httpService]
);


const {current} = useRef({
    addUpdateUserBoard,
    dashboardBoards
})
return current
}

export default useUserBoardService;