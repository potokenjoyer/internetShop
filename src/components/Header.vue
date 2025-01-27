<template>
  <div class="header">
    <div class="navigation">
      <h1 style="margin-left: 5%">logotip</h1>
      <el-link :underline="false"> МЕНЮ </el-link>
      <el-link @click="$router.push('/')" :underline="false"> КАТАЛОГ </el-link>
      <el-link @click="$router.push('/about')" :underline="false">
        О НАС
      </el-link>
    </div>
    <div class="header-right-menu">
      <div>
        <el-link @click="$router.push('/order')" :underline="false">
          <el-icon style="font-size: 30px; margin-right: 2rem">
            <Search />
          </el-icon>
        </el-link>

        <!-- Тут заменить надо на страницу пользователя, пока её не сделал -->
        <el-link @click="$router.push('/user')" :underline="false">
          <el-icon style="font-size: 30px; margin-right: 2rem">
            <User />
          </el-icon>
        </el-link>
      </div>
      <div>
        <el-link @click="$router.push('/order')" :underline="false">
          <el-icon style="font-size: 30px">
            <ShoppingBag />
          </el-icon>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ShoppingBag, User, Search } from "@element-plus/icons-vue";
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
}
.navigation {
  display: flex;
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
}
.header-right-menu {
  display: flex;
  margin-right: 5%;
}
.el-link {
  font-size: 24px;
  font-weight: 300;
  color: black;
}
.el-link:hover {
  color: black;
  text-decoration: underline black 1px;
}
</style>
