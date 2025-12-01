<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  message: String,
  count: { type: Number, default: 0 }
})

</script>

<template>
    <header>
        <nav>
            <ul>

                <li> <a href="#">Home</a></li>
                <li> <a href="#">Blog {{ count }}</a></li>
                <li> <a href="#">Contact {{ props.message }}</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>