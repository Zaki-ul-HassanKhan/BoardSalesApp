import { Response } from "../shared/Response";

export interface LookupsResponse extends Response{
    locations : ListItem<number,string>[];
    boardTypes: ListItem<number,string>[];
    shapers: ListItem<number,string>[];
    finSetup: ListItem<number,string>[];
    finSystem: ListItem<number,string>[];
}

interface ListItem<TKey,TValue> {
    key: TKey;
    value : TValue;
}