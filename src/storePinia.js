import { defineStore } from "pinia";

/* define estore recibe como parametro un nombre, este es como un ID 
va a ser identificado por las vue dev tools
*/
export const useNotesStore = defineStore("notes", {
	state: () => ({ notes: [], timestamps: [] }),
	getters: {
		getNotes(state) {
			return state.notes;
		},
		getTimestamps(state) {
			return state.timestamps;
		},
		getNoteCount(state) {
			return state.notes.length;
		},
	},
	actions: {
		addNote(newNote) {
			this.notes.push(newNote);
		},
		addTimestamp(newTimeStamp) {
			this.timestamps.push(newTimeStamp);
		},
	},
});