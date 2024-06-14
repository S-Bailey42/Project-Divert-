import axios from "axios";
import { getToken } from "./token";

const API_URL = 'http://127.0.0.1:8000/request/view'

export const fetchAccountRequests = async () => {
    const token = localStorage.getItem("authToken")
    if (!token) {
        //console.error("No auth token found");
        throw new Error("No auth token found");
    }

    const response: any = await fetch(`http://127.0.0.1:8000/request/view`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });

    //console.log(token)
    //console.log(response)


    if (!response.ok) {
        //console.error(`HTTP error! status: ${response.status}`);
        throw new Error(`Error fetching account requests:, ${ response.status }`);
    }

    return response.json();
}

//ignore all code below for now, it is unused

export const acceptRequest = async (id: any) => {
    try {
        await axios.post(`${API_URL}/accept`, { id });
    } catch (error) {
        console.error(`Error accepting request with id ${id}:`, error);
        throw error;
    }
};

export const rejectRequest = async (id: any) => {
    try {
        await axios.post(`${API_URL}/reject`, { id });
    } catch (error) {
        console.error(`Error rejecting request with id ${id}:`, error);
        throw error;
    }
};



