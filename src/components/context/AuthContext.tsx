import React, { useContext } from "react";
import { PropsWithChildren, useState } from "react";
import { UserResponseModel } from "../../models/user/UserResponseModel";
import { LookupsResponse } from "../../models/user/LooksResponse";
import { AppUpdateUserBoardsRequest } from "../../models/userboard/AppUpdateUserBoardsRequest";

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
    setUserBoards: Function
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
const UserBoardsDefault: AppUpdateUserBoardsRequest = {
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
    Location: "",
    ConsiderSwap: false,
    IsFeatured: false,
    TeeamBoard: false,
    Vintage: false,
    IsPosted: false,
    UserId: 0,
    Title: ""
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
        boardTypes: []
    },
    setLookups: (LookupsResponse: LookupsResponse) => { },
    headerShow: true,
    setHeaderShow: () => { },
    bottomShow: true,
    setBottomShow: () => { },
    userBoards: UserBoardsDefault,
    setUserBoards: (AppUpdateUserBoardsRequest: AppUpdateUserBoardsRequest) => { },
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
    const [lookups, setLookups] = useState<LookupsResponse>(AuthContextDefaults.lookups);
    const value = {
        isLoading, setIsLoading, user, setUser, selectedTab, setSelectedTab,
        lookups, setLookups, headerShow, setHeaderShow, bottomShow, setBottomShow
        , userBoards, setUserBoards
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}