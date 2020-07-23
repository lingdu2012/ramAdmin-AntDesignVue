<!--基础布局：上，左，右-->
<template>
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <navHeader />
      </a-layout-header>
    <a-layout>
    <a-layout-sider width="200" style="background: #fff">
      <slider />
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
    
      <breadcrumb style="margin: 16px 0"/>
     
      <a-layout-content
      :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
      >
        <router-view :key="key" />
      </a-layout-content>
    </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>

import navHeader from "../layout/navHeader.vue"
import slider from "../layout/slider.vue"
import breadcrumb from "../layout/breadcrumb.vue"

export default {
  components:{
    navHeader,
    slider,
    breadcrumb
  },
  data() {
    return {
      collapsed: false,
      
    };
  },
    computed: {
        key() {
            return this.$route.path;
        }
    }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
