<template>
  <div id="app">
    <el-container>
      <el-aside :width="width">
        <AsideBar :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header width="auto">
          <CommonHeader />
        </el-header>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import CommonHeader from "@/components/CommonHeader.vue";
import AsideBar from "@/components/AsideBar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    CommonHeader,
    AsideBar,
  },
})
export default class MainView extends Vue {
  get isCollapse() {
    return this.$store.state.tab.isCollapse;
  }

  get width() {
    return this.isCollapse ? "64px" : "200px";
  }

  // handleToggle() {
  //   this.isCollapse = !this.isCollapse;
  // }
}
</script>

<style lang="less">
#app {
  height: 100vh;
  width: 100%;
}

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
