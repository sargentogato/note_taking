import { createStore } from "vuex"

const state = {
  notes: [],
  timestamps: [],
}

const actions = {
  // context función nativa de vue. Es un objeto con varias funcines entre ellas commit
  // payload es el objeto con la información del input
  addNote(context, payload) {
    context.commit("ADD_NOTE", payload)
  },
  addTimestamp(context, payload) {
    context.commit("ADD_TIMESTAMP", payload)
  },
}

// No se puede acceder desde fuera, sólo las actions tienen acceso
// a las mutations
const mutations = {
  //state es el estado que es un objeto con toda la información
  // payload es la información del input
  ADD_NOTE(state, payload) {
    let newNote = payload
    state.notes.push(newNote)
  },
  ADD_TIMESTAMP(state, payload) {
    let newTimeStamp = payload
    state.timestamps.push(newTimeStamp)
  },
}

const getters = {
  getNotes(state) {
    return state.notes
  },
  getTimestamps(state) {
    return state.timestamps
  },
  getNoteCount(state) {
    return state.notes.length
  },
}

export default createStore({
  state,
  mutations,
  actions,
  getters,
})
