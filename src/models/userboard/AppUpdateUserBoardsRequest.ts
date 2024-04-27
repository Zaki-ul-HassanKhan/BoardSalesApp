import  {Request}  from "../shared/Request"
export interface AppUpdateUserBoardsRequest extends Request{
    ImagesPath : string[];
    Title : string;
    Condition : number;
    BoardType : number;
    BoardShapers : number;
    FinSystem : number;
    FinSetup : number;
    SurfCraftType : number;
    SurfCraftWeight : number;
    Length : string;
    Width : string;
    Thickness : string;
    Volume : string;
    Description : string;
    Price : string;
    Location: string;
    ConsiderSwap : boolean;
    IsFeatured : boolean;
    TeeamBoard : boolean;
    Vintage : boolean;
    IsPosted : boolean;
}