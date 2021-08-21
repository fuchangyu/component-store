<template>
  <div class="home">
    <app-header></app-header>
    <app-main></app-main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppMain from '@/components/layout/AppMain.vue'

@Options({
  components: {
    AppHeader,
    AppMain
  }
})
export default class Home extends Vue {
  msg!: string
}
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
}
</style>
