<script setup>
import { useRoute } from "vue-router";
import { watch, ref, onMounted, computed } from "vue";
import SearchEvents from "@/components/event-sale/SearchEvents.vue";
import { getCategory } from "@/utils/getCategory";
import useEventParticipantHook from "@/composables/useEventParticipantApi";
import CategoryGrid from "@/components/category/CategoryGrid.vue";
const route = useRoute()
const nameCategory = ref(getCategory(route.params.category))
const events = ref([]);
const query = ref('')

const { eventParticipantControllerFindAllPublicEvents } = useEventParticipantHook();

const loading = ref(true)

async function fetchEvents(routeParam) { 
    const { data } = await eventParticipantControllerFindAllPublicEvents(100, 1, '', getCategory(routeParam));
    events.value = data.data || [];
    loading.value = false
}

onMounted(async () => {
  const rt = useRoute()
  try {
    fetchEvents(rt.params.category)
  } catch (error) {
    console.error('Failed to fetch events:', error);
  }
});

watch(
  () => route.path,
  async (newPath) => {
    nameCategory.value = getCategory(route.params.category);
    fetchEvents(route.params.category);
  }
);

const filtredEvents = computed(() => {
  return events.value.filter((event) =>
    event.title.toLowerCase().includes(query.value.toLowerCase())
  );
});
</script>
<template>
  <div>
    <SearchEvents v-model="query"></SearchEvents>
    <div>
      <CategoryGrid :events="filtredEvents"></CategoryGrid>
    
    </div> 
  </div>
</template>

<style scoped></style>
