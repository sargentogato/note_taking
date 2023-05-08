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
  methods: {
    monitorEnterKey() {
      //código
      this.$store.dispatch("addNote", this.input)
      this.$store.dispatch("addTimestamp", new Date().toLocaleString())

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
