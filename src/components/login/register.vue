<template>
    <div class="login-bg">
        <div class="go-back" @click="$router.go(-1)">
            <i class="iconfont icon-fanhui"></i>
            <text style="color: #55a532;margin-top: 20px;margin-left: 20px">返回</text>
        </div>
        <div class="background">
            <image  style="width:100%;height:100%;" src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003bSL0v4bpKAx.jpg?max_age=2592000"></image>
        </div>
        <div class="main-pic">
            <a href="javascript:;" class="main-icon">
                <image src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003bSL0v4bpKAx.jpg?max_age=2592000" class="img" style="border-radius:50%;"></image>
            </a>
        </div>
        <div class="logo-info">
            <div class="user-name">
                <!--<label class="label">Name</label>-->
                <text class="control has-icon has-icon-right">
                    <input name="userName" v-model="userName"
                           v-validate="'required|min:3|max:9'"
                           :class="{'input': true, 'is-danger': errors.has('userName') }" type="text"
                           placeholder="请输入昵称">
                    <text v-show="errors.has('userName')" class="fa fa-warning"></text>
                    <text v-show="errors.has('userName')" class="help is-danger">{{ errors.first('userName') }}</text>
                </text>
            </div>
            <div class="user-name">
                <input type="text" name="userCode"
                       v-validate="'required|min:3|max:9|alpha_dash'"
                       :class="{'input': true, 'is-danger': errors.has('userCode') }"
                       placeholder="请输入账号" v-model="userCode"/>
                <text v-show="errors.has('userCode')" class="fa fa-warning"></text>
                <text v-show="errors.has('userCode')" class="help is-danger">{{ errors.first('userCode') }}</text>
            </div>
            <div class="user-name">
                <input type="password" name="password"
                       v-validate="'required|min:3|max:9'"
                       :class="{'input': true, 'is-danger': errors.has('password') }"
                       placeholder="请输入密码" v-model="password"/>
                <text v-show="errors.has('password')" class="fa fa-warning"></text>
                <text v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</text>
            </div>
            <div class="user-name">
                <input type="password" name="confirmPassword"
                       v-validate="'required|min:3|max:9|confirmed:password'"
                       :class="{'input': true, 'is-danger': errors.has('confirmPassword') }"
                       placeholder="请确认密码" v-model="confirmPassword"/>
                <text v-show="errors.has('confirmPassword')" class="fa fa-warning"></text>
                <span v-show="errors.has('confirmPassword')" class="help is-danger">{{ errors.first('confirmPassword') }}</span>
            </div>
            <div class="user-name">
                <div class="btn" @click="register">注&nbsp;&nbsp;册</div>
            </div>
        </div>
    </div>
</template>

<script>
    const modal = weex.requireModule('modal')

    export default {
        name: "register",
        data() {
            return {
                userName: '',
                userCode: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            register() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let body = {
                            userName: this.userName,
                            userCode: this.userCode,
                            password: this.password,
                        };
                        this.$userService.register(body).then(res => {
                            this.$router.push('login')
                        }, error => {
                            console.log(error.msg)
                        })
                        // let user = JSON.parse(localStorage.getItem('user'))||[];
                        // let index = user.findIndex(item=>item.userCode === body.userCode);
                        // if(index===-1){
                        //     user.push(body);
                        //     localStorage.setItem('user',JSON.stringify(user));
                        //     Toast('注册成功')
                        // }else {
                        //     Toast('该用户已经被注册')
                        // }
                    }else {
                        modal.toast({ 'message': '请正确填完信息', 'duration': 1 });
                    }
                });

            }
        }

    }
</script>

