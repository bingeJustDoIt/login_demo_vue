<script>
import {defineComponent} from "vue";
import Main from "@/views/frontEnd/Main.vue";

export default defineComponent({
  components: {Main}
})
</script>
<template>
  <div id="app">
    <Main></Main>
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

  //background-image: url("@/assets/color.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  //color: white;
}

</style>
