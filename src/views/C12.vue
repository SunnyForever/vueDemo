<template>
  <div id="C12">
    <hr>
    <span>this与this.$el</span>
    <h1 @click="fn()">
      Lorem, ipsum
    </h1>
    <hr>
    <span>背景透明，文字不透明</span>
    <div>
      <div style="width:150px; height:100px;float:left;background-color:#ff0000;">
        <div style="color: white">没有设置透明度</div>
      </div>

      <div style="width:150px;height:100px;float:left;margin-left:10px;background-color:#ff0000;opacity:0.5;">
        <div style="color: white">用opacity设置透明度</div>
      </div>

      <div style="width:150px;height:100px;float:left;margin-left:10px;background-color:rgba(255,0,0,0.5);">
        <div style="color: white">用rgba设置透明度</div>
      </div>

      <div style="width:150px;height:100px;float:left;margin-left:10px;background-color:#ff0000;filter:Alpha(opacity=50);">
        <div style="color: white">IE专属filter设置透明度</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    // this.$el只在mounted中才有效
    console.log('this:', this) // 打印this指向组件的实例。
    console.log('this.$el:', this.$el) // 打印这个vue组件的dom对象
    this.$el.style.color = 'red'
  },
  methods: {
    fn () {
      console.log('test_this.$el:', this.$el) // <div id="root">...</div>
    }
  }
}
</script>
