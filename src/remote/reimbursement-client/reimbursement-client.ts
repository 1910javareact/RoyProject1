import axios from 'axios'

export const ReimbursementClient = axios.create({
    baseURL: 'http://18.214.23.95:1025', 
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})