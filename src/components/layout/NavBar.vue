<script setup>
import { useCategory } from '@/stores/useCategory';

const { categories } = useCategory()
</script>
<template>
  <v-app-bar class="px-5" density="comfortable" flat floating height="89" scroll-behavior="fade-image">
    <template #prepend>
      <div class="mr-5">
        <v-app-bar-nav-icon v-show="$vuetify.display.xs" icon="mdi mdi-menu"></v-app-bar-nav-icon>
        <v-img class="" v-show="!$vuetify.display.xs" aspect-ratio="1/1" :width="50" cover
          src="../../assets/icons/nex.png">
        </v-img>
      </div>

    </template>
    <template #default>
      <div class="d-flex justify-start w-100">
        <v-btn :to="{ name: 'event' }">
          Eventos
        </v-btn>
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              Categorias
            </v-btn>
          </template>
          <v-list nav>
            <v-list-item v-for="category in categories" :to="{ name: 'category', params: { category: category.href } }">
              <v-list-item-title>{{ category.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn :to="{ name: 'intro' }">
          Produzir Eventos
        </v-btn>
      </div>
    </template>
    <template #append>
      <div class="d-flex ga-2">
        <v-btn :to="{ name: 'signup' }" >
          Cadastre-se
        </v-btn>
        <v-btn :to="{ name: 'signin' }" >
          Entrar
        </v-btn>
      </div>

    </template>

  </v-app-bar>
</template>

<style scoped></style>
