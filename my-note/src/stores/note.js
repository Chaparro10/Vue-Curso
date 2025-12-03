import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("Note", () => {

    const URL_API="https://jsonplaceholder.typicode.com/posts";
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

  const addNote = (title) => {
    const note = {
      id: notes.value.length++,
      title: title,
      marked: false,
    };
    notes.value.push(note);
  };


  const getPost=async()=>{
    try{
 const response= await fetch(URL_API);
    const data = await response.json();
    console.log('data', data)
   return data
    }catch(error){
            console.log('error', error)
    }
   
  }

  return { notes, addNote,getPost };
});
