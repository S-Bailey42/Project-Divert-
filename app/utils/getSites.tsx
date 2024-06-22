const API_URL = "http://127.0.0.1:8000/worksite";
import { getToken } from "./token";

interface Site {
  id: string;
  SiteName: string;
  Coordinates: string;
  Address: string;
  Postcode: string;
  SiteManager: string;
  PhoneNumber: string;
  IsActive: boolean;
  StartDate: string;
  Email: string;
}

export const getSites = async () => {
    const token = getToken();
    if (!token) {
      throw new Error("No auth token found");
    }
  
    let token_obj: { access_token: string };
    try {
      token_obj = JSON.parse(token);
    } catch (e) {
      throw new Error("Invalid auth token format");
    }
  
    if (!("access_token" in token_obj)) {
      console.log(token_obj);
      throw new Error("No auth token found in the object");
    }
  
  const response = await fetch(`${API_URL}/mySites`, {
      method: "GET",
      headers: {
          Authorization: `Bearer ${token_obj.access_token}`,
        },
        
  });

  if (!response.ok) {
    throw new Error(`Error fetching site: ${response.statusText}`)
  }

  const sites: Site[] = await response.json();
  return sites;
  
}




