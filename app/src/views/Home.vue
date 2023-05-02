<script setup lang="ts">
/**
 * * Library imports
 */
import { onMounted } from 'vue'
// ? https://www.npmjs.com/package/gsap
import gsap from 'gsap'

/**
 * * Component imports
 */
import Databases from '../components/questions/databases.vue'
import Datorsystems from '../components/questions/datorsys.vue'
import ProblemAnalysis from '../components/questions/problemAnalysis.vue'

onMounted(() => {
  document.title = 'QUIZ // DATORIUM QUIZ'

  const tl = gsap.timeline({ default: { duration: 2.5, ease: 'expo.out' } })
  tl.fromTo(
    '#form',
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
})
</script>

<template>
  <div
    class="w-full bg-bg-png bg-cover bg-scroll min-h-screen flex items-center justify-center flex-col"
    id="form"
  >
    <div class="flex justify-center bg-white rounded-md p-3 w-[70vw] mt-2">
      <h1>Datorium Quiz</h1>
    </div>
    <Databases />
    <Datorsystems />
    <ProblemAnalysis />

  </div>
</template>
