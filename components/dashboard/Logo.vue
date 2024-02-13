<template>
  <v-list>
    <v-list-item
      @click="router.push('/')"
      prepend-avatar="https://www.applecity.kz/images/logo.webp"
      title="Apple City Corps."
      subtitle="info@applecity.kz"
    ></v-list-item>
  </v-list>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped></style>