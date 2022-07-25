<template>
  <div>
    Hi {{name}}, 这里是Home视图
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
// import AsideBar from "@/components/AsideBar.vue";

// @Component({
//   components: {
//     AsideBar,
//   },
// })
export default class HomeView extends Vue {
  name = "Alex7777";
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}

.el-main {
  padding-top: 0;
}
</style>
