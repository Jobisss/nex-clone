import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore('menu', () => { 
    const menuState = ref(false)

    function changeMenu() { 
        menuState.value = !menuState.value
    }

    return { menuState, changeMenu }
}) 