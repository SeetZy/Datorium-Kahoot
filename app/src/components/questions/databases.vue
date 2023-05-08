<template>
  <div class="mt-4 mb-4 p-6 border-2 rounded bg-white">
    <h2 class="mb-4">Datubāze</h2>
    <h3 class="mb-3">Kas ir primārā atslēga?</h3>
    <form>
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
      <button type="submit" class="btn btn-primary mt-2">
        Iesniegt atbildes
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
/**
 * * Component imports
 */
import Form from '.././Form.vue'
</script>
