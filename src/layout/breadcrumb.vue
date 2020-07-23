<!--面包屑导航，就是个路径-->
<template>
    <div>
        <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>
<script>
export default {
    name: 'breadcrumb',
    data() {
        return {
            currentRole: 'adminDashboard'
        }
    },
    computed: {

    },
    created() {

    }
}
</script>