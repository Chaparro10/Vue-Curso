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

                <li>
                    <router-link class="link" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="link" to="/movies">Movies {{ props.count }}</router-link>
                </li>
                <li> 
                    <router-link class="link" to="/create">Create Movie {{ props.message }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>