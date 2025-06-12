<template>
  <v-navigation-drawer
    class="side-nav"
    v-model="drawer"
    expand-on-hover
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <VList density="compact" nav>
    <VListItem
      prepend-icon="mdi-folder"
      title="My Files"
      value="myfiles"
    ></VListItem>
    <VListItem
      prepend-icon="mdi-account-multiple"
      title="Shared with me"
      value="shared"
    ></VListItem>
    <VListItem
      prepend-icon="mdi-star"
      title="Starred"
      value="starred"
    ></VListItem>

    <!-- Dynamic Admin Groups -->
    <VListGroup
      v-for="([groupTitle, groupIcon], groupIndex) in admins"
      :key="groupIndex"
      :value="groupTitle"
      :collapse="false"
    >
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          :title="groupTitle"
          :prepend-icon="groupIcon"
        />
      </template>

      <VListItem
        v-for="([crudTitle, crudIcon], crudIndex) in cruds"
        :key="`${groupIndex}-${crudIndex}`"
        :title="crudTitle"
        :prepend-icon="crudIcon"
        :value="crudTitle"
      />
    </VListGroup>
  </VList>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { defineOptions } from "vue";

defineOptions({
  name: "SideBar",
});

// Drawer state
const drawer = ref<boolean>(true);
const rail = ref<boolean>(true);

// Admin sections with icons
const admins: Array<[string, string]> = [
  ["Users", "mdi-account-multiple-outline"],
  ["Roles", "mdi-account-key-outline"],
  ["Permissions", "mdi-lock-outline"],
  ["Logs", "mdi-file-document-outline"],
  ["Management", "mdi-account-multiple-outline"],
  ["Settings", "mdi-cog-outline"],
];

// CRUD sub-items with icons
const cruds: Array<[string, string]> = [
  ["Create", "mdi-pool"],
  ["List", "mdi-file-outline"],
];
</script>

<style scoped lang="scss">
@use "../assets/styles/common/sidebar.scss" as *;
</style>
