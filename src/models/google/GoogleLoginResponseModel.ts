export interface GoogleLoginResponseModel {
    idToken: any
    scopes?: any
    serverAuthCode: any
    user: GoogleUser
  }
  
  export interface GoogleUser {
    email: any
    familyName: any
    givenName: any
    id: any
    name: any
    photo: any
  }
  