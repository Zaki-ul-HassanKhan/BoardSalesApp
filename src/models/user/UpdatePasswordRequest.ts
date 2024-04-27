import  {Request}  from "../shared/Request"
export interface UpdatePasswordRequest extends Request{
    Password?: string,
}