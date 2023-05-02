<template>
  <div class="p-12">
    <h2 class="mb-4">Datubāze</h2>
    <h3 class="mb-3">Kas ir NoSQL datubāze?</h3>
    <form>
      <Form
        :answer="`Nav relāciju datu bāze, kas saglabā un izgūst datus elastīgu un mērogojamu veidā`"
      />
      <Form
        :answer="`Datubāze, kas izmanto tikai SQL programmēšanas valodu datu izguvei un pārvaldībai`"
      />
      <Form
        :answer="`Datubāze, kurai vienlaikus var piekļūt tikai viens lietotājs`"
      />
      <Form :answer="`DatuBāze, kas paredzēta tikai mobilajām ierīcēm`" />
    </form>
  </div>
</template>

<script setup lang="ts">
/**
 * * Component imports
 */
import Form from '../../Form.vue'
</script>
