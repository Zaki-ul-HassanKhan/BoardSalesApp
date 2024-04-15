import  {Response}  from "../shared/Response"
export interface UserResponseModel extends Response {
    active: boolean
    dateAdded: string
    dateUpdated: any
    lastLogin: string
    location: string
    locationName: string
    name: string
    profilePicture: string
    role: any
    token: string
    userId: number
    userName: string
    verificationCode: any
    verified: boolean
  }