<script setup></script>

<template>
  <div class="search-content">
    <h1>How's the sky looking today?</h1>
    <div class="search-input">
      <input placeholder="Search for a place..." />
      <button>Search</button>
    </div>
  </div>
</template>

<style scoped>
.search-content {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  max-width: 500px;
  margin: 0 auto;
}
.search-input{
    display: flex;
    gap: 10px;
  width: 100%;
  padding: 30px 50px;
}
.search-input input {
    width: 90%;
  background-color: #231e36;
    padding: 5px 10px;
  border-radius: 5px;
}
.search-input button{
    background-color:#5533d7;
    padding: 5px 10px;
    border-radius: 5px;

}
</style>
