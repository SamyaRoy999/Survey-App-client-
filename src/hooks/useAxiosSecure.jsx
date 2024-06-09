import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"


const axiosSecour = axios.create({
    baseURL: "http://localhost:5000",
})

const useAxiosSecure = () => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    axiosSecour.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        console.log('request stop by interceptors', token);
        config.headers.authorization = `bearer ${token}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    })

    axiosSecour.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status is the interceptors', status);
        if (status === 401 || status === 403) {
            await signOutUser();
            navigate('/login');
        }
        return Promise.reject(error);
    });

    return axiosSecour;
}


export default useAxiosSecure;   