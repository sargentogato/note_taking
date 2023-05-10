<template>
  <textarea
    @keyup.enter="monitorEnterKey"
    v-model="input"
    type="text"
    class="border w-full"
    @focus="resize"
    @keyup="resize"
    ref="myTextarea"
  />
</template>

<script>
/* para usarlo con options api se lo usa de esta forma
  hay que crear una computada con mapStores y alli hacer referencia a la tienda 
  se la pueda usar con el nombre que le pusimos uniendo la palabra Store
*/
import { mapStores } from 'pinia'
import { useNotesStore } from '../storePinia.js'
export default {
  name: "Input",
  mounted() {
    this.resize()
  },
  data() {
    return {
      input: "",
    }
  },
  computed: {
    ...mapStores(useNotesStore)
  },
  methods: {
    monitorEnterKey() {
      //código
      this.notesStore.addNote(this.input);
      this.notesStore.addTimestamp(new Date().toLocaleString());
      this.input = ""
    },
    resize() {
      const textarea = this.$refs.myTextarea
      if (!textarea) {
        console.error("Textarea element not found in refs!")
        return
      }
      textarea.style.height = textarea.scrollHeight + 2 + "px"
    },
  },
}
</script>
