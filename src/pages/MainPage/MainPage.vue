<template>
  <div class="content_wrapper" v-for="item in items" :key="item.id">
    <div>
        {{ item.id }}
    </div>
    <div>
        {{ item.title }}
    </div>
    <div>
        {{ item.price }}
    </div>

  </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
  { id: 1, title: "Gucci", price: 1000 },
  { id: 2, title: "ALFI", price: 2000 },
  { id: 3, title: "Atlantis", price: 3000 },
  { id: 4, title: "Apart", price: 4000 },
]);
</script>

<style>
.content_wrapper {
  margin:50px;
}
</style>
