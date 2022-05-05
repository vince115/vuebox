import apiServ from '../api/api';
export const login = (data:any)=>{
    apiServ({
        url: "/login",
        method: "post",
        data, 
    })
}