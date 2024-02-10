<template>
  <v-list>
    <v-list-item
      @click="goTo('https://www.applecity.kz/')"
      prepend-avatar="https://www.applecity.kz/images/logo.webp"
      title="Apple City Corps."
      subtitle="info@applecity.kz"
    ></v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { goTo } from '@/core/utils'

</script>

<style scoped></style>