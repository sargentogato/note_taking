<template>
  <div class="note-count">
    Note count: <strong>{{ noteCount }}</strong>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useNotesStore } from '../storePinia.js'
export default {
  name: "NoteCountComponent",
  computed: {
    ...mapStores(useNotesStore),
    noteCount() {
      return this.notesStore.getNoteCount
    },
  },
}
</script>
