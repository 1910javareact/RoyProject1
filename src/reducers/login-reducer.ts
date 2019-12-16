import { User } from "../models/user"
import { ILoginState } from "."
import { LoginTypes } from "../action-mappers/login-action-mappers"

const initialState: ILoginState = {
    user: new User(0, '', '', '', '', '', 0)
}

export const loginReducer = (state = initialState, action:any) => {
    
    switch (action.type) {
        case LoginTypes.SUCCESSFUL_LOGIN:{
            return {
                ...state,
                user:action.payload.user
            }
        }
        default:
            return state
    }

}