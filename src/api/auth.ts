import apiService from '../api/api';
export const apiAuth = (data:any) => {
    console.log(777)
    apiService({
        url: "api/login",
        method: "post",
        data, 
    })
}