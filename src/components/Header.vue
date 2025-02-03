<template>
  <div class="header">
    <el-link
      @click="$router.push('/about')"
      :underline="false"
      style="margin-left: 50px; font-size: 30px"
    >
     about
    </el-link>
    <img
      src="/public/AMII.svg"
      alt="logo"
      @click="$router.push('/')"
      class="img_link"
    />

    <div class="header-right-menu">
      <div>
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
  width: 95%;
  display: flex;
  height: 110px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 8px;
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
.el-link:hover {
  color: black;
  text-decoration: underline black 1px;
}
.img_link:hover {
  cursor: pointer;
}

</style>
