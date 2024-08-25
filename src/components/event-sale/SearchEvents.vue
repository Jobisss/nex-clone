<template>
  <v-container
    fluid
    class="d-flex align-center flex-column flex-sm-row"
    style="justify-content: flex-end"
  >
    <v-menu scroll-strategy="close">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="text-none d-none d-sm-flex align-center text-uppercase mx-2"
          style="font-weight: 500; font-size: 14px"
          height="48px"
        >
          Categorias
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in store.categories"
          :key="index"
          :value="index"
          :to="item.href"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <SearchInput />
  </v-container>
</template>
  
  <script setup>
import { useCategory } from "@/stores/useCategory";
import SearchInput from "../commun/SearchInput.vue";

const store = useCategory();
</script>
  
  <style scoped>
.custom-text-field {
  width: 300px;
}
</style>
  