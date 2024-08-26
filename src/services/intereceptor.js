import axios from "axios"


const apiInterceptorInstance = axios.create({
    baseURL: "https://api-dev.nexevent.com.br/api", 
    headers: { 'Content-Type': 'application/json' }
})

export default apiInterceptorInstance