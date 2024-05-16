import  {Request}  from "../shared/Request";

export interface DashboardBoardsRequest extends Request{
    Normal: boolean;
    Vintage: boolean;
    TeamBoard: boolean;
    FeaturedBoard: boolean;
}