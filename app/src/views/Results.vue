<script setup lang="ts">
/**
 * * Library imports
 */
import { onMounted } from 'vue'
// ? https://www.npmjs.com/package/gsap
import gsap from 'gsap'

onMounted(() => {
  document.title = 'RESULTS // DATORIUM QUIZ'

  const tl = gsap.timeline({ default: { duration: 2.5, ease: 'expo.out' } })
  tl.fromTo(
    '#form',
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
})
</script>

<template>
  <div class="w-full h-screen bg-red-400 flex justify-center items-center">
    <div class="w-[60vw] h-auto bg-white rounded-lg p-4" id="form">
      <h1 class="text-center">Datorium Quiz Results</h1>
    </div>
  </div>
</template>
