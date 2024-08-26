<script setup></script>

<template>
  <v-row class="d-flex justify-center align-center my-4 no-gutters">
    <v-col cols="12" md="8" class="d-flex justify-center">
      <v-row class="d-flex justify-center align-center" no-gutters>
        <v-col cols="12" sm="12" md="4" class="d-flex justify-center">
          <v-card class="side-card d-flex flex-column align-center p-4 mx-2 mx-md-0">
            <div class="d-flex justify-center align-center flex-column mt-3 ">
              <v-icon size="x-large" class="icon">mdi-qrcode-scan</v-icon>
              <v-card-title>CREDENCIAMENTO</v-card-title>
            </div>
            <v-card-text class="text-center">
              Credenciamento por QrCode e facial, dentro da plataforma sem
              precisar de equipamentos.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" class="d-flex justify-center">
          <v-card
            class="side-card d-flex flex-column align-center p-4 card-center mx-2 mx-md-0"
          >
            <div class="d-flex justify-center align-center flex-column mt-3">
              <v-icon class="icon" size="x-large"
                >mdi-chart-timeline-variant</v-icon
              >
              <v-card-title>FACILIDADE</v-card-title>
            </div>
            <v-card-text class="text-center">
              De maneira fácil e intuitiva você cria e escolhe o credenciamento
              que quiser.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" class="d-flex justify-center">
          <v-card class="side-card d-flex flex-column align-center p-4 mx-2 mx-md-0">
            <div class="d-flex justify-center align-center flex-column mt-3">
              <v-icon size="x-large" class="icon"
                >mdi-lightning-bolt-outline</v-icon
              >
              <v-card-title>RAPIDEZ</v-card-title>
            </div>
            <v-card-text class="text-center">
              Resolva tudo que precisa do seu evento em questão de minutos.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
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
