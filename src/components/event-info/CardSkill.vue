<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'Default Title'
  },
  text: {
    type: String,
    default: 'Default text content goes here.'
  },
  icon: {
    type: String,
    default: 'mdi-qrcode-scan'
  }
})


</script>
<template>
  <v-col cols="12" sm="12" md="4" class="d-flex justify-center">
    <v-card :class="['side-card', { 'card-center': title === 'FACILIDADE'}]" class="side-card d-flex flex-column align-center p-4 mx-2 mx-md-0">
      <div class="d-flex justify-center align-center flex-column mt-3">
        <v-icon size="x-large" class="icon">{{ icon}}</v-icon>
        <v-card-title>{{title}}</v-card-title>
      </div>
      <v-card-text class="text-center">
        <slot name="text">{{ text }}</slot>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style scoped>
.side-card {
  width: 100%;
  height: 200px;
}

.card-center {
  background-color: #38be92;
}

.icon {
  margin-bottom: 8px;
}

.v-card-text {
  text-align: center;
}

.v-row {
  flex-wrap: wrap;
}

/* Media Query para telas menores */
@media (max-width: 600px) {
  .v-card-text {
    padding: 2 16px; /* Adicionar padding horizontal para melhor leitura */
  }

  .icon {
    font-size: 2.5rem; /* Ajustar o tamanho do ícone para telas menores */
  }
}
</style>
