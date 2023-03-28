<script setup></script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<style scoped lang="less">


#app {
  //background-color: lightskyblue;
  width: 100%; /* 设置宽度为 100% */
  min-height: 100vh; /* 设置最小高度为 100vh */
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("@/assets/color.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
