import axios from "axios"
 export const axiosInstance = axios.create({
     baseURL: "https://pavi-blog.herokuapp.com/api"
 })