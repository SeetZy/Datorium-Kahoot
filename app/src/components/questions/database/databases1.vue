<template>
  <div class="p-12">
    <h2 class="mb-4">Datubāze</h2>
    <h3 class="mb-3">Kas ir primārā atslēga?</h3>
    <form>
      <Form
        :answer="`Atribūts, kas identificē tabulas datus un to attiecības`"
      />
      <Form
        :answer="`Atribūts, kas piešķir tabulas datiem valstisku identifikatoru`"
      />
      <Form
        :answer="`Atribūts, kas atļauj piekļuvi tabulas datiem no ārējām programmām`"
      />
      <Form :answer="`Atribūts, kas nosaka tabulas galveno indeksu`" />
    </form>
  </div>
</template>

<script setup lang="ts">
/**
 * * Component imports
 */
import Form from '../../Form.vue'
</script>
