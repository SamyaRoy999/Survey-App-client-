import axios from "axios"

const axiosPiublicSecoutr = axios.create({
    baseURL: "http://localhost:5000",
})

const useAxiosPublicSecour = () => {
  return axiosPiublicSecoutr
}

export default useAxiosPublicSecour