<template>
  <router-view></router-view>
</template>

<script lang="ts">
// import CommonHeader from "@/components/CommonHeader.vue";
// import AsideBar from "@/components/AsideBar.vue";
import { Component, Vue } from "vue-property-decorator";
//
@Component
// @Component({
//   components: {
//     CommonHeader,
//     AsideBar,
//   },
// })
export default class App extends Vue {
  // handleToggle() {
  //   this.isCollapse = !this.isCollapse;
  // }
}
</script>

<style lang="less">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
}

.md-card {
  width: 286px;
}
</style>
