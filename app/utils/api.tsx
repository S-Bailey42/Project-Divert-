import axios from "axios";
import { getToken } from "./token";

const API_URL = 'http://127.0.0.1:8000/request'

const axiosInstnace = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

export const fetchAccountRequests = async () => {
    try {
        const response = await axiosInstnace.get(`${API_URL}/view`)
        return response.data;
    } catch (error) {
        console.error('Error fetching account requests:', error);
        throw error;
    }
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



