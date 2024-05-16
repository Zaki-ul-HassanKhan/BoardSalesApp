import { Response } from "../shared/Response";

export interface DashboardBoardsResponse extends Response {
    data : Data[]
}

export interface Data{
    id: number;
    imagesPath?: string;
    price?: string;
    condition?: boolean;
    length?: string;
}