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
import Form from '../components/Form.vue'

onMounted(() => {
  document.title = 'QUIZ // DATORIUM QUIZ'

  const tl = gsap.timeline({ default: { duration: 2.5, ease: 'expo.out' } })
  tl.fromTo(
    '#form',
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
})

// export default {
//   components: {
//     ChildComp,
//   },
// }
</script>

<template>
  <div class="w-full h-screen bg-red-400 flex items-center flex-col" id="form">
    <h1>Datorium Quiz</h1>
    <div class="flex items-center justify-center"></div>
    <h2>Datubāzes</h2>
    <div
      class="flex items-start justify-center flex-col w-2/4 h-1/4 border-2 rounded bg-white"
    >
      <h3>Kas ir primārā atslēga?</h3>

      <Form />
      <Form />
      <Form />
      <Form />
    </div>
  </div>
</template>
