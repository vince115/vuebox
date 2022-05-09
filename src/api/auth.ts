import apiService from '../api/api';
export const apiAuth = (data:any) => {
    console.log(777)
    apiService({
        url: "/login",
        method: "post",
        data, 
    })
}

//const axiosResponse = await axios.post('api/login', params)
// let myparams = JSON.parse(JSON.stringify(params))