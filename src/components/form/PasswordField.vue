<script setup>
import { ref } from 'vue';
let show = ref(false)
let { label, errorField, message, link } = defineProps<{ label: string, errorField : string | undefined, message? : string, link? : string }>()
let model = defineModel()
</script>
<template>
    <v-text-field variant="outlined" class="w-50" :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'"
         :label="label" :name="label"  v-model="model" :error-messages="errorField"
        @click:append-inner="show = !show"  :class="{ 'w-75' : $vuetify.display.smAndDown }">
        <template class="d-flex pa-0 ma-0" v-slot:details>
            <p class="text-right text-no-wrap text-body-2" v-show="message"> <router-link class="text-primary text-decoration-none" show="link" :to="link || '/'">{{ message}}</router-link></p>
        </template>
    
    </v-text-field>
    
</template>


<style scoped>

</style>