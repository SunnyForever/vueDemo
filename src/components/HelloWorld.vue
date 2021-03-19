<template>
  <div class="home-backgroud">
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>目录</h2>
    <ul style="max-height: 300px;" v-for="(item, index) in items" :key="item.chapterName">
      <li>
        <el-button type="text" @click="goVueChapter(index)">
          {{ item.chapterName }}
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Vue.js实战应用指南',
      items: [
        {
          chapterName: 'C1 Vue项目简介'
        },
        {
          chapterName: 'C2 数据'
        },
        {
          chapterName: 'C3 表单'
        },
        {
          chapterName: 'C4 组件'
        },
        {
          chapterName: 'C5 指令'
        },
        {
          chapterName: 'C6 路由'
        },
        {
          chapterName: 'C7 混入'
        },
        {
          chapterName: 'C8 基于 Promise 的 HTTP 请求'
        },
        {
          chapterName: 'C9 生命周期'
        },
        {
          chapterName: 'C10 UI框架'
        },
        {
          chapterName: 'C11 UI一致性'
        },
        {
          chapterName: 'C12 Vue Demo'
        }
      ]
    }
  },
  methods: {
    goVueChapter (index) {
      switch (index + 1) {
        case 1:
          // C1 Vue项目简介
          this.$router.push('/C1')
          break
        case 2:
          // C2 数据
          this.$router.push('/C2')
          break
        case 3:
          // C3 表单
          this.$router.push('/C3')
          break
        case 4:
          // C4 组件
          this.$router.push('/C4')
          break
        case 5:
          // C5 指令
          this.$router.push('/C5')
          break
        case 6:
          // C6 路由
          this.$router.push('/C6')
          break
        case 7:
          // C7 混入
          this.$router.push('/C7')
          break
        case 8:
          // C8 基于 Promise 的 HTTP 请求
          this.$router.push('/C8')
          break
        case 9:
          // C9 生命周期
          this.$router.push('/C9')
          break
        case 10:
          // C10 UI框架
          this.$router.push('/C10')
          break
        case 11:
          // C11 UI一致性
          this.$router.push('/C11')
          break
        case 12:
          // C12 Vue Demo
          this.$router.push('/C12')
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  text-align: left;
  margin-top: 10px;
  margin-left: 10%;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home-backgroud {
  /*background-image: url("../../static/image/home.jpg");*/
}
</style>
