<template>
   <div class="mt-4 mb-4 p-6 border-2 rounded bg-white">
    <h2 class="mb-4">Datorsistēmas</h2>
    <h3 class="mb-3">Ko dara nslookup funkcija?</h3>
    <form @submit.prevent>
      <form @submit.prevent>
      <Form
        :answer="`Pārbauda, vai tīkla savienojums starp diviem datoriem ir iespējams`"
      />
      <Form
        :answer="`Kas palīdz meklēt informāciju par datu bāzes objektiem`"
      />
      <Form
        :answer="`Ļauj noteikt, vai dators ir savienots ar internetu un noskaidrot tā IP adresi`"
      />
      <Form
        :answer="`Ļauj automātiski atlasīt un konfigurēt tīkla savienojumus starp vairākiem datoriem un tīkla elementiem`"
      />

    </form>
    <h3 class="mb-3">Kas ir IP adrese?</h3>
    <form @submit.prevent>
      <Form
        :answer="`Programmatūras veids, ko izmanto datu bāzu pārvaldīšanai`"
      />
      <Form
        :answer="`Unikāls skaitliskais identifikators, kas piešķirts katrai ierīcei tīklā, kas izmanto internetu`"
      />
      <Form
        :answer="`Fiziskā adrese, ko tīkla ierīces izmanto, lai sazinātos savā starpā`"
      />
      <Form
        :answer="`Tīmekļa pārlūkprogrammas veids, ko izmanto, lai piekļūtu internetam`"
      />
    </form>

    <h3 class="mb-3">Kas ir HTTPS?</h3>
    <form @submit.prevent>
      <Form
        :answer="`Drošs protokols, ko izmanto datu pārsūtīšanai starp tīmekļa pārlūkprogrammu un tīmekļa serveri`"
      />
      <Form
        :answer="`Rīks, ko izmanto datu bāzu pārvaldībai`"
      />
      <Form
        :answer="`Programmēšanas valoda, ko izmanto web lapu veidošanai`"
      />
      <Form
        :answer="`API`"
      />
    </form>
    <button type="submit" class="btn btn-primary mt-2">Iesniegt</button>
  </form>
  </div>
</template>

<script setup lang="ts">
/**
 * * Component imports
 */
import Form from '.././Form.vue'
</script>
