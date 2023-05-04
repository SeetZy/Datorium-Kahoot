<template>
    <div class="mt-4 mb-4 p-6 border-2 rounded bg-white">
     <h2 class="mb-4">OOP</h2>
     <h3 class="mb-3">Kas ir Polymorphism?</h3>
 
     <form>
       <Form
         :answer="`Mehānisms, kas ļauj jaunai klasei balstīties uz esošu klasi, mantojot visas tās metodes un atribūtus`"
       />
       <Form
         :answer="`Programmēšanas princips, ko izmanto, lai paslēptu klases ieviešanas informāciju no lietotājiem`"
       />
       <Form :answer="`Vairāku objektu izveides process no vienas klases`" />
       <Form
         :answer="`Princips, kā modificēt metodes uzvedību apakšklasē, nemainot tās ieviešanu esošajā klasē`"
       />
     </form>
     <h3 class="mb-3">Kurš no šiem nav OOP princips?</h3>
 
     <form>
       <Form
         :answer="`Polymorphism`"
       />
       <Form
         :answer="`Inheritance`"
       />
       <Form :answer="`Abstraction`" />
       <Form
         :answer="`Iteration`"
       />
     </form>
     <h3 class="mb-3">Kas ir Enkapsulācija?</h3>
 
     <form>
       <Form
         :answer="`Princips, kas ierobežo tiešu piekļuvi objekta atribūtiem un metodēm, un tā vietā nodrošina piekļuvi, izmantojot publiskas metodes`"
       />
       <Form
         :answer="`Princips, kas ļauj jaunai klasei balstīties uz esošu klasi, mantojot visas tās metodes un atribūtus`"
       />
       <Form :answer="`Princips, kas ļauj pret dažādu klašu objektiem izturēties tā, it kā tie būtu vienas klases`" />
       <Form
         :answer="`Princips, kas ļauj apakšklasei ignorēt tās vecāku klases metodes`"
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
 