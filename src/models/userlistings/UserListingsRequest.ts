import  {Request}  from "../shared/Request"
export interface UserListingsRequest extends Request{
    IsForSale : boolean;
    IsSold : boolean;
    IsArchive : boolean;
    IsActive : boolean;
}