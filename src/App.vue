<template>
  <el-container>
    <el-header>
      <UniformHeader/>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>

  </el-container>
</template>

<script>
import UniformHeader from "@/components/UniformHeader.vue";
import {useGlobalData} from "@/service/globalData";
export default {
  name: 'App',
  components: {
    UniformHeader
  },
  data(){
    return{
      userData: useGlobalData()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
