<template>
  <div class="wrapper">
    <div style="margin: auto;">
      <h1 class="auth">Авторизация</h1>
      <el-input v-model="loginInput" placeholder="Введите логин" />
      <el-input
        v-model="passInput"
        type="password"
        show-password
        placeholder="Введите пароль"
      />
      <button>
        Вход
    </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

const loginInput = ref("");
const passInput = ref("");
</script>

<style>
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
