import { UserClient } from "../user-clients/user-client";

export const getAllReimbursements = async () => {
    try{
        let response = await UserClient.get('/reimbursements')
        if(response.status === 200){
            return{
                status:response.status,
                body:response.data
            }
        }else{
            return {
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}