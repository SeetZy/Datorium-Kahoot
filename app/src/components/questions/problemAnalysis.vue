<template>
    <h2>Problēmas analīze</h2>
        <div
        class="flex items-start justify-center flex-col w-2/4 h-1/4 border-2 rounded bg-white"
        >
        <h3>Kas ir SWOT analīze?</h3>

        <Form :answer="`Analīzes metode, kas koncentrējas uz spēcīgo un vājo pušu noteikšanu`" />
        <Form :answer="`Analīzes metode, kas pēta uzņēmuma darba vides ietekmi`" />
        <Form :answer="`Analīzes metode, kas pēta uzņēmuma finanšu stāvokli`" />
        <Form :answer="`Analīzes metode, kas koncentrējas uz uzņēmuma tehnoloģisko attīstību`" />
        </div>
</template>

<script setup lang="ts">
/**
 * * Component imports
 */
 import Form from '../Form.vue'
  
</script>