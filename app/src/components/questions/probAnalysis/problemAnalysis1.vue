<template>
  <div class="p-12">
    <h2 class="mb-4">Problēmas analīze</h2>
    <h3 class="mb-3">Kas ir SWOT analīze?</h3>

    <form>
      <Form
        :answer="`Analīzes metode, kas koncentrējas uz spēcīgo un vājo pušu noteikšanu`"
      />
      <Form
        :answer="`Analīzes metode, kas pēta uzņēmuma darba vides ietekmi`"
      />
      <Form :answer="`Analīzes metode, kas pēta uzņēmuma finanšu stāvokli`" />
      <Form
        :answer="`Analīzes metode, kas koncentrējas uz uzņēmuma tehnoloģisko attīstību`"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
/**
 * * Component imports
 */
import Form from '../../Form.vue'
</script>
