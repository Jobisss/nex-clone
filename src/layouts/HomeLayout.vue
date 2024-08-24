<script setup>
import NavBar from '@/components/layout/NavBar.vue';
import FooterBar from '@/components/layout/FooterBar.vue';
</script>
<template>
    <NavBar/>
    <v-main>
      <slot></slot>
    </v-main>
    <FooterBar/>
</template>


<style scoped>
</style>