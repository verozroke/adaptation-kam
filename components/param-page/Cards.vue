<template>
  <div>
    <div class="card-list">
      <LoaderParagraph v-if="isLoading" />
      <LoaderParagraph v-if="isLoading" />
      <LoaderParagraph v-if="isLoading" />
    </div>
    <ul
      class='card-list'
      v-if="(cardsCategory.includes(tagname)) && !isLoading"
    >
      <ParamPageCard
        v-for="card in data"
        :key="card.title"
        :card="(card as Card)"
      />
    </ul>
    <ul v-if="(tableCategory.includes(tagname)) && !isLoading">
      <ParamPageTable :table-data="data" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useFetchParamData } from '@/hooks/use-fetch-param-data'
import { tableCategory, cardsCategory } from '@/core/constants/constants'
import type { Card } from '~/core/types/cards';
const props = defineProps<{
  tagname: string
}>()

const paramData = useFetchParamData(props.tagname)
const { fetch } = paramData
const { data, isLoading } = paramData

onMounted(async () => {
  await fetch()
})


</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 16px;
}
</style>