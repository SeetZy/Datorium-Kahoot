<script setup lang="ts">
const props = defineProps({
  answer: String,
  inputId: String,
  inputFor: String,
})

const isChecked = false
</script>

<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="inputId"
      v-model="isChecked"
      required
    />
    <label class="form-check-label" for="flexRadioDefault1">
      {{ props.answer }}
    </label>
  </div>
</template>
