<script setup>
import { useRoute } from 'vue-router';
import defineLayout from '@/layouts/defineLayout';
defineLayout()
const route = useRoute()
</script>
<template>
    <p>test {{ route.params.category }}</p>
</template>


<style scoped>
</style>