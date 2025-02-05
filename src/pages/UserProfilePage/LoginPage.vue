<template>
  <div class="wrapper">
    <div style="margin: auto">
      <h1 class="auth">Авторизация</h1>
      <el-input v-model="loginInput" placeholder="Введите логин" />
      <el-input
        v-model="passInput"
        type="password"
        show-password
        placeholder="Введите пароль"
      />
      <button @click="AuthUser">Вход</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";

const loginInput = ref("");
const passInput = ref("");


function AuthUser() {

  if (loginInput.value && passInput.value === "123") {
    router.push("/user");
  }
}
</script>

<style scoped>
.wrapper {
  width: 30%;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 5%;
  display: flex;
}
.el-input {
  margin-top: 5%;
}
</style>
