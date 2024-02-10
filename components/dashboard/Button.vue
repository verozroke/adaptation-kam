<template>
  <div
    v-for="({ icon, text, url }, i) in items"
    style="text-decoration: none; color: unset"
    @click="() => router.push(url)"
    :key="i"
  >
    <v-list-item
      :value="url"
      :color="colors.lightdarkgreen"
    >
      <template v-slot:prepend>
        <v-icon :icon="icon"></v-icon>
      </template>
      <v-list-item-title v-text="text"></v-list-item-title>
    </v-list-item>
  </div>
</template>

<script setup lang="ts">
import { colors } from '@/core/color/color'

type DashboardButtonType = {
  icon: string
  text: string
  url: string
}

const router = useRouter()

defineProps<{
  items: DashboardButtonType[]
}>()

</script>

<style scoped></style>