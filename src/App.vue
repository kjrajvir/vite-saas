<template>
  <v-app class="main-model">
     <SideBar />
    <v-main>
       <Header />
      <div class="main-content-box">
         text
         <HelloWorld />
      </div>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import SideBar from './components/SideBar.vue';
import Header from './components/Header.vue';
</script>