export const saveToken: any = (token: any) => {
  localStorage.setItem("authToken", token);
};

export const deleteToken: any = (token: any) => {
  localStorage.clear();
}
