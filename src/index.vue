
<template>
    <div class="wrapper">
        <!-- 定义路由模板视图 这个是用来加载组件的-->
        <router-view class="template"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .wrapper {
        align-items: center;
        height: 675px;
    }
    .template {
        /*position: absolute;*/
        /*background: #222222;*/
        /*top: 0px;*/
        /*bottom: 0px;*/
        /*left: 0px;*/
        /*right: 0px;*/
    }
</style>
