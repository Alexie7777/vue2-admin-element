<template>
  <el-menu
    :default-active="$route.path"
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    router
    class="el-menu-vertical-demo h-screen"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3
      v-show="!isCollapse"
      class="block h-10 text-white text-center p-2 whitespace-nowrap"
    >
      通用后台管理系统
    </h3>

    <el-menu-item
      v-for="item in noChildrens"
      v-bind:index="item.path"
      @click="clickMenu(item)"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu
      v-for="(item, index) in hasChildrens"
      :key="index"
      :index="String(index)"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.path"
          @click="clickMenu(subItem)"
          :index="subItem.path"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          {{ subItem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component
export default class AsideBar extends Vue {
  @Prop() isCollapse!: boolean;
  // menu = [
  // {
  //   path: "/home",
  //   name: "HomeView",
  //   label: "首页",
  //   icon: "s-home",
  //   url: "Home/Home",
  // },
  // {
  //   path: "/mall",
  //   name: "MallView",
  //   label: "商品管理",
  //   icon: "video-play",
  //   url: "MallManage/MallManage",
  // },
  // {
  //   path: "/user",
  //   name: "UserView",
  //   label: "用户管理",
  //   icon: "user",
  //   url: "UserManage/UserManage",
  // },
  // {
  //   label: "其他",
  //   icon: "more",
  //   path: "",
  //   children: [
  //     {
  //       path: "/page1",
  //       name: "Other1View",
  //       label: "页面1",
  //       icon: "setting",
  //       url: "Other/PageOne",
  //     },
  //     {
  //       path: "/page2",
  //       name: "Other2View",
  //       label: "页面2",
  //       icon: "setting",
  //       url: "Other/PageTwo",
  //     },
  //   ],
  // },
  // ];

  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }

  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }

  clickMenu(item) {
    this.$store.commit("selectMenu", item);
  }

  get noChildrens() {
    return this.asyncMenu.filter((item) => !item.children);
  }

  get hasChildrens() {
    return this.asyncMenu.filter((item) => item.children);
  }

  get asyncMenu() {
    return this.$store.state.tab.menu;
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

/* * { */
/*   border: 0; */
/* } */
</style>
