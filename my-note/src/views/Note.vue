<script setup>
import CreateNote from "../components/CreateNote.vue";
import NoteCard from "../components/NoteCard.vue";
import { useNoteStore } from "../stores/note";
import { ref, onMounted } from "vue";

const noteStore = useNoteStore();
let posts = ref([]);
onMounted(async () => {
  posts.value = await noteStore.getPost();
  console.log("posts", posts);
});
</script>
<template>
  <section id="notes-page">
    <h2>Notes</h2>

    <ul class="note-list">
      <li v-for="note in noteStore.notes" :key="note.id">
        <NoteCard :note="note" />
      </li>
      <li>
        <CreateNote />
      </li>
    </ul>

    <h2>Posts</h2>

    <ul class="note-list">
      <li v-for="post in posts" :key="post.id">
        <p>
          {{ post.title }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
#notes-page {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-bottom: 50px;
    text-align: center;
  }
  .note-list {
    background-image: url("/assets/cork.jpg");
    border: 10px solid brown;
    width: 70%;
    min-width: 450px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
