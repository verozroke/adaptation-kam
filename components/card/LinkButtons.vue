<template>
  <div class="col">
    <template
      v-for="{ url, text } in (Array.isArray(card.link) ? card.link : [card.link])"
      :key="text"
    >
      <v-btn
        v-if="text && text !== 'Ссылка на папку'"
        style="text-transform: none;"
        :color="colors.darkgreen"
        variant="elevated"
        prepend-icon="mdi-link-variant"
        @click="goTo(url)"
      >{{ text }}</v-btn>
      <v-menu v-else-if="text && text === 'Ссылка на папку'">
        <template v-slot:activator="{ props }">
          <v-btn
            style="text-transform: none;"
            v-bind="props"
            :color="colors.darkgreen"
            variant="elevated"
            prepend-icon="mdi-link-variant"
          >{{ text }}</v-btn>
        </template>
        <v-list>
          <v-list-item @click="copy(url)">
            <v-list-item-title>{{ url }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>

  </div>
</template>

<script
  setup
  lang="ts"
>

import { goTo } from '@/core/utils'
import { colors } from '~/core/color/color';
import type { Card } from '~/core/types/cards';
const toastStore = useToastStore()


const copy = (url: string) => {
  navigator.clipboard.writeText(url);
  toastStore.openSnackbar('Ссылка скопирована в буфер обмена', 2000, '#3c4dff')
}

defineProps<{
  card: Card
}>()
</script>

<style scoped></style>