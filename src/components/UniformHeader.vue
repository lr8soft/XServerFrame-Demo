<template>
  <div>
    <el-menu
        mode="horizontal"
        active-text-color="#007FFF"
        :ellipsis="false">
      <el-menu-item id="title-name" index="1">
        <router-link to="/">XServerFrame DEMO</router-link>
      </el-menu-item>
      <div class="flex-grow"/>
      <el-menu-item index="2">
        <router-link to="/">首页</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/userinfo" v-if="userData.isLogin">个人空间</router-link>
        <router-link to="/login" v-else>登录</router-link>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
import {useGlobalData} from "@/service/globalData";
export default {
  name: "UniformHeader",
  data() {
    return {
      userData: useGlobalData()
    }
  }
}
</script>

<style scoped>
#title-name{
  font-size: 28px;
  font-weight: bold;
}

.flex-grow {
  flex-grow: 1;
}
a{
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>