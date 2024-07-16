export const saveToken: any = (token: any) => {
  localStorage.setItem("authToken", token);
  console.log('Saving token:', token);
};

export const deleteToken: any = (token: any) => {
  localStorage.clear();
};

export const getToken: any = (token: any) => {
  const authToken = localStorage.getItem("authToken")
  console.log('Retrieved token:', authToken);
  return authToken
};

export const getUserId: any = (token: any) => {
  const newToken = getToken();
  const parsedToken = JSON.parse(newToken);
  const userId = parsedToken.user_id;
  return userId;
};

export const getSiteId: any = (token: any) => {
  const newToken = getToken();
  const parsedToken = JSON.parse(newToken);
  const siteId = parsedToken.site_id;
  return siteId;
}

export const updateSiteId = async (newSiteId: string) => {
  alert('Sending update site ID request...');
  const response = await fetch(`http://127.0.0.1:8000/worksite/update-site`, {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
      'Authorization': `Bearer ${getToken()}`
    },
    body: JSON.stringify({ site_id: newSiteId})
  });

  alert('Response received...');
  const data = await response.json();
  if (response.ok) {
    alert('Update successful, saving new token...');
    saveToken(data.authToken)
    console.log('New auth token:', data.authToken);
  } else {
    console.error("Failed to update site ID");
  }
  alert(data.authToken)
};
