<template>
  <div class="flex-col">
    <div class="flex gap-4 justify-around">
      <div>
        <h2 class="text-center">Notes</h2>
        <p v-for="note in notes" :key="note">
          {{ notes.indexOf(note) + 1 }})
          {{ note }}
        </p>
      </div>
      <div>
        <h2 class="text-center">timeStamp</h2>
        <div v-for="timeStamp in timestamps">{{ timeStamp }}</div>
      </div>
    </div>

    <Input />
    <NoteCountComponent />
  </div>
</template>

<script>
import Input from "./components/Input.vue"
import NoteCountComponent from "./components/Note-count-component.vue"

export default {
  name: "App",
  components: { Input, NoteCountComponent },
  computed: {
    notes() {
      return this.$store.getters.getNotes
    },
    timestamps() {
      return this.$store.getters.getTimestamps
    },
  },
}
</script>
