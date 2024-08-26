<script setup>

import { useRoute } from "vue-router";
import { watch, ref } from "vue";
import EventSale from "./EventSale.vue";
import { getCategory } from "@/utils/getCategory";
const route = useRoute();
const eventId = ref(route.params.id);
const nameCategory = ref(getCategory(route.params.id))

watch(
    () => route.path,
    (newPath) => {
        eventId.value = route.params.id;
        nameCategory.value = getCategory(eventId.value)
    }
);

</script>
<template>
    <div>
        <SearchEvents />
        {{ nameCategory }}
        <CategoryEvents :category="nameCategory" />
        <pre>
            {{ eventId }}
        </pre>
    </div>
</template>

<style scoped></style>