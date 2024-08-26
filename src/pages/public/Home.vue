<script setup>
import { useRoute } from 'vue-router';
import SearchInput from '@/components/commun/SearchInput.vue';
const route = useRoute()
import CarrouselEvents from '@/components/event/CarrouselEvents.vue';
import useEventParticipantHook from '../../composables/useEventParticipantApi';
import { ref, onMounted } from 'vue';

const { eventParticipantControllerFindAllPublicEvents } = useEventParticipantHook();

const events = ref([]);
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await eventParticipantControllerFindAllPublicEvents(10, 1, '', '');
    events.value = data.data || []; // Atualizando o estado com os dados recebidos
    loading.value = false
  } catch (error) {
    console.error('Failed to fetch events:', error);
  }
});

</script>
<template>
  <div>
    <v-container fluid>
      <v-container fluid class="d-flex flex-column pa-0">
        <div class="mb-8 text-center title">
          <h1 class="display-1">
            Só os
            <strong style="color: #f2af29">melhores </strong>
            <strong style="color: #38be92">eventos</strong>
            para você na nossa plataforma
          </h1>
        </div>

        <SearchInput/>
        <div v-if="!loading">
          <CarrouselEvents :events="events"/>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>

        <div class="d-flex justify-center my-2 align-center">
          <v-btn
            style="
              background-color: #38be92;
              color: #fff;
              font-weight: bold;
              width: 200px;
            "
          >
            Ver mais Eventos
            <v-icon size="large">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-container>

      <v-container fluid class="py-10" style="background-color: #38be9233">
        <v-row class="d-flex justify-between" align="center" no-gutters>
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center flex-column align-center text-center"
          >
            <h1>Eventos irados para você</h1>
            <p>
              Encontre o evento ideal para participar, só os melhores
              palestrantes você encontra aqui!
            </p>
          </v-col>

          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center flex-column align-center mt-6 mt-md-0"
          >
            <v-btn
              style="background-color: #fff; color: #38be92; font-weight: bold"
            >
              Ver mais Eventos <v-icon size="large">mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<style scoped>
.title h1 {
  width: 70vh;
  font-size: 3.1rem;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 500;
  word-spacing: 5px;
  text-align: start;
}

@media (max-width: 768px) {
  .title h1 {
    width: 100%; /* Ajuste a largura para caber no mobile */
    font-size: 2rem; /* Diminui o tamanho da fonte */
    text-align: center; /* Centraliza o texto */
    word-spacing: normal; /* Ajuste de espaçamento */
  }

  .v-btn {
    width: 100%;
  }

  .mb-8 {
    margin-bottom: 16px !important;
  }

  .my-3 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .my-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .v-col {
    margin-top: 16px !important;
  }

  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }
}

.img-bg {
  position: absolute;
  top: 0;
}

.container-absolute {
  position: relative;
  top: 0;
}
</style>