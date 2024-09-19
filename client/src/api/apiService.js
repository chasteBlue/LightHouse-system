// src/api/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const registerRoom = async (roomData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/registerRoom`, roomData);
        return response.data;
    } catch (error) {
        console.error('Error registering room:', error);
        throw error;
    }
};

export const getRooms = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getRooms`);
        return response.data;
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
    }
};

