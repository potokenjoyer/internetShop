<template>
  <div class="header">
    <div class="navigation">
      <h1 style="margin-left: 5%">logotip</h1>
      <a @click="$router.push('/')">КАТАЛОГ</a>
      <a @click="$router.push('/about')">О НАС</a>
      <a @click="$router.push('/order')">КОРЗИНА</a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  height: 100%;
  border-bottom: 1px solid  black;
}
.navigation{
display: flex;
width: 40%;
height: 100%;
align-items: center;
justify-content: space-between;
font-size: 18px;
}

</style>
