<script setup>
import { useCategory } from "@/stores/useCategory";
import { ref } from "vue";
import { useMenuStore } from "../../stores/useMenu"

const store = useCategory();
const menuContext = useMenuStore();

console.log(store)



const menuState = ref(false);
</script>
<template>
  <v-navigation-drawer
    temporary
    v-model="menuContext.menuState"
    :location="$vuetify.display.mobile ? 'left' : undefined"
  >
    <img
      class="position-absolute"
      src="../assets/LoginPage/nex.png"
      width="30"
      alt=""
      style="top: 1em; right: 1em"
    />
    <div class="my-14"></div>
    <v-list>
      <v-list-item
        title="Início"
        link
        to="/"
        prepend-icon="mdi-home-variant-outline"
      ></v-list-item>
      <v-list-item
        title="Eventos"
        link
        to="/event-sale"
        prepend-icon="mdi-calendar-blank"
      ></v-list-item>
      <v-list-group value="categories">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-tag"
            title="Categories"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="(category, index) in store.categories"
          :key="index"
          link
          :to="{ name: 'category', params: { category: category.href } }"
          :title="category.title"
        ></v-list-item>
      </v-list-group>

      <v-list-item
        title="Produzir Eventos"
        link
        :to="{ name: 'intro' }"
        prepend-icon="mdi-calendar-plus"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
