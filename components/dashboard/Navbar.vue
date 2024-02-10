<template>
  <v-list
    v-for="(urls, i) in navUrls"
    density="compact"
    :key="i"
    nav
  >
    <DashboardTitle v-if="!isRailOpen">{{ urls.title }}</DashboardTitle>
    <DashboardButton :items="urls.items" />
    <v-divider></v-divider>
  </v-list>
</template>

<script setup lang="ts">
import { useNavUrls } from '~/hooks/use-nav-urls';

const { navUrls } = useNavUrls()



defineProps<{
  isRailOpen: boolean
}>()

</script>

<style scoped></style>