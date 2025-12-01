<script setup>
import { defineEmits} from 'vue';

//const emit=defineEmits(["login","register"]);
const emit=defineEmits(['login']);



import { ref } from 'vue';

const username=ref("Kevin");


const login=()=>{
    emit("login",username.value);
}
</script>
<template>

    <div class="child">
        <h2>
            Este es un componente hijo
        </h2>
        <p>
        Nombre de usuario::{{ username }}
        </p>
        <button @click="login">Login</button>
    </div>
</template>
<style>
.child{
    border: 5px solid black;
}
</style>