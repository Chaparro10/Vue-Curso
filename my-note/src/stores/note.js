import { defineStore } from "pinia";
import { ref } from "vue";



export const useNoteStore = defineStore("Note", () => {
  const notes = ref([
    {
      id: "1",
      title: "Ir al doctor",
      marked: false,
    },
    {
      id: "2",
      title: "Ir al doctor 2",
      marked: true,
    },
  ]);

  const addNote = (note) => {
    notes.value.push(note);
  };

  return { notes, addNote };
});
