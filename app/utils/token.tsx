export const saveToken: any = (token: any) => {
  localStorage.setItem("authToken", token);
};

export const deleteToken: any = (token: any) => {
  localStorage.clear();
}

export const getToken: any = (token: any) => {
  localStorage.getItem("authToken")
}
