<script setup>
import useEventParticipantHook from '@/composables/useEventParticipantApi';
import { ref, onMounted } from 'vue';
import { useCategory } from '@/stores/useCategory';
import CarrouselEvents from '@/components/event/CarrouselEvents.vue';
import { getCategory } from '@/utils/getCategory';
import CategoryGrid from '@/components/event/GridEvent.vue';

const store = useCategory()
const { eventParticipantControllerFindAllPublicEvents, eventParticipantControllerGetEventsMoreView } = useEventParticipantHook();

const eventsMoreViews = ref([]);
const eventAll = ref([]);
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await eventParticipantControllerGetEventsMoreView();
    const response = await eventParticipantControllerFindAllPublicEvents(100, 1, '', '')
    eventsMoreViews.value = data || []; // Atualizando o estado com os dados recebidos
    eventAll.value = response.data.data || []
    loading.value = false
  } catch (error) {
    console.error('Failed to fetch events:', error);
  }
});
</script>
<template>
  <div>
    <v-img cover src="../../assets/event-sale/capa.gif"> </v-img>
    <SearchEvents />
    <div v-if="!loading">
      <h1 class="text-center text-sm-start ml-0 ml-sm-6">Evento em Destaque</h1>
      <CategoryGrid :events="eventsMoreViews" />
      <div v-for="category, index in store.categories" :key="index" v-show="eventAll.filter( event => event.category === category.title ).length > 0">
        
        <h1 class="text-center text-sm-start ml-0 ml-sm-6">Evento de {{ category.title }}</h1>
        <CategoryGrid  :events="eventAll.filter( event => event.category === category.title )" />
      </div>
    </div>
    <div v-else>
    </div>

  </div>
</template>

