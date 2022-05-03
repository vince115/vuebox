import { rest } from 'msw';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth';
const router = useRouter();

export const handlers = [
  // rest.post('/Login', (req, res, ctx) => {
  //   sessionStorage.setItem('is-authenticated', 'true')
  //   return res(
  //     ctx.status(200),
  //   )
  // }),
  // rest.get('./user', (req, res, ctx) => {
  //   const isAuthenticated = sessionStorage.getItem('is-authenticated')
  //   if (!isAuthenticated) {
  //     return res(
  //       ctx.status(403),
  //       ctx.json({
  //         errorMessage: 'Not authorized',
  //       })
  //     )
  //   }
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       username: 'admin',
  //     })
  //   )
  // }),

  rest.get('api', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
       
      })    
    )
  }),

  rest.post('api/login', (req, res, ctx) => {

    console.log('req',req);
    //console.log('req.username',req.body.username);
    console.log('ctx',ctx);
    let myreq = JSON.parse(JSON.stringify(req))
    console.log('myreq.username', myreq.body.username)

        //判斷帳密
        let ReqName:string = myreq.body.username ;  
        let ReqPwd:string = myreq.body.password ; 
        if (ReqName == '' || ReqPwd == ''){
          console.log('帳密為空');
        }else if(ReqName == 'abcd' && ReqPwd == '1234'){  
          console.log('帳密吻合');
          let token='Bearer Ohmytoken';
          localStorage.setItem('token', token);
          localStorage.setItem('isLogin', 'true');
          const authStore = useAuthStore()
          authStore.setIsLogin(true);

          return res(
            ctx.status(200),
            ctx.json({
              code: 200,
              msg:'成功',
              isLogin: true
            }),
          )
        }else{
          alert('帳密不合');
          console.log('帳密不合');

          return res(
            ctx.status(400), 
            ctx.json({
              code: 30001,
              msg:'帳號不存在或密碼錯誤，請重新輸入。',
            }),
          )

        }
    
    

    // if (req.body.username   ) {
      
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       errorMessage: 'Not authorized',
    //     })
    //   )
    // }
  }),

]
