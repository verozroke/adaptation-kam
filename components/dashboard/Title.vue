<template>
  <v-list-subheader class="subheader">
    <b
      class="b-bold"
      :style="{ color: colors.red }"
    >
      <slot />
    </b>
  </v-list-subheader>
</template>

<script setup lang="ts">
import { colors } from '@/core/color/color'

</script>

<style scoped>
.subheader {
  margin-bottom: 8px;

}

.subheader b {
  font-size: 14px;
}
</style>