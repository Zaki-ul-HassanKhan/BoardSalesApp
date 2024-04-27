import  {Response}  from "../shared/Response"
export interface UserResponseModel extends Response {
    active: boolean
    dateAdded: string
    dateUpdated: any
    lastLogin: string
    location: number
    locationName: string
    name: string
    profilePicture: string
    boardLength:string
    boardType:number
    role: any
    token: string
    userId: number
    userName: string
    verificationCode: any
    verified: boolean
    getStartedCompleted: boolean
    distance:number
  }