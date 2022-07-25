<template>
  <div id="app">
    <el-container>
      <el-aside width="auto">
        <AsideBar :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader @toggleCollapse="handleToggle" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>


    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import CommonHeader from "@/components/CommonHeader.vue"
import AsideBar from "@/components/AsideBar.vue"
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    CommonHeader,
    AsideBar,
  },
})
export default class App extends Vue {
  isCollapse = false

  handleToggle() {
    this.isCollapse = !(this.isCollapse)
  }

}
</script>

<style lang="less">
*,
html,
body {
  margin: 0;
  border: 0;
  padding: 0;
}

#app {
  height: 100vh;
}


.el-header {
  background-color: #333;
}

.el-main {
  padding-top: 0;
}
</style>