<style scoped rel="stylesheet/css" type="text/css" lang="css">
    .go-back {
        position: absolute;
        top: 0;
        left: 6px;
        z-index: 60;

        /*i {*/
            /*font-size: 26px !important;*/
            /*display: block;*/
            /*padding: px2rem(10px);*/
            /*color: #ffcd32;*/
        /*}*/

    }
    .login-bg {
        height: 100%;
        /*background: url("https://y.gtimg.cn/music/photo_new/T002R300x300M000003bSL0v4bpKAx.jpg?max_age=2592000") no-repeat;*/
        background-size: 100% 100%;
        margin-top: 0px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 88;
    }

    .img {
        width: 100%;
        display: inline-block;
        height: 100%;
    }

    .logo-header {
        width: 100%;
        padding: .5rem .5rem 0rem;
        background-color: #fff;
        box-sizing: border-box
    }

    .logo-img {
        width: 100%;
    }

    .main-pic {
        width: 100%;
        padding: 1.5rem .3rem 0rem;
        text-align: center;
        align-items: center;
        box-sizing: border-box
    }

    .main-pic .main-icon {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
    }

    .logo-info {
        width: 100%;
        padding: 0rem .5rem;
        box-sizing: border-box;
    }

    .user-name {
        width: 100%;
        text-align: center;
        padding: .3rem 0rem;
        box-sizing: border-box;
        position: relative;
    }

    .user-pic {
        font-size: 20px;
    }

    .user-name input { /* margin-left:.1rem; */
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #e1e8e7;
        padding: .08rem; /* border-radius: 5px; */
        display: inline-block; /* width:4rem; */
        height: .8rem; /* max-width: 350px; */
        font-size: .35rem;
        -webkit-appearance: none;
        border-radius: 0px !important;
        text-align: center;
    }

    /* .sub {width: 100%;text-align: center;padding:.1rem 0;box-sizing:border-box;}
    .sub input {border: 1px solid #e1e8e7;padding:.05rem;border-radius: 5px;display: inline-block;width:3rem;max-width: 350px;color:#fff;} */
    .user-name .btn { /* padding:.08rem; */
        /* border-radius: 5px; */
        width: 100%;
        box-sizing: border-box;
        display: inline-block; /* width:4rem; */
        height: .8rem; /* max-width: 350px; */
        font-size: .3rem;
        background-color: #2dab9e;
        color: #fff;
        text-align: center;
        line-height: .8rem;
        margin-top: .4rem;
    }

    .user-name .msg {
        /* margin-left:.1rem; */
        width: 100%;
        padding: .08rem; /* border-radius: 5px; */
        display: inline-block; /* width:4rem; *//* max-width: 350px; */
        font-size: .28rem;
        color: red
    }

    .footer {
        position: fixed;
        bottom: .3rem;
        text-align: center;
        font-size: .24rem;
        width: 100%;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    /* .num {border:1px solid #e1e8e7;}
    .num-center {
      font-size: .35rem;
    } */

    /* 验证码的 */
    .usre-img {
        width: 25%;
        height: .8rem;
    }

    .usre-img img {
        width: 100%;
        height: 100%;
        display: inline-block;
    }

    .wx-img-width {
        width: 50%;
    }

    .wx-img-height {
        line-height: .8rem;
        text-align: center;
        font-size: .3rem;
        background-color: #cdc7c7;
        color: #fff;
    }

    .slider-box {
        width: 100%;
        height: 3px;
        border-radius: 10px;
        background: #e9eaec;
        display: inline-block;
        position: relative;
    }

    .slider-drg {
        position: absolute;
        left: 0px;
        top: 0;
        transform: translateY(-50%);
        width: 10px;
        height: 40px;
        background: red;
        z-index: 10;
    }

    .slider-w {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        z-index: 9;
        border-radius: 10px;
        background: #57a3f3;
        display: inline-block;
    }



    .is-danger {
        color: red;
        font-size: 14px;
    }

    .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /*z-index: -1;*/
        /*opacity: .6;*/
        -webkit-filter: blur(8px);
    }

    .background{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        /*opacity: .6;*/
        -webkit-filter: blur(8px);
    }
    .is-danger {
        color: red;
        font-size: 14px;
    }
</style>