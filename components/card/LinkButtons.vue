<template>
  <div class="col">
    <template v-for="{ url, text } in links" :key="text">
      <v-btn
      v-if="text"
      style="text-transform: none;"
      :color="colors.darkgreen"
      variant="elevated"
      prepend-icon="mdi-link-variant"
      @click="goTo(url)"
    >{{ text }}</v-btn>
    </template>
  </div>
</template>

<script setup lang="ts">

import { goTo } from '@/core/utils'
import { colors } from '~/core/color/color';
import type { CardLink } from '~/core/types/cards';




defineProps<{
  links: CardLink[]
}>()
</script>

<style scoped></style>