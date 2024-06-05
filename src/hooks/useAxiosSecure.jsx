import axios from "axios"
// import { useContext } from "react"
// import {useNavigate} from 'react-router-dom'
// import { AuthContext } from "../Providers/AuthProvider"

const axiosSecour = axios.create({
    baseURL: "http://localhost:5000",
})

const useAxiosSecure = () => {
    // const navigate =  useNavigate()
    // const {signOutUser} = useContext(AuthContext)
    // axiosSecour.interceptors.request.use(function(config){
    //     const token = localStorage.getItem('access-token')

    //     console.log('requst stop by interceptore', token);
    //     config.headers.authorization = `Bearer ${token}`
    //     return config;
    // }, function(erro){
    //     return Promise.reject(erro)
    // })
    
    // axiosSecour.interceptors.response.use(function(response){
    //     return response
    // }, async (erro)=>{
    //     const status = erro.response.status
    //     console.log('status in a interceptors', status);
    //     if (status == '401' || status == '403') {
    //         await signOutUser()
    //         navigate('/login')

    //     }
    //     return Promise.reject(erro)
    // })
    return axiosSecour
}


export default useAxiosSecure