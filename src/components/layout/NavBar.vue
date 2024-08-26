<script setup>

import { useCategory } from "../../stores/useCategory";
import { useMenuStore } from "../../stores/useMenu"
import { useRouter } from "vue-router";
import { ref } from "vue";
const  menuContext  = useMenuStore();
const router = useRouter()
const user = useUserStore()
const store  = useCategory();

const menu = ref(false)
</script>
<template>
  <v-app-bar
    class="px-5"
    density="comfortable"
    flat
    floating
    height="89"
    scroll-behavior="fade-image"
  >
   <v-app-bar class="px-5" density="comfortable" flat floating height="89" scroll-behavior="fade-image">
    <template #prepend>
      <div class="mr-5">
        <v-app-bar-nav-icon @click.stop="menuContext.changeMenu()" class="d-sm-none" slim size="50"></v-app-bar-nav-icon>
        <router-link :to="{ name: 'home' }">
          <v-img class="" v-show="!$vuetify.display.xs" aspect-ratio="1/1" :width="50" cover
            src="../../assets/icons/nex.png">
          </v-img>
        </router-link>
      </div>
    </template>
    <template #default>
      <div class="d-flex ga-2 justify-start w-100">
        <v-btn v-show="!$vuetify.display.smAndDown" :to="{ name: 'event' }"> Eventos </v-btn>
        <v-menu scroll-strategy="close">
          <template #activator="{ props }">
            <v-btn append-icon="mdi-chevron-down" v-bind="props"> Categorias </v-btn>
          </template>
          <v-list nav >
            <v-list-item
              v-for="(category, index) in store.categories"
              :to="{ name: 'category', params: { category: category.href } }"
              :key="index"
            >
              <v-list-item-title class="text-uppercase">{{ category.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-show="!$vuetify.display.smAndDown" class="text-uppercase text-none" style="font-weight: 500; font-size: 14px; color: #f2af29" :to="{ name: 'intro' }" > Produzir Eventos </v-btn>
      </div>
    </template>
    <template #append>
      <div v-if="user.userInfo">
        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-app-bar-nav-icon v-bind="props" size="x-large" block border="sm" density="comfortable"
              icon="mdi-account-circle"></v-app-bar-nav-icon>
          </template>

          <v-list>
            <v-list-item elevation-11 >
              <v-row align="center" class="no-wrap" style="width: 300px;">
                <v-app-bar-nav-icon size="54" density="comfortable" icon="mdi mdi-account-circle"
                  readonly></v-app-bar-nav-icon>
                <v-col>
                  <p class="line-clamp text-body-1">{{ user.userInfo.data.name }}</p>
                  <p class="line-clamp text-body-2 text-medium-emphasis font-weight-medium">{{  user.userInfo.data.email  }}</p>
                </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-btn class=" d-flex align-center justify-start w-100">
                <template #prepend align="left">
                  <v-icon>mdi-account</v-icon>
                </template>
                Perfil
               
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn class=" d-flex align-center justify-start w-100">
                <template #prepend align="left">
                  <v-icon>mdi-view-dashboard</v-icon>
                </template>
                Painel
               
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="user.removeUserData(router)" color="red-lighten-1" class=" d-flex align-center justify-start w-100">
                <template #prepend align="left">
                  <v-icon>mdi-view-dashboard</v-icon>
                </template>
                Sair
               
              </v-btn>
            </v-list-item>
          </v-list>

        </v-menu>

      </div>
      <div v-else class="d-flex ga-2">
        <v-btn :to="{ name: 'signup' }" class="text-uppercase" style="
            background-color: #38be92;
            color: #fff;
            font-weight: bold;
            font-size: 14px;
          ">
          Cadastre-se
        </v-btn>
        <v-btn :to="{ name: 'signin' }" class="custom-outlined text-uppercase" style="font-size: 14px"
          variant="outlined">
          Entrar </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-wrap {
  flex-wrap: nowrap
}
</style>
