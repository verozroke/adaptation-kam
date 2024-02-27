<template>
  <div class="col">
    <template
      v-for="{ url, text } in (Array.isArray(card.link) ? card.link : [card.link])"
      :key="text"
    >
      <v-btn
        v-if="text"
        style="text-transform: none;"
        :color="colors.darkgreen"
        variant="elevated"
        prepend-icon="mdi-link-variant"
        @click="card.dialogText ? openBottomSheet() : goTo(url)"
      >{{ text }}</v-btn>

      <v-bottom-sheet v-model="sheet">
        <v-card
          class="text-center"
          height="200"
        >
          <v-card-text>
            <v-btn
              :color="colors.lightdarkgreen"
              variant="text"
              @click="sheet = !sheet"
            >
              Закрыть
            </v-btn>
            <br>
            <br>
            <div>
              {{ card.dialogText }} <br>
              <span>Ссылка на папку: <b>{{ url }}</b></span>
            </div>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
    </template>

  </div>
</template>

<script setup lang="ts">

import { goTo } from '@/core/utils'
import { colors } from '~/core/color/color';
import type { Card } from '~/core/types/cards';

const sheet = ref(false)

const openBottomSheet = () => {
  sheet.value = true
}


defineProps<{
  card: Card
}>()
</script>

<style scoped></style>