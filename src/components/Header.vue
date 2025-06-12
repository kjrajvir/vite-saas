<template>
  <v-app-bar color="primary" dark class="header">
    <v-img class="Logo" :width="50" :height="50" cover :src="Logo" />
    <v-spacer />
    <v-icon color="white" class="me-2">
      <IconDashbord />
    </v-icon>
    <v-btn @click="toggleTheme" variant="outlined">
      {{ currentTheme }}
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import "../assets/styles/common/nav.scss";
import { useTheme } from "vuetify";
import { computed, onMounted } from "vue";
import IconDashbord from "./icons/IconDashbord.vue";

// Vuetify theme composable
const theme = useTheme();

// On component mount, apply saved theme from localStorage if valid
onMounted(() => {
  const savedTheme = localStorage.getItem("vuetify-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    theme.global.name.value = savedTheme;
  }
});

// Computed property for current theme (reactive)
const currentTheme = computed<string>(() => theme.global.name.value);

// Toggle theme and persist to localStorage
function toggleTheme(): void {
    theme.global.name.value =
    theme.global.name.value === "light" ? "dark" : "light";
    localStorage.setItem("vuetify-theme", theme.global.name.value);
}

// @ts-ignore
import Logo from "../assets/images/logo.svg";
</script>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>