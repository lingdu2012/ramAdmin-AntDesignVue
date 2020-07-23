<!--顶部菜单，放logo,用户头像等-->
<template>
    <div>
        <div class="logo" />
        <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px',float:'right'}"
        >
        <a-avatar size="large" icon="user" />
        <a-dropdown style="margin-left:1rem;">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            用户：{{userName}} <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
                <a-menu-item>
                    <a href="javascript:;">个人设置</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">修改密码</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                    <a href="javascript:;">退出系统</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
        </a-menu>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navHeader',
  components: { },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed:{
     ...mapGetters([
      'userName'
    ])  
  },
  created() {
 
  },
  mounted(){
     this.$store.dispatch('user/setName', { userName: "张三" })
     console.log(this.userName);
  }
}
</script>