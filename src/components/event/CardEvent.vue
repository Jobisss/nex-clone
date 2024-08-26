<script setup>
import { BASE_IMAGE_URL } from '@/utils/getConstants';
import { firstAndLastWordFirstLetters } from '@/utils/getNameInitials';

const {category, id ,photo ,slug ,title, mobile, fixed } = defineProps(['category', 'id', 'photo', 'title', 'mobile','fixed'])
  
</script>
<template>
  <router-link to="/" class="w-100">
    <v-card class="rounded-lg card " :class="{ 'fixed-content' : fixed, 'full' : !fixed }" height="350px">
      <v-img
        v-if="photo"
        height="160"
        :src="BASE_IMAGE_URL + photo"
        cover
        rounded
        class="mb-2 position-relative rounded-lg "
        :class="{'w-100' : $vuetify.display.smAndDown}"
      ></v-img>
      <v-sheet
        v-else
        height="160" 
        cover
        rounded 
        class="d-flex justify-center align-center"
      >
          <p class="text-primary text-uppercase text-h3" >{{ firstAndLastWordFirstLetters(title) }}</p>
      </v-sheet>

      <v-chip
        color="background2"
        variant="flat"
        class="position-absolute elevation-5"
        style="top: 5px; left: 5px"
      >
        {{ category }}
      </v-chip>
      <div class="px-4 mb-2 d-flex text-truncate" style="font-size: 24px; width: 93%">
        {{ title }}
      </div>

      <v-divider class="mx-4 mb-4"></v-divider>

      <div>
        <div class="px-4 d-flex mb-1 align-center">
          <v-icon size="sm" class="mx-1"> mdi-calendar </v-icon>
          13/06/2024
        </div>

        <div class="px-4 mb-2 d-flex align-center">
          <v-icon size="x-small" class="mx-1"> mdi-map-marker </v-icon>
          Arapuã - Paraná
        </div>
      </div>

      <v-card-actions>
        <v-btn color="primary" block border>
          Ingressos Disponíveis
          <v-icon size="large">mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </router-link>
</template>
<style>
a {
  text-decoration: none;
  margin: 0;
  display: flex;
  justify-content: center;
}

.card:hover {
  filter: brightness(1.05);
}

.fixed-content { 
   width: 300px;
}

.full { 
  width: 100%;
}

.card-size { 
   width: 25vw;
}

@media (max-width: 600px) {
  .card {
    width: 320px;
    margin: 0;
  }

  @media (max-width: 360px){
    .card {
      width: 310;
      margin: 0;
      padding: 0;
    }
  }
}
</style>