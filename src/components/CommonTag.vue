<template>
  <div>
    <el-tag
      v-for="(item, index) in tag"
      :key="item.name"
      :closable="item.name !== 'HomeView'"
      class="ml-3"
      :effect="handleEffect(item)"
      size="medium"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      >{{ item.label }}</el-tag
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapMutations, mapState } from "vuex";

@Component({
  computed: mapState({
    tag: (state) => state.tab.tabsList,
  }),
  methods: mapMutations({
    close: "deleteMenu",
    select: "selectMenu",
    update: "updateCur",
  }),
})
export default class CommonTag extends Vue {
  handleEffect(item): "dark" | "plain" {
    return this.$route.name === item.name ? "dark" : "plain";
  }

  changeMenu(item): void {
    this.$router.push({ name: item.name });
  }

  handleClose(item, index) {
    const lastIndex = this.tag.length - 1;
    this.close(item);

    if (item.name !== this.$route.name) return;
    if (index == lastIndex) {
      const moveForward = this.tag[index - 1].name;
      this.$router.push({ name: moveForward });
      this.update(moveForward);
    }
    if (index < lastIndex) {
      this.$router.push({ name: this.tag[index].name });
    }
  }
}
</script>

<style scoped></style>
