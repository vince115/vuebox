const TOKEN = "token";

export const getToken = () => localStorage.getItem(TOKEN);
export const setToken = (accessToken: string) => localStorage.setItem(TOKEN, accessToken)
export const removeToken = () => localStorage.removeItem(TOKEN)