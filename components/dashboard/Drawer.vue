<script setup lang="ts">

const headerStore = useHeaderStore()
const isRailOpen = ref(false)

</script>

<template>
  <v-navigation-drawer
    expand-on-hover
    v-model:rail="isRailOpen"
    :width="400"
    v-model="headerStore.drawer"
  >
    <DashboardLogo />
    <v-divider></v-divider>
    <DashboardNavbar :is-rail-open="isRailOpen" />
  </v-navigation-drawer>
</template>
