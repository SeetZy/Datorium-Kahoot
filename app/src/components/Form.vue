<template>
  <form>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Your name:</label
      >
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="John Doe"
        v-model="name"
      />
    </div>
    <button type="button" class="btn btn-warning" @click="submitForm">
      Submit
    </button>
  </form>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

interface UserData {
  name: string
  date: Date
  results: Number
}

interface ComponentData extends UserData {}

export default defineComponent({
  name: 'Quiz',
  data(): ComponentData {
    return {
      name: '',
      date: new Date(),
    }
  },
  methods: {
    submitForm() {
      const form = { name: this.name, date: this.date }
      axios.post('http://localhost:5000/users', form).then((response) => {
        console.log(response)
      })
    },
  },
})
</script>
