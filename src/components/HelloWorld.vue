<template>
  <v-form v-model="valid">
    <v-row class="form-group">
      <v-col cols="12" md="4">
        <v-text-field
          variant="outlined"
          v-model="firstname"
          :counter="10"
          :rules="nameRules"
          label="First name"
          required
          class="custom-input"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          variant="outlined"
          v-model="lastname"
          :counter="10"
          :rules="nameRules"
          label="Last name"
          required
          class="custom-input"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          variant="outlined"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="8">
        <v-textarea
          label="Textarea"
          variant="outlined"
          v-model="textarea"
          :rules="textareaError"
          placeholder="Enter your message"
          class="custom-input"
          rows="2"
          required
        ></v-textarea>
      </v-col>
    </v-row>
    <div style="text-align: center">
      <VBtn>Vuetify Button</VBtn>
    </div>
  </v-form>
  <FormAll />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { defineOptions } from "vue";
import FormAll from "./FormAll.vue";

defineOptions({
  name: "HelloWorld",
});

const valid = ref(false);
const firstname = ref("");
const lastname = ref("");
const textarea = ref("");
const email = ref("");

// Validation
const nameRules = [
  (value: string) => !!value || "Name is required.",
  (value: string) =>
    value?.length <= 10 || "Name must be less than 10 characters.",
];

const textareaError = [(value: string) => !!value || "Message is required."];

const emailRules = [
  (value: string) => !!value || "E-mail is required.",
  (value: string) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
];
</script>

<style scoped lang="scss">
@use "../assets/styles/page/home.scss";
</style>
