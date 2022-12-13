<template>
  <div class="nav-header">
    <div @click="handleFoldClick">
      <el-icon class="foldIcon" v-if="isFold"><Fold /></el-icon>
      <el-icon class="foldIcon" v-else><Expand /></el-icon>
    </div>
    <div class="content">
      <NavBreadcrumb :breadcrumbs="breadcrumbs" />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import NavBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'

export default defineComponent({
  components: {
    UserInfo,
    NavBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    // 面包屑的数据
    const breadcrumbs: IBreadcrumb[] = []
    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .foldIcon {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>