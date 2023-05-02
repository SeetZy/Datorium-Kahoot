<template>
    <h2>Datubāzes</h2>
        <div
        class="flex items-start justify-center flex-col w-2/4 h-1/4 border-2 rounded bg-white"
        >
        <h3>Kas ir primārā atslēga?</h3>

        <Form :answer="`Atribūts, kas identificē tabulas datus un to attiecības`" />
        <Form :answer="`Atribūts, kas piešķir tabulas datiem valstisku identifikatoru`" />
        <Form :answer="`Atribūts, kas atļauj piekļuvi tabulas datiem no ārējām programmām`" />
        <Form :answer="`Atribūts, kas nosaka tabulas galveno indeksu`" />
        </div>
</template>

<script setup lang="ts">
/**
 * * Component imports
 */
 import Form from '../Form.vue'
  
</script>