<script setup>
import { defineProps } from 'vue';
import { useUserStore } from '../stores/user.store';

const props = defineProps({
  message: String,
  count: { type: Number, default: 0 }
})

const userStore = useUserStore();

</script>

<template>
    <header>

        <div class="login-bar">
            <p v-if="userStore.user" class="username"> 
                {{ userStore.user.name}}
            </p>
            <button v-if="!userStore.user" @click="userStore.getUser()">Login</button>
        </div>  

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

<style scoped>
.login-bar{
    width: 100%;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: end;

    .username{
        margin: 0;
        padding-right: 10px;
    }
}</style>