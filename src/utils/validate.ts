// Email
export const reg_email = (val:string) => {
    const validate = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    return validate.test(val)
  }


// 中低強度的密碼，只能包含數字、字母、下底線，6~18碼
export const reg_pwd = (val:string) => {
    const validate = /^[a-zA-Z][a-zA-Z0-9_]{5,16}$/
    return validate.test(val)
}