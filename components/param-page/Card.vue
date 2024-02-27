<template>
  <v-card
    v-ripple
    :title="title"
    variant="tonal"
    prepend-icon="mdi-dots-grid"
  >
    <v-card-text>{{ subtitle ? subtitle : 'Перейдите по ссылкам и следуйте дальше.' }}</v-card-text>
    <CardLinkButtons :card="card" />
  </v-card>
</template>

<script setup lang="ts">
import type { Card } from '~/core/types/cards';

const props = defineProps<{
  card: Card
}>()


const links = computed(() => Array.isArray(props.card.link) ? props.card.link : [props.card.link])

const { title, subtitle } = props.card

</script>

<style scoped>
.col {
  margin: 0 0 16px 16px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>