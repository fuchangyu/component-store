<template>
  <div class="app-layout-header">
    AppHeader
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})

export default class AppHeader extends Vue {
}

</script>

<style scoped lang="less">
.app-layout-header{
  width: 100%;
}
</style>
