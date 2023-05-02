<template>
  <div class="p-12">
    <h2 class="mb-4">Datubāze</h2>
    <h3 class="mb-3">
      Kuru no sekojošajiem SQL querijiem izmanto, lai ievietotu jaunus datus
      datubāzē?
    </h3>
    <form>
      <Form :answer="`UPDATE`" />
      <Form :answer="`DELETE`" />
      <Form :answer="`INSERT`" />
      <Form :answer="`SET`" />
    </form>
  </div>
</template>

<script setup lang="ts">
/**
 * * Component imports
 */
import Form from '../../Form.vue'
</script>
