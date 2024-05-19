import React, { useContext } from "react";
import { PropsWithChildren, useState } from "react";
import { UserResponseModel } from "../../models/user/UserResponseModel";
import { LookupsResponse } from "../../models/user/LooksResponse";
import { AppUpdateUserBoardsRequest } from "../../models/userboard/AppUpdateUserBoardsRequest";
import { AddUpdateUserGearsRequest } from "../../models/usergears/AddUpdateUserGearsRequest";

type AuthContextType = {
    isLoading: boolean,
    setIsLoading: Function,
    user: UserResponseModel,
    setUser: Function,
    selectedTab: number,
    setSelectedTab: Function,
    lookups: LookupsResponse,
    setLookups: Function,
    headerShow: boolean,
    setHeaderShow: Function,
    bottomShow: boolean,
    setBottomShow: Function,
    userBoards: AppUpdateUserBoardsRequest,
    setUserBoards: Function,
    userGears: AddUpdateUserGearsRequest,
    setUserGears: Function,
    postType: number,
    setPostType: Function,
}

const UserDefaults: UserResponseModel = {
    active: false,
    dateAdded: "",
    dateUpdated: undefined,
    lastLogin: "",
    location: 0,
    locationName: "",
    name: "",
    profilePicture: "",
    role: undefined,
    token: "",
    userId: 0,
    userName: "",
    verificationCode: undefined,
    verified: false,
    getStartedCompleted: false,
    code: "",
    message: "",
    boardLength: "",
    boardType: 0,
    distance: 0
}
export const UserBoardsDefault: AppUpdateUserBoardsRequest = {
    ImagesPath: [],
    Condition: 0,
    BoardType: 0,
    BoardShapers: 0,
    FinSystem: 0,
    FinSetup: 0,
    SurfCraftType: 0,
    SurfCraftWeight: 0,
    Length: "",
    Width: "",
    Thickness: "",
    Volume: "",
    Description: "",
    Price: "",
    Location: 0,
    ConsiderSwap: false,
    IsFeatured: false,
    TeamBoard: false,
    Vintage: false,
    IsPosted: false,
    UserId: 0,
    Title: ""
}
const UserGearsDefault: AddUpdateUserGearsRequest ={
    ImagesPath: [],
    Title: "",
    Condition: 0,
    Description: "",
    Price: "",
    IsPosted: false,
    UserId: 0
}
export const AuthContextDefaults: AuthContextType = {
    isLoading: false,
    setIsLoading: () => { },
    user: UserDefaults,
    setUser: (user: UserResponseModel) => { },
    selectedTab: 0,
    setSelectedTab: () => { },
    lookups: {
        locations: [],
        code: "",
        message: "",
        boardTypes: [],
        shapers: [],
        finSetup: [],
        finSystem: []
    },
    setLookups: (LookupsResponse: LookupsResponse) => { },
    headerShow: true,
    setHeaderShow: () => { },
    bottomShow: true,
    setBottomShow: () => { },
    userBoards: UserBoardsDefault,
    setUserBoards: (AppUpdateUserBoardsRequest: AppUpdateUserBoardsRequest) => { },
    postType: 0,
    setPostType: () => { },
    userGears: UserGearsDefault,
    setUserGears: (AddUpdateUserGearsRequest: AddUpdateUserGearsRequest) => { },
}
const AuthContext = React.createContext<AuthContextType>(AuthContextDefaults);
export function useAuthContext() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }: PropsWithChildren) {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(UserDefaults);
    const [selectedTab, setSelectedTab] = useState(0);
    const [headerShow, setHeaderShow] = useState(true);
    const [bottomShow, setBottomShow] = useState(true);
    const [userBoards, setUserBoards] = useState(UserBoardsDefault);
    const [postType, setPostType] = useState(0);
    const [lookups, setLookups] = useState<LookupsResponse>(AuthContextDefaults.lookups);
    const [userGears, setUserGears] = useState(UserGearsDefault);
    const value = {
        isLoading, setIsLoading, user, setUser, selectedTab, setSelectedTab,
        lookups, setLookups, headerShow, setHeaderShow, bottomShow, setBottomShow
        , userBoards, setUserBoards, postType, setPostType, userGears, setUserGears
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}