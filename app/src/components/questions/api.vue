<template>
  <div class="mt-4 mb-4 p-6 border-2 rounded bg-white">
    <h2 class="mb-4">API</h2>
    <h3 class="mb-3">Kas ir API atslēga ?</h3>

    <form>
      <Form
        :answer="`Unikāls identifikators, ko izmanto, lai autentificētu un piekļūtu API`"
      />
      <Form
        :answer="`Šifrēšanas veids, ko izmanto, lai nodrošinātu ar API pārsūtītos datus`"
      />
      <Form :answer="`Rīks, ko izmanto API dokumentācijas ģenerēšanai`" />
      <Form :answer="`Programmēšanas valoda, ko izmanto, lai izveidotu API `" />
    </form>
    <h3 class="mb-3">Kāda ir API nozīme programmēšanā?</h3>

    <form>
      <Form
        :answer="`Programmatūras funkcija, kas ļauj noteikt lietotāju autorizācijas līmeni un drošības iestatījumus `"
      />
      <Form
        :answer="`Valodu izpratnes līmenis, kas nepieciešams, lai programmētājs varētu strādāt ar konkrētu valodu`"
      />
      <Form
        :answer="`Datubāzes sistēma, kas izmanto API tehnoloģijas, lai nodrošinātu savienojamību starp datu avotu un lietotņu programmētāju. `"
      />
      <Form
        :answer="`Analīzes metode, kas koncentrējas uz uzņēmuma tehnoloģisko attīstību`"
      />
    </form>
    <h3 class="mb-3">Kas ir SWOT analīze?</h3>

    <form>
      <Form
        :answer="`Analīzes metode, kas koncentrējas uz spēcīgo un vājo pušu noteikšanu`"
      />
      <Form
        :answer="`Analīzes metode, kas pēta uzņēmuma darba vides ietekmi`"
      />
      <Form :answer="`Analīzes metode, kas pēta uzņēmuma finanšu stāvokli`" />
      <Form
        :answer="`Analīzes metode, kas koncentrējas uz uzņēmuma tehnoloģisko attīstību`"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
/**
 * * Component imports
 */
import Form from '.././Form.vue'
</script>
