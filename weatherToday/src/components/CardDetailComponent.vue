<script setup>
import { defineProps } from "vue";
const props = defineProps({
    data: Object,
});

</script>

<template>
    <div class="card">
        <p>{{ props.data.title }}</p>
        <p>{{ props.data.valor }}</p>
    </div>
</template>

<style scoped>
.card {
    background-color: #231e36;
    border-radius: 6px;
    min-width: 200px;
    min-height: 70px;
    padding: 10px 20px 10px;
}
</style>
