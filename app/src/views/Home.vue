<script setup lang="ts">
import App from '..App.vue/'

document.title = 'QUIZ // DATORIUM KAHOOT'
</script>

<template>
  <div class="w-full h-screen bg-red-400 flex justify-center">
    <h1>Datorium Quiz</h1>
    <a href="#/">Home</a> | <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" />
  </div>
</template>
