export const saveToken: any = (token: any) => {
  localStorage.setItem("authToken", token);
};

export const deleteToken: any = (token: any) => {
  localStorage.clear();
};

export const getToken: any = (token: any) => {
  return localStorage.getItem("authToken")
};

//create code below that uses Regex to extract user ID from auth Token

export const getUserId: any = (token: any) => {
  const newToken = getToken();
  const parsedToken = JSON.parse(newToken);
  const userId = parsedToken.user_id;
  return userId;
};
