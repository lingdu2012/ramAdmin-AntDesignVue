<!--登录页面,内容需要自己改的，很多接口操作基本上是异步的-->
<template>
    <div class="loginPanel">
        <a-card title="vue-antdv-admin" style="width:30rem;" >
            <a-form   >
                <a-form-item >
                <a-input ref="userNameInput" v-model="userName" placeholder="用户名">
                    <a-icon slot="prefix" type="user" />
                    <a-tooltip slot="suffix" title="系统登录用户名">
                        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                    </a-tooltip>
                </a-input>
                </a-form-item>
                <a-form-item >
                    <a-input-password ref="userPWDInput" v-model="userPWD" placeholder="密码">
                        <a-icon slot="prefix" type="key" />
                        <a-tooltip slot="suffix" title="系统登录密码">
                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </a-tooltip>
                    </a-input-password>
                </a-form-item>
                 <a-form-item >
                     <a-row>
                         <a-col :span="12" >
                            <a-input ref="userNameInput" v-model="userCode" placeholder="验证码" >
                                <a-icon slot="prefix" type="picture" />
                                <a-tooltip slot="suffix" title="点击可刷新验证码">
                                    <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                                </a-tooltip>
                            </a-input>
                         </a-col>
                         <a-col :span="12" :style="{textAlign: 'center'}">
                              <Imgcode @childFn="changeImgcode"></Imgcode>
                         </a-col>
                     </a-row>
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 24, }" :style="{ textAlign: 'right' }">
                <a-button type="primary" html-type="button" @click="handleLogin">
                    登录
                </a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<script>
import Imgcode from "./Imgcode"
import {login} from "@/api/login"

export default {
    name:"login",
    components:{
        "Imgcode":Imgcode
    },
    data(){
        return {
            userName:"",
            userPWD:"",
            userCode:"",
            identifyCode: ''
        };
    },
    methods:{
        handleLogin(){
          
           // new Promise((resolve, reject) => {
                login({ username: "hi", password: "123" }).then(response => {
                    console.log(response);
                    //resolve()
                }).catch(error => {
                     console.log(error);
                   // reject(error)
                })
            //})
            return false;
        },
        changeImgcode(code){
            this.identifyCode=code;
            console.log("验证码是"+this.identifyCode);
        }
      
    },
    mounted () {

    }
}
</script>
<style>
.loginPanel{
   position:absolute;
   left:0;
   right:0;
   bottom:0;
   top:0;
   display:flex;
   justify-content:center;
   align-items:Center;
   background-color:aliceblue;
}
</style>