<template>
  <div>
    <div class="d-flex align-center justify-center pa-4 px-md-16">
      <v-img
        v-if="$vuetify.display.smAndDown"
        src="../../assets/event-info/banner-mobile-dark.svg"
        class="mt-2"
      ></v-img>

      <v-img
        v-else
        src="../../assets/event-info/banner-dark.svg"
        class="mt-2"
      ></v-img>
    </div>

    <div class="d-flex align-center justify-center flex-column">
      <v-img
        src="../../assets/event-info/image1.png"
        class="centered-img d-none d-sm-flex"
      ></v-img>

      <div class="d-flex justify-center">
        <v-btn
          style="
            background-color: #38be92;
            color: #fff;
            font-weight: bold;
            width: 160px;
          "
          :to="{ name: 'signup' }"
        >
          Começar
        </v-btn>
      </div>
    </div>

    <v-row class="d-flex justify-center align-center my-4 no-gutters">
      <v-col cols="12" md="8" class="d-flex justify-center">
        <v-row class="d-flex justify-center align-center" no-gutters>
          <CardSkill v-for="item, index in cards" :key="index" :title="item.title" :icon="item.icon" :text="item.text"/>
        </v-row>
      </v-col>
    </v-row>

    <v-container
      class="d-flex justify-center"
      style="background-color: #38be9233; max-width: 2000px"
    >
      <v-row>
        <v-col
          cols="12"
          class="d-flex justify-center flex-column text-center align-center my-"
          style="flex-basis: inherit"
        >
          <p><strong>Principais recursos:</strong></p>

          <h1 class="my-3 text-primary">Tudo o que você precisa para organizar eventos.</h1>

          <p>
            <strong>
              Nosso sistema de gerenciamento de eventos inclui recursos
              avançados de credenciamento, venda de ingressos, relatórios e
              muito mais.</strong
            >
          </p>
        </v-col>

        <v-container class="justify-between pa-0">
          <v-row class="justify-center">
            <v-col
              xs="12"
              sm="12"
              md="12"
              lg="6"
              class="d-flex justify-center mt-5 flex-column text-xs-center text-md-center text-sm-center text-lg-start infos"
              style="flex-basis: inherit"
            >
              <h3>Credenciamento Facial</h3>
              <p class="text-recurse">
                Credenciamento rápido e seguro com reconhecimento facial.
              </p>

              <h3>Venda de Ingressos</h3>
              <p class="text-recurse">
                Venda de ingressos online com opções de pagamento.
              </p>

              <h3>Relatórios avançados</h3>
              <p class="text-center">
                Acompanhe todos os dados do seu evento com nossos relatórios.
              </p>
            </v-col>

            <v-col
              xs="12"
              sm="12"
              md="12"
              lg="6"
              class="d-flex justify-center pb-5"
              style="flex-basis: inherit"
            >
              <v-img
                src="../../assets/event-info/dashboard-image.png"
                class="centered-img mt-14"
                rounded
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>

    <v-container
      class="d-flex justify-center p-10 align-center"
      style="background-color: #38be92; max-width: 2000px"
    >
      <v-row class="w-50">
        <v-col
          xs="12"
          sm="12"
          md="12"
          lg="6"
          class="d-flex justify-center flex-column pa-10"
        >
          <h1 class="text-center text-white">
            Crie Seus eventos com facilidade
          </h1>

          <p class="text-center">
            Nossos sistema de credenciamento facial e venda de ingressos online
            torna a organização de eventos muito mais simples e eficiente
          </p>
        </v-col>
        <v-col
          xs="12"
          md="12"
          lg="6"
          class="d-flex justify-center flex-column align-center"
        >
          <v-btn
            style="background-color: #fff; color: #38be92; font-weight: bold"
            :to="{ name: 'signup' }"
          >
            EXPERIMENTE AGORA
          </v-btn>
        </v-col>

        <v-responsive width="100%"></v-responsive>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import CardSkill from "@/components/event-info/CardSkill.vue";

const route = useRoute();

const cards = [
  {
    title: "CREDENCIAMENTO",
    icon: "mdi-qrcode-scan",
    text: "Credenciamento por QrCode e facial, dentro da plataforma sem precisar de equipamentos."
  },
  {
    title: "FACILIDADE",
    icon: "mdi-chart-timeline-variant",
    text: "De maneira fácil e intuitiva você cria e escolhe o credenciamento que quiser."
  },
  {
    title: "RAPIDEZ",
    icon: "mdi-lightning-bolt-outline",
    text: "Resolva tudo que precisa do seu evento em questão de minutos."
  }
]

</script>

<style scoped>
.text-recurse {
  margin-bottom: 5%;
  text-align: center;
}



h3 {
  color: #38be92;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
}

p {
  opacity: 70%;
}

.centered-img {
  width: 80%;
  height: 80%;
}



.full-screen {
  width: 100vw;
}

@media (min-width: 600px) {
  .v-container {
    padding: 24px; /* Padding for tablets */
  }

  h1 {
    font-size: 2rem; /* Font size for tablets */
    text-align: left;
  }

  p {
    font-size: 1rem; /* Font size for tablets */
    text-align: left;
  }
}
</style>
