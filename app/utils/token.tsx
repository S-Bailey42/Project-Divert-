export const saveToken: any = (token: any) => {
  localStorage.setItem("authToken", token);
};
