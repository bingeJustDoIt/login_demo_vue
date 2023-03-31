<template>
  <el-container class="item">
    <el-header class="header">
      <nav>
        <ul>
          <li>关注</li>
          <li><span>|</span></li>
          <li>推荐</li>
          <li><span>|</span></li>
          <li>主页</li>
          <li><span>|</span></li>
        </ul>
      </nav>
      <input type="text" placeholder="按回车搜索" @blur="blur" @focus="focus" :style="searchStyle"/>
    </el-header>
    <el-main class="main">
      <!--        <router-view></router-view>-->
      <ContentItem is-conflict-check="true"></ContentItem>
      <ContentItem is-conflict-check="true"></ContentItem>
      <ContentItem is-conflict-check="true"></ContentItem>
      <ContentItem is-conflict-check="true"></ContentItem>
      <ContentItem is-conflict-check="true"></ContentItem>
      <ContentItem is-conflict-check="true"></ContentItem>
    </el-main>
  </el-container>
</template>

<script>
import ContentItem from "@/views/frontEnd/ContentItem.vue";

export default {
  name: "Main",
  components: {ContentItem},
  data() {
    return {
      search: '',
      searchStyle: {}
    }
  },
  methods: {
    handleSelect() {

    },
    focus() {
      console.log(`focus`)
      // this.searchStyle='background-color: white; border: 1px solid lightgray;'
      this.searchStyle = {
        'background-color': 'white',
        // border: '1px solid lightgray'
        border: 'none'
      }
    },
    blur() {
      console.log(`blur`)
      this.searchStyle = {
        'background-color': 'lightgray'
      }
    }
  }
}
</script>

<style scoped lang="less">
.item {
  background-color: lightgray;
  width: 100%;
  height: 100vh;

  .main {
    //background-color: white;
    width: 50%;
    border: 1px solid black;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .header {
    //display: flex;
    //justify-content: center;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;

      li {
        margin: 0 20px;
      }
    }

    input[type='text'] {
      border-radius: 20px;
      height: 30px;
      padding-left: 20px;
    }

    input {
      border: none;
      background-color: lightgray;
      width: 300px;
    }
  }
}

</style>