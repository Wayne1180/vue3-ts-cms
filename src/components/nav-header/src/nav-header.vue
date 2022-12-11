<template>
  <div class="nav-header">
    <div @click="handleFoldClick">
      <el-icon class="foldIcon" v-if="isFold"><Fold /></el-icon>
      <el-icon class="foldIcon" v-else><Expand /></el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  .foldIcon {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>