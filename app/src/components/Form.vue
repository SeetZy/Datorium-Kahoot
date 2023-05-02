<script setup lang="ts">

  const props = defineProps({
    answer: String,
    inputId: String,
    inputFor: String
  })
</script>

<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="inputId"
    />
    <label class="form-check-label" for="flexRadioDefault1">
      {{ props.answer }}
    </label>
  </div>
</template>
