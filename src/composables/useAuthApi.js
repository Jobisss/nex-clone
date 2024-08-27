import api from "@/services/api";

export function useAthApiHook() { 
    const postFormLogin = async (email, password) => {
        let body = JSON.stringify({
            email,
            password
        })
        try { 
            const response = await api.post('/auth/v1/auth/login', body)
            console.log(response)
            return response
        }catch(e) { 
            console.log(e)
            return {
                status : e.response.data.statusCode,
                message : e.response.data.message
            }
        }
         
    }

    const getUserData = async (token) => { 
        try {
            const response = await api.get('/user-producer/v1/user-producer/profile', { 
                headers : { 
                   'Authorization' : `Bearer ${token}`
                }
           })
           return response
        }catch(e) { 
            console.log(e.message)
        }
 
    }

    

    return { 
        postFormLogin,
        getUserData,
    }
}