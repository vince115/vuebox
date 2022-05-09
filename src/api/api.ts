import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse, AxiosError }from 'axios';
import { useAuthStore } from "../store/auth";



const service = axios.create({
    baseURL: 'http://locahost:3000/api',
    headers: { 
        'Content-Type': 'application/json' 
    },
    timeout: 20000
  });

service.interceptors.request.use((config: AxiosRequestConfig)=>{ 
    console.log(611)
    const authStore = useAuthStore();
    
    if(authStore.token){
        config.headers
    }
    return config 
}, (error: AxiosError) => {
    return Promise.resolve(error)
});

service.interceptors.response.use((response: AxiosResponse) => {
    console.log(612)
    const authStore = useAuthStore();
    
    //const status = response.status
    // if (status < 200 || status >= 300) {
    // }
    // return response       
    //token
    if (response.headers) {
        console.log(613)
        console.log('response.headers',response.headers)
        authStore.token = response.headers.authorization.split(" ")[1];
    }

    return Promise.resolve(response)
    },(error: AxiosError) => {
        if (error.response){
            switch (error.response.status) {
              case 400:
                console.log("請求格式錯誤")
                 break 
              case 500:
                console.log("系統程式錯誤")
                break
              default:
                console.log(error.message)
            }
        }
        if (!window.navigator.onLine) {
            alert("網路出了點問題，請重新連線後重整網頁");
            return;
        }
        return Promise.reject(error);
    }
);

export default service;

// export default function(method:string , url:string , data = null, config:any) {
//     method = method.toLowerCase();
//     switch (method) {
//         //Read
//         case "get":
//             return service.get(url, { params: data });
//         //Create  
//         case "post":
//             return service.post(url, data, config);
//         //Upadate
//         case "put":
//             return service.put(url, data);
//         //Delete
//         case "delete":
//             return service.delete(url, { params: data });
//         //UpadateAll   
//         case "patch":
//             return service.patch(url, data);
//         default:
//             console.log(`未知的 method: ${method}`);
//         return false;
//     }
//   }