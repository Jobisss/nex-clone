<template>
  <v-row class="d-flex my-2 mx-1 w-full">
    
    <v-col
      xs="12"
      sm="12"
      md="6"
      lg="4"
      class="w-100 d-flex justify-center"
      v-for="event in filteredEvents"
      :key="event.id"
    >
      <CardEvent
        class="mx-2 w-100"
        width="100%"
        :slug="event.slug"
        :id="event.id"
        :title="event.title"
        :category="event.category"
        :photo="event.photo"
        :city="event.city"
        :state="event.state"
      />

    </v-col>
  </v-row>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  events: {
    type: Array,
    required: true,
  },
  searchQuery: {
    type: String,
    default: "",
  },
});



const filteredEvents = computed(() => {
  if (!props.searchQuery) {
    return props.events;
  }
  return props.events.filter((event) =>
    event.title.toLowerCase().includes(props.searchQuery.toLowerCase())
  );
});
</script>

<style scoped></style>
