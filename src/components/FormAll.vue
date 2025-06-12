<template>
  <v-container class="pa-4" max-width="600px">
    <v-form
      v-model="valid"
      ref="formRef"
      @submit.prevent="submitForm"
      class="form-group form-main"
    >
      <!-- Text Input -->
       <!-- Note: if prepend-icon so add class "input-prepend" -->
      <v-text-field
        variant="outlined"
        class="custom-input input-prepend"
        prepend-icon="mdi-account"
        v-model="text"
        label="Full Name"
        :rules="[(v) => !!v || 'Name is required']"
        required
      />

      <!-- Password Input -->
       <!-- Note: if append-icon so add class "input-append" -->
      <v-text-field
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        variant="outlined"
        class="custom-input input-append"
        v-model="password"
        label="Password"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        :rules="[(v) => !!v || 'Password is required']"
        required
      />

      <!-- Email Input -->
      <v-text-field
        variant="outlined"
        class="custom-input input-prepend"
        prepend-icon="mdi-email"
        v-model="email"
        label="Email"
        type="email"
        :rules="emailRules"
        required
      />

      <!-- Checkbox -->
      <v-checkbox
        class="custom-input"
        v-model="agree"
        label="I agree to the terms and conditions"
        :rules="[(v) => v || 'You must agree to continue']"
      />

      <!-- Radio Group -->
      <v-radio-group v-model="gender" label="Gender" inline>
        <v-radio label="Male" value="male" />
        <v-radio label="Female" value="female" />
        <v-radio label="Other" value="other" />
      </v-radio-group>

      <!-- Textarea -->
      <v-textarea
        variant="outlined"
        class="custom-input"
        v-model="message"
        label="Message"
        auto-grow
      />

      <!-- Range Slider -->
      <v-slider v-model="range" :max="100" :min="0" label="Select Range" />

      <!-- Select Dropdown -->
      <v-select
        variant="outlined"
        class="custom-input"
        v-model="country"
        :items="['USA', 'Canada', 'UK', 'India']"
        label="Select Country"
      />

      <!-- File Upload -->
      <v-file-input
        variant="outlined"
        class="custom-input input-prepend"
        v-model="file"
        label="Upload File"
        accept=".png,.jpg,.pdf"
      />

      <!-- Submit Button -->
      <v-btn type="submit" color="primary" class="mt-4">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formRef = ref();
const valid = ref(false);

const show1 = ref(false);

const text = ref("");
const password = ref("");
const email = ref("");
const agree = ref(false);
const gender = ref("");
const message = ref("");
const range = ref(50);
const country = ref("");
const file = ref<File | null>(null);

const emailRules = [
  (v: string) => !!v || "Email is required",
  (v: string) => /.+@.+\..+/.test(v) || "Email must be valid",
];

function submitForm() {
  if (formRef.value?.validate()) {
    console.log("Form submitted!", {
      text: text.value,
      password: password.value,
      email: email.value,
      gender: gender.value,
      message: message.value,
      range: range.value,
      country: country.value,
      file: file.value,
    });
    alert("Form submitted successfully!");
  }
}
</script>

<style scoped lang="scss">
@use "../assets/styles/page/home.scss";
</style>
