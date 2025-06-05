<template>
  <VApp id="inspire" :theme="theme">
    <VNavigationDrawer v-model="drawer" expand-on-hover rail permanent>
      <VList>
        <VListItem
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          subtitle="sandra_a88@gmailcom"
          title="Sandra Adams"
        ></VListItem>
      </VList>

      <v-divider></v-divider>
      <VListItem prepend-icon="mdi-home" title="Home" to="/"></VListItem>
      <VListItem prepend-icon="mdi-home" title="About" to="/about"></VListItem>      
      <VList v-model:opened="open">
        <VListGroup :value="title" v-for="([title, icon2]) in admins" :collapse="false">
          <template v-slot:activator="{ props }">
            <VListItem
              v-bind="props"
              :title="title"
              :prepend-icon="icon2"
            ></VListItem>
          </template>
          <VListItem
            v-for="([title, icon], i) in cruds"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></VListItem>
        </VListGroup>
      </VList>
    </VNavigationDrawer>

    <VAppBar>
      <VAppBarNavIcon @click="drawer = !drawer"></VAppBarNavIcon>

      <VAppBarTitle>Application</VAppBarTitle>
      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        text="Toggle Theme"
        slim
        @click="onClick"
      ></v-btn>
    </VAppBar>

    <VMain>
      <VContainer fluid>
        <router-view></router-view>

      </VContainer>
    </VMain>
  </VApp>
</template>
<script setup lang="ts">
import { ref } from "vue";
const theme = ref("light");
const drawer = ref<boolean | null>(null);
const open = ref(["Users"]);

const admins = [
  ["Users", "mdi-account-multiple-outline"],
  ["Roles", "mdi-account-key-outline"],
  ["Permissions", "mdi-lock-outline"],
  ["Logs", "mdi-file-document-outline"],
  ["Management", "mdi-account-multiple-outline"],
  ["Settings", "mdi-cog-outline"],
];
const cruds = [
  ["Create", "mdi-pool"],
  ["List", "mdi-file-outline"],
];
function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
<style>
html,
body,
#app {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
