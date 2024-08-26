<script setup>
  import FooterBar from '@/components/layout/FooterBar.vue';
</script>
<template>
<div>
  <v-main>
      <slot></slot>
    </v-main>
    <footer-bar/>
</div>
</template>


<style scoped>
</style>