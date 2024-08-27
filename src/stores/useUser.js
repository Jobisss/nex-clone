import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { useAthApiHook } from "@/composables/useAuthApi";
import { useRouter } from "vue-router";



export const useUserStore = defineStore('menu', () => { 
    const userInfo = ref(null)
    const { getUserData } = useAthApiHook()

    onMounted(async ()=>{ 
        if(window.localStorage.getItem('token')) { 
            const data = await getUserData(window.localStorage.getItem('token'))
            userInfo.value = data    
        }
    })

    function updateUser(info) { 
        userInfo.value = info
    }

    function removeUserData(router) {

        try { 
            window.localStorage.removeItem('token')
            router.push('/signin')
        }catch(e) { 
        }
    }

    return { userInfo, updateUser, removeUserData }
}) 