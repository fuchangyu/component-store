<template>
  <div class="app-layout-header">
    <a-menu>
      <a-menu-item key="mail">
        <template #icon>
          <mail-outlined />
        </template>
        Navigation One
      </a-menu-item>
    </a-menu>
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
