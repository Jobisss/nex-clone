<template>
  <v-responsive>
    <v-app>
      <component :is="layout">
        <RouterView />
      </component>
    </v-app>
  </v-responsive>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import defineLayout from './layouts/defineLayout';
const route = useRoute()

const layout = computed(()=> { 
  return defineLayout(route.meta.layout)
})

</script>
