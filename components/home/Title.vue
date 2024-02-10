<template>
  <div class="subheader">
    <b :style="{ color: colors.darkgreen }">
      <slot />
    </b>
  </div>
</template>

<script setup lang="ts">
import { colors } from '@/core/color/color'

</script>

<style scoped>
.subheader b {
  font-weight: 700;
  font-size: 40px;
  text-align: center !important;
}
</style>