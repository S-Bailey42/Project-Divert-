const API_URL = "http://127.0.0.1:8000/items";
import { getToken } from "./token";

interface Item {
    id: string;
    Name: string;
    SiteID: string;
    ItemTypeID: number;
    Quantity: number;
    KgPerItem: number;
    Carbon: number;
    Dimensions: string;
    Taken: false;
}

export const getItems = async (): Promise<Item[]> => {
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

    const response = await fetch(`${API_URL}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token_obj.access_token}`,
          },
    });

    if (!response.ok) {
        throw new Error(`Error fetching site: ${response.statusText}`)
      }

      const items: Item[] = await response.json();
      return items;
}