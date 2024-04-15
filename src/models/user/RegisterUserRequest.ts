export interface RegisterUserRequest{
    UserName: string,
    Password?: string,
    Name?:string,
    ProfilePicture?:string;
    Platform: string
}