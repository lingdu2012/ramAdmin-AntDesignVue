<!--其实这就是个后台欢迎页-->
<template>
  <div class="dashboard-container">
    这是dashboard
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  components: { },
  data() {
    return {
      currentRole: 'adminDashboard',
      userName:""
    }
  },
  computed: {
    
  },
  created() {

  },
  mounted(){
    
  }
}
</script>