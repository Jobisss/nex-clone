<script setup>
import NavBar from "@/components/layout/NavBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import NavBarMobile from "../components/layout/NavBarMobile.vue";
</script>
<template>
  <NavBarMobile />
  <NavBar />
  <v-main>
    <slot></slot>
  </v-main>
  <FooterBar />
</template>

<style scoped></style>
