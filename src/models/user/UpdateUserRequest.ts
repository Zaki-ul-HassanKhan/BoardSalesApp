import { Request } from "../shared/Request"
export interface UpdateUserRequest extends Request {
    Name: string;
    Location: number;
    ProfilePicture: string;
    BoardLength: string;
    BoardType: number;
    Distance: number;
    GetStartedCompleted: boolean;
}