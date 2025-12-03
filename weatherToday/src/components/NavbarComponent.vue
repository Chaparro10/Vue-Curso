<script setup></script>

<template>
  <div class="nav-content">
    <div class="nav-logo">
      <img src="/images/logo.svg" />
    </div>
    <div class="nav-units">
      <div class="nav-combo">
        <v-combobox
          label="Units"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
          variant="solo-filled"
          bg-color="#231e36"
          class="text-white-combo"
        >
          <template #prepend-inner>
            <img
              src="/images/icon-units.svg"
              alt="logo"
              style="width: 15px; height: 15px"
            />
          </template>
        </v-combobox>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-content {
  display: flex;
  padding: 50px;

  .nav-logo {
    color: white;
    width: 50%;
  }

  .nav-units {
    color: white;
    width: 50%;
    display: flex;
    justify-content: end;

    .nav-combo {
      width: auto;
      min-width: 120px;
    }
  }
}

.text-white-combo {
  color: red !important;
}

.text-white-combo .v-label {
  color: white !important;
}

.text-white-combo .v-list-item-title {
  color: white !important;
}
</style>
