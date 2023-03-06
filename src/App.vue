<script setup>
import Login from "@/views/Login.vue";
</script>
<template>
  <div id="app">
    <Login/>
<!--    <h2>测试</h2>-->
  </div>
</template>


<style scoped lang="less">
* {
  box-sizing: border-box; /* 设置盒子模型为 border-box */
  margin: 0; /* 清除默认的外边距 */
  padding: 0; /* 清除默认的内边距 */
}

html, body {
  height: 100%; /* 设置高度为 100% */
  width: 100%; /* 设置宽度为 100% */
}

#app {
  background-color: lightskyblue;
  width: 100%; /* 设置宽度为 100% */
  min-height: 100vh; /* 设置最小高度为 100vh */
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
