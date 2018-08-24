<template>

    <div class="content">
        <image class="bg-img"
               src="https://y.gtimg.cn/music/photo_new/T002R300x300M000000GDz8k03UOaI.jpg?max_age=2592000">
        </image>
        <div class="lg-content">
            <image class="user"
                   src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003msRLW1YWeFr.jpg?max_age=2592000"></image>
            <input class="lg-input" maxlength="6"
                   type="text" placeholder="请输入用户名" v-model="userCode"/>
            <input class="lg-input" maxlength="6"
                   type="password" placeholder="请输入密码" v-model="password"/>
            <wxc-button text="登陆"
                        @wxcButtonClicked="wxcButtonClicked"></wxc-button>
        </div>
    </div>

</template>

<script>
    const modal = weex.requireModule('modal')
    import {WxcButton} from 'weex-ui'

    export default {
        data() {
            return {
                userCode: '',
                password: '',
                data: {},
            }
        },
        components: {WxcButton},
        created() {
        },
        methods: {
            register() {
                console.log(111);
                this.$router.push('/register')
            },
            wxcButtonClicked(e) {
                let body = {
                    userCode: this.userCode,
                    password: this.password
                };
                if (body.userCode === 'admin' && body.password === '123456') {
                    modal.toast({'message': '请求成功', 'duration': 1});
                    weex.requireModule('storage').setItem('loginInfo', JSON.stringify(body), function (e) {
                        console.log(e);
                    })
                    this.$router.push('/home');
                } else {
                    modal.toast({'message': '用户名或密码错误', 'duration': 1});

                }
            },
        },

    }
</script>

<style scoped>
    .content {
        position: relative;
    }

    .bg-img {
        width: 750px;
        height: 1400px;
    }

    .lg-input {
        background-color: #eaffea;
        border-radius: 10px;
        margin-bottom: 30px;
        width: 700px;
        height: 80px;
        padding-left: 20px;
    }

    .lg-content {
        position: absolute;
        top: 300px;
        left: 20px;
    }

    .user {
        width: 150px;
        height: 150px;
        border-radius: 75px;
        margin-left: 280px;
        margin-bottom: 100px;
    }
</style>