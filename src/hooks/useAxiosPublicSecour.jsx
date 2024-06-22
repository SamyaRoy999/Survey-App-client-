import axios from "axios"

const axiosPiublicSecoutr = axios.create({
    baseURL: "https://survey-bdserver.vercel.app",
})

const useAxiosPublicSecour = () => {
  return axiosPiublicSecoutr
}

export default useAxiosPublicSecour