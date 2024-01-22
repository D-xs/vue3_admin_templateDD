<template>
  <h2>我是App组件</h2>
  <div class="com"></div>
</template>

<script lang="ts" setup name="App">
let fun = () => {
  console.log('ss')
}
fun()
</script>

<style scoped lang="scss">
.com {
  background-color: skyblue;
  width: 200px;
  height: 200px;
  border-radius: 10px;
}
</style>
