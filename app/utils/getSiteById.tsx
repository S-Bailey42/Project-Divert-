import { getToken } from "./token";

export const getSiteById = async (siteId: string) => {
    const token = getToken();
    if (!token) {
        throw new Error("No auth token found");
    }

    let token_obj;
    try {
        token_obj = JSON.parse(token);
    } catch(e) {
        throw new Error("Invalid auth token format");
    }

    if (!("access_token" in token_obj)) {
        throw new Error("No auth token found in object");
    }

    const fetchUrl = `http://127.0.0.1:8000/worksite/get/?worksite_id=${siteId}`;
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token_obj.access_token}`,
        },
    };

    try {
        const response = await fetch(fetchUrl, requestOptions);
        if (!response.ok) {
            throw new Error("Faled to fetch site details");
        }

        const siteData = await response.json();
        return siteData;
    } catch (error) {
        console.error("Error fetching site details:", error);
        throw error;
    }
}