import  {Request}  from "../shared/Request"
export interface AddUpdateUserGearsRequest extends Request{
    ImagesPath : string[];
    Title : string;
    Condition : number;
    Description : string;
    Price : string;
    IsPosted : boolean;
}