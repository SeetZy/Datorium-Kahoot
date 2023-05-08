<template>
  <div class="mt-4 mb-4 p-6 border-2 rounded bg-white">
    <h1 class="mb-3">{{ quizTitle }}:</h1>
    <form>
      <div v-for="(question, index) in quizQuestions" :key="index">
        <h3 class="mb-3">{{ question.question }}</h3>
        <div v-for="(option, index) in question.options" :key="index">
          <input
            type="radio"
            :value="option"
            v-model="question.selectedOption"
          />
          <label class="ml-1">{{ option }}</label>
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary mt-2"
        @click.prevent="submitQuiz()"
      >
        Iesniegt atbildes
      </button>
    </form>
    <p v-if="quizCompleted">
      You scored {{ userScore }} out of {{ maxScore }}.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

interface QuizData {
  // Define the shape of your quiz data object
  // For example:
  question: string
  options: string
  answers: string
}

const data = ref<QuizData[]>([]) // Define the type of your reactive data object

interface Question {
  question: string
  options: string[]
  correctAnswer: string
  selectedOption: string
}

export default defineComponent({
  name: 'Quiz',
  data() {
    return {
      quizTitle: 'Datorsistēmas',
      quizQuestions: [
        {
          question: '',
          options: [],
          correctAnswer: '',
          selectedOption: '',
        },
        {
          question: '',
          options: [],
          correctAnswer: '',
          selectedOption: '',
        },
        {
          question: '',
          options: [],
          correctAnswer: '',
          selectedOption: '',
        },
      ] as Question[],
      quizCompleted: false,
    }
  },
  computed: {
    userScore(): number {
      let score = 0
      this.quizQuestions.forEach((question) => {
        if (question.selectedOption === question.correctAnswer) {
          score++
        }
      })
      return score
    },
    maxScore(): number {
      return this.quizQuestions.length
    },
  },
  methods: {
    fetchAllData() {
      axios
        .get<QuizData[]>('http://localhost:5000/datorsys')
        .then((response) => {
          data.value = response.data

          for (let i = 0; i < this.quizQuestions.length; i++) {
            const quizData = data.value[i]
            console.log(quizData)
            const questionData = quizData.options.split('|')
            // Answer options
            this.quizQuestions[i].options = questionData
            // Correct answer
            this.quizQuestions[i].correctAnswer = quizData.answers
            // The question
            this.quizQuestions[i].question = quizData.question
          }
        })
    },
    submitQuiz(): void {
      this.quizCompleted = true
    },
  },
  beforeMount() {
    this.fetchAllData()
  },
})
</script>
