export enum RegistrationStatus{
    Success,
    UsernameTaken,
    PasswordTooShort,
    GeneralError
}

export enum LoginStatus{
    Success,
    UsernameNotFound,
    IncorrectPassword,
    GeneralError
}