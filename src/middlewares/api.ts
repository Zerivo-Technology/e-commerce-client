import axios, { AxiosResponse } from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

// Helper function for making API requests
const handleRequest = async (request: Promise<AxiosResponse>) => {
    try {
        const response = await request;
        return response;
    } catch (error) {
        throw error;
    }
};

export const Auth = {
    Login : (email : string, password : string) => 
        handleRequest(axios.post(`${baseUrl}/login`, { email, password })),
    Regis : (data : any) => 
        handleRequest(axios.post(`${baseUrl}/register`, data )),
}

export const Admin = {
    GetAllUser : (token : any) => 
        handleRequest(axios.get(`${baseUrl}/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })),
}

export const Category = {
    GetAllCategory : (token : any) => 
        handleRequest(axios.get(`${baseUrl}/category`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })),
    DeleteCategory : (id : any , token : any) => 
        handleRequest(axios.delete(`${baseUrl}/category/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })),
    CreateCategory: (data: any, token: any) =>
        handleRequest(axios.post(`${baseUrl}/category`, data , { 
            headers: { 
                Authorization: `Bearer ${token}` 
            } 
        })),
    UpdateCategory: (id : any, data: any, token: any) =>
        handleRequest(axios.put(`${baseUrl}/category/${id}`, data , { 
            headers: { 
                Authorization: `Bearer ${token}` 
            } 
        })),
    
}

export const Product = {
    GetAllProduct : (token : any) => 
        handleRequest(axios.get(`${baseUrl}/products`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })),
}