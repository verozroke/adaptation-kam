<template>
  <v-btn
    variant="text"
    @click="headerStore.pinDrawer"
    icon
  >
    <v-icon>mdi-pin {{ headerStore.expandOnHover ? 'mdi-pin' : 'mdi-pin-off' }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
const headerStore = useHeaderStore()
</script>

<style scoped></style>