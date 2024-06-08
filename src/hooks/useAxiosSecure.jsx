import axios from "axios"
// import { useContext } from "react"
// import {useNavigate} from 'react-router-dom'
// import { AuthContext } from "../Providers/AuthProvider"

const axiosSecour = axios.create({
    baseURL: "http://localhost:5000",
})

const useAxiosSecure = () => {
    axiosSecour.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        console.log('request stop by interceptors', token);
        config.headers.authorazation = `bearer ${token}`;
        return config
    }, (error) => {
        return Promise.reject(error);
    })
    return axiosSecour
}


export default useAxiosSecure