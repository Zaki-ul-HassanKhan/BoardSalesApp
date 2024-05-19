import { Response } from "../shared/Response";
import { Data } from "../userboard/DashboardBoardsResponse";

export interface UserListingResponse extends Response {
    userBoards : Data[];
    userGears: Data[];
}