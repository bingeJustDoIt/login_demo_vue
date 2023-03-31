<template>
  <div class="wrap">
    <div class="title">
      {{ title }}
    </div>
    <div class="summary">
      <div ref="summary">{{ summary }}</div>
      <button @click="readAll">阅读全文</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentItem",
  data() {
    return {
      title: '测试测试测试',
      content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
      summary:''
    }
  },
  beforeMount() {
    this.summary=this.content.substring(0,50)+"..."
  },
  methods:{
    readAll(){
      this.$refs.summary.innerHTML=this.content
    }
  }
}
</script>

<style scoped lang="less">
.wrap {
  margin: 0 auto;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  height: 100px;
  width: 100%;

  .title {
    font-size: 30px;
    font-weight: bold;
    color: #409eff;
  }

  .summary {
    font-size: 18px;
    //overflow: hidden;
    //text-overflow: ellipsis;
    //// 只要超过宽度就换行，不论中文还是英文
    //word-break: break-all;
    ////最多展示两行
    //display: -webkit-box;
    //-webkit-box-orient: vertical;
    //-webkit-line-clamp: 2;
  }
}

.wrap:last-of-type {
  border-bottom: 1px solid black;
}

</style>