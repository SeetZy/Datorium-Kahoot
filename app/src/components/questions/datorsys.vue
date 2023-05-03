<template>
     <div class="mt-4 mb-4 p-6 border-2 rounded bg-white">
      <h1 class="mb-3">{{ quizTitle }}</h1>
      <form>
        <div v-for="(question, index) in quizQuestions" :key="index">
          <h3 class="mb-3">{{ question.question }}</h3>
          <div v-for="(option, index) in question.options" :key="index">
            <input type="radio" :value="option" v-model="question.selectedOption" />
            <label>{{ option }}</label>
          </div>
        </div> 
        <button type="submit" class="btn btn-primary mt-2" @click.prevent="submitQuiz()">Iesniegt</button>
      </form>
      <p v-if="quizCompleted">You scored {{ userScore }} out of {{ maxScore }}.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
    selectedOption: string;
  }
  
  export default defineComponent({
    name: 'Quiz',
    data() {
      return {
        quizTitle: 'Datorsistēmas',
        quizQuestions: [
          {
            question: 'Ko dara nslookup funkcija?',
            options: ['Pārbauda, vai tīkla savienojums starp diviem datoriem ir iespējams', 
            'Kas palīdz meklēt informāciju par datu bāzes objektiem', 
            'Ļauj noteikt, vai dators ir savienots ar internetu un noskaidrot tā IP adresi', 
            'Ļauj automātiski atlasīt un konfigurēt tīkla savienojumus starp vairākiem datoriem un tīkla elementiem'],
            correctAnswer: 'Ļauj noteikt, vai dators ir savienots ar internetu un noskaidrot tā IP adresi',
            selectedOption: '',
          },
          {
            question: 'Kas ir IP adrese?',
            options: ['Programmatūras veids, ko izmanto datu bāzu pārvaldīšanai', 
            'Unikāls skaitliskais identifikators, kas piešķirts katrai ierīcei tīklā, kas izmanto internetu', 
            'Fiziskā adrese, ko tīkla ierīces izmanto, lai sazinātos savā starpā', 
            'Tīmekļa pārlūkprogrammas veids, ko izmanto, lai piekļūtu internetam'],
            correctAnswer: 'Unikāls skaitliskais identifikators, kas piešķirts katrai ierīcei tīklā, kas izmanto internetu',
            selectedOption: '',
          },
          {
            question: 'Kas ir HTTPS?',
            options: ['Drošs protokols, ko izmanto datu pārsūtīšanai starp tīmekļa pārlūkprogrammu un tīmekļa serveri', 
            'Rīks, ko izmanto datu bāzu pārvaldībai', 
            'Programmēšanas valoda, ko izmanto web lapu veidošanai', 
            'API'],
            correctAnswer: 'Drošs protokols, ko izmanto datu pārsūtīšanai starp tīmekļa pārlūkprogrammu un tīmekļa serveri',
            selectedOption: '',
          },
        ] as Question[],
        quizCompleted: false,
      };
    },
    computed: {
      userScore(): number {
        let score = 0;
        this.quizQuestions.forEach((question) => {
          if (question.selectedOption === question.correctAnswer) {
            score++;
          }
        });
        return score;
      },
      maxScore(): number {
        return this.quizQuestions.length;
      },
    },
    methods: {
      submitQuiz(): void {
        this.quizCompleted = true;
      },
    },
  });
  </script>
  
  
