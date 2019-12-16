import { userLogin } from "../remote/user-clients/user"

export const LoginTypes = {
    INVALID_CREDENTIALS: 'USER_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'USER_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'USER_LOGIN_FAILED_LOGIN'
}

export const Login = (username:string, password:string) => async (dispatch:any) => {

    try{
        let res = await userLogin(username, password)
        if(res.status === 200){
            dispatch({
                type:LoginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    user:res.body
                }
            })
        }else{
            dispatch({
                type:LoginTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:LoginTypes.UNSUCCESSFUL_LOGIN
        })
    }
    
}