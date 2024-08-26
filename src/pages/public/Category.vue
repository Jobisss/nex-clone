<script setup>
import { useRoute } from "vue-router";
import { watch, ref, onMounted, computed } from "vue";
import SearchEvents from "@/components/event-sale/SearchEvents.vue";
import CarrouselEvents from "@/components/event/CarrouselEvents.vue";
import { getCategory } from "@/utils/getCategory";
import CategoryGrid from "@/components/category/CategoryGrid.vue";
const route = useRoute()
const nameCategory = ref(getCategory(route.params.category))
const events = ref([])
const query = ref('')




const mockEvents = [
  {
    id: '1',
    title: 'Music Festival',
    slug: 'music-festival',
    category: 'Entertainment',
    photo: 'music-festival.jpg',
  },
  {
    id: '2',
    title: 'Tech Conference',
    slug: 'tech-conference',
    category: 'Technology',
    photo: 'tech-conference.jpg',
  },
  {
    id: '3',
    title: 'Art Exhibition',
    slug: 'art-exhibition',
    category: 'Art',
  },
  {
    id: '4',
    title: 'Food Fair',
    slug: 'food-fair',
    category: 'Culinary',
    photo: 'food-fair.jpg',
  },
  {
    id: '5',
    title: 'Literature Meetup',
    slug: 'literature-meetup',
    category: 'Literature',
  },
  {
    id: '6',
    title: 'Startup Pitch Event',
    slug: 'startup-pitch-event',
    category: 'Business',
    photo: 'startup-pitch-event.jpg',
  },
  {
    id: '7',
    title: 'Film Screening',
    slug: 'film-screening',
    category: 'Entertainment',
    photo: 'film-screening.jpg',
  },
  {
    id: '8',
    title: 'Photography Workshop',
    slug: 'photography-workshop',
    category: 'Photography',
  },
  {
    id: '9',
    title: 'Yoga Retreat',
    slug: 'yoga-retreat',
    category: 'Wellness',
    photo: 'yoga-retreat.jpg',
  },
  {
    id: '10',
    title: 'Environmental Awareness Seminar',
    slug: 'environmental-awareness-seminar',
    category: 'Environment',
  }
];





const fetchEvents = async (categoryParams) => {
  console.log(categoryParams, "Category")
  const response = await eventParticipantControllerFindAllPublicEvents("100", '1', undefined, categoryParams)
  console.log(response)
}

onMounted(()=> {
    events.value = mockEvents
})

watch(
     () => route.path,
     (newPath) => {
         nameCategory.value = getCategory(route.params.category)
         console.log(nameCategory.value)
         fetchEvents(getCategory(nameCategory.value))
     }
 );

 const filtredEvents = computed(()=> { 
    return events.value.filter(event => event.title.toLowerCase().includes(query.value.toLowerCase()))
 })


</script>
<template>    
    <SearchEvents v-model="query"></SearchEvents>
    <CategoryGrid :events="filtredEvents"></CategoryGrid>
          
</template>

<style scoped></style>