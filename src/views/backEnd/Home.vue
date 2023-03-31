<template>
  <el-container class="home">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-col >
          <el-menu
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              :router="true"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <location/>
                </el-icon>
                <span>游戏管理</span>
              </template>
              <el-menu-item :index="item.v" v-for="item in menuList.game">{{ item.k }}</el-menu-item>
              <!--                <el-menu-item index="1-3">item three</el-menu-item>-->

            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <setting/>
                </el-icon>
                <span>游戏管理</span>
              </template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>


          </el-menu>
        </el-col>
      </el-aside>
      <el-main class="main">

        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import {ElMessage} from "element-plus";
import {Setting} from "@element-plus/icons-vue";

export default {
  name: "Home",
  components: {Setting},
  data() {
    return {
      search:'',
      activeName: '',
      menuList: {
        "game": [
          {k:"game1",v:"/game/1"},
          {k:"game2",v:"/game/2"},
          {k:"game3",v:"/game/3"},
        ]

        // game1: "/game/1",
        // game2: "/game/2",
        // game3: "/game/3"
      }

    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleOpen(key, keyPath) {
      console.log(`open`, key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(`close`, key, keyPath)
    },

  }, mounted() {
    this.$axios.get('/main/test').then(r => {
      ElMessage({
        message: r.data,
        grouping: true,
        type: 'success',
      })
    })
  }
}
</script>

<style scoped lang="less">
.home {
  border: 1px solid gray;
  height: 100vh;
  //width: 100vw;
  .header {
    background-color: lime;
  }

  .aside {
    //background-color: lightskyblue;
  }

  .main {
    background-color: lightgray;
  }
}

</style>