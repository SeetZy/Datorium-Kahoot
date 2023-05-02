<template>
  <div class="p-12">
    <h2 class="mb-4">Datorsistēmas</h2>
    <h3 class="mb-3">Ko dara nslookup funkcija?</h3>
    <form>
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
  </div>
</template>

<script setup lang="ts">
/**
 * * Component imports
 */
import Form from '../../Form.vue'
</script>
