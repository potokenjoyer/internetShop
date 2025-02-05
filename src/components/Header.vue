<template>
  <div class="header">
    <span class="left_side_menu">
      <el-link @click="$router.push('/about')" :underline="false">
        About
      </el-link>
    </span>
<div class="logo_container">
    <img
      src="/public/AMII.svg"
      alt="logo"
      @click="$router.push('/')"
      class="img_link"
    />
  </div>
    <div class="header-right-menu">
      <div class="right_side_menu">
        <el-link :underline="false">
          <el-icon style="font-size: 30px; margin-right: 2rem">
            <Search />
          </el-icon>
        </el-link>
        <el-link @click="$router.push('/login')" :underline="false">
          <el-icon style="font-size: 30px; margin-right: 2rem">
            <User />
          </el-icon>
        </el-link>
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
  width: 95%;
  display: flex;
  height: 110px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(170, 170, 170);
}
.header-right-menu {
  display: flex;
  margin-right: 50px;
}
.el-link {
  font-size: 24px;
  font-weight: 300;
  color: black;
}

.left_side_menu {
  display: flex;
  margin-left: 50px;
  font-size: 30px;
  font-family: IBM Plex Sans;
  font-weight: 300;
  width: 200px;
  justify-content: left;
}
.right_side_menu{
  display: flex;
  margin-right: 50px;
  width: 200px;
  justify-content: right;
}
.logo_container{
  display: flex;

  justify-content: center;
}

.el-link:hover {
  color: black;
  text-decoration: underline black 1px;
}

.img_link:hover {
  cursor: pointer;
}
</style>
