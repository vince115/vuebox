import { rest } from 'msw';

export const handlers = [

  rest.get('api', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({

      })    
    )
  }),

  rest.post('api/login', (req, res, ctx) => {
    const userInfo = JSON.parse(JSON.stringify(req.body))
    console.log(999)
    console.log('userInfo',userInfo)
        if (userInfo.username.value == 'abc@gmail.com' && userInfo.password.value == 'Abc1234'){
           console.log('帳密吻合');
           return res(
            ctx.status(200),
            ctx.set({Authorization: "Bearer ohmytoken" }),
            ctx.json({
              code: 200,
              msg:'成功',
              isLogin: true
            }),

          )        
        }else{
          return res(
            ctx.status(400), 
            ctx.json({
              code: 30001,
              msg:'帳號不存在或密碼錯誤，請重新輸入。',
            }),
           
          )
         

        }
  }),

  rest.post('api/logout', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        msg:'成功',
        isLogin: false
      }),
    )
  })

]
