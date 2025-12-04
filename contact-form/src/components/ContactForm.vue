<script setup>
import useVuelidate from "@vuelidate/core";
import { email, minLength, required } from "@vuelidate/validators";
import { ref } from "vue";

const form = ref({
  email: "",
  firstname: "",
  lastname: "",
  queryType: 1,
  message: "",
  terms: false,
});

//reglas
const rules = {
  email: { required, email },
  firstname: { required, minLength: minLength(6) },
  lastname: { required },
  message: { required },
};

//vuevalidate

const v$ = useVuelidate(rules, form);

const handleSubmit = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    console.log("ESTOY AQUI");
    return;
  }
  console.log("form.value", form.value);
  alert(JSON.stringify(form.value));
};
</script>

<template>
  <div class="container">
    <form class="form" @submit.prevent="handleSubmit">
      <h2 style="margin-bottom: 30px">Contact Us</h2>

      <div class="uno">
        <v-text-field
          label="First Name*"
          variant="outlined"
          v-model="form.firstname"
        ></v-text-field>
        <v-text-field
          label="Last Name*"
          variant="outlined"
          v-model="form.lastname"
        ></v-text-field>
      </div>

      <!-- Manejo de errores -->
      <span v-if="v$.firstname.$error"> {{ v$.firstname.$invalid }} </span>
      <span v-if="v$.lastname.$error"> El lastname es obligatorio </span>

      <div class="">
        <v-text-field
          label="Email Address *"
          variant="outlined"
          v-model="form.email"
        ></v-text-field>
      </div>

      <span v-if="v$.email.$error"> El email es obligatorio </span>

      <div>
        <p style="margin: 10px 0px">Query Type *</p>
        <v-radio-group class="two-columns" inline v-model="form.queryType">
          <v-radio label="Radio One" :value="1"></v-radio>
          <v-radio label="Radio Two" :value="2"></v-radio>
        </v-radio-group>
      </div>

      <v-textarea
        label="Message *"
        variant="outlined"
        v-model="form.message"
      ></v-textarea>

      <v-checkbox
        label="I consent to being contacted by the team *"
        v-model="form.terms"
      ></v-checkbox>

      <v-btn
        type="submit"
        class="btn"
        cli
        style="width: 100%; background-color: #17725c; color: white"
      >
        Submit
      </v-btn>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  background-color: #fff;
  width: 50%;
  padding: 30px;
  border-radius: 10px;
}
.uno {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.two-columns {
  display: flex !important;
  width: 100%;
  gap: 10px !important;
}

.two-columns .v-selection-control {
  border: 1px solid #899190;
  border-radius: 8px;
  padding: 10px 15px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
