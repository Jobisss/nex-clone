<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";

const display = useDisplay();

const { title, subtitle } = defineProps(["title", "subtitle"]);
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height class="pa-0">
        <v-row class="full-height-row no-padding pt-3 pl-3">
          <v-col
            class="pa-0 d-block"
            :class="{ 'd-sr-only': $vuetify.display.smAndDown }"
            cols="0"
            md="6"
          >
            <div class="position-absolute image-position">
              <v-img
                src="../../assets/icons/nex.png"
                class="top-0 left-0"
                :style="{
                  width: display.mdAndDown ? '1100px' : '950px',
                }"
              />
            </div>
          </v-col>
          <v-col
            class="d-flex justify-center align-center flex-column"
            cols="12"
            md="6"
          >
            <header class="w-50 mb-16 d-flex ga-2">
              <v-sheet
                width="35"
                height="18"
                color="#38BE92"
                class="rounded mt-3"
              />
              <div>
                <h2 class="font-weight-medium text-h4 text-start w-100">
                  {{ title }}
                </h2>
                <small
                  class="text-subtitle-2 font-weight-regular text-medium-emphasis"
                  >{{ subtitle }}</small
                >
              </div>
            </header>
            <slot name="form"></slot>
            <slot name="footer"></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
html,
body,
#app {
  height: 100%;
}

.image-position {
  left: -24em;
  bottom: 0em;
}

.full-height-row {
  height: 100dvh;
}
</style>
