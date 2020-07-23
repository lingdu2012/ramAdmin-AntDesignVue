<!--主程序入口，没啥好说的-->
<template>
  <a-config-provider :locale="zh_CN">
    <div id="app">
       <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'app',
  data() {
    return {
      zh_CN,
    }
  }
}
</script>
