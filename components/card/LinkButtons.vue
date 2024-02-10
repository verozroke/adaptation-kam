<template>
  <div class="col">
    <v-btn
      v-for="{ url, text } in links"
      :key="text"
      style="text-transform: none;"
      :color="colors.darkgreen"
      variant="elevated"
      prepend-icon="mdi-link-variant"
      @click="goTo(url)"
    >{{ text ? text : 'Перейти по ссылке' }}</v-btn>
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