<script setup lang="ts">

  const props = defineProps({
    answer: String
  })
</script>

<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
    />
    <label class="form-check-label" for="flexRadioDefault1">
      {{ props.answer }}
    </label>
  </div>
</template>
