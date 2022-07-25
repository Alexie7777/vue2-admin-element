<template>
  <div>Hi {{ name }}, 这里是User视图</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class UserView extends Vue {
  name = "Alex7777";
}
</script>

<style lang="scss" scoped></style>
