<script setup lang="ts">

const headerStore = useHeaderStore()
const isRailOpen = ref(false)

</script>

<template>
  <v-navigation-drawer
    :expand-on-hover="headerStore.expandOnHover"
    v-model:rail="isRailOpen"
    :width="400"
    v-model="headerStore.drawer"
  >
    <v-list-item v-if="!isRailOpen">
      <v-row class="row">
        <DashboardLogo class="flex-1" />
        <DashboardPinButton />
      </v-row>
    </v-list-item>
    <DashboardLogo v-if="isRailOpen" />
    <v-divider></v-divider>
    <DashboardNavbar :is-rail-open="isRailOpen" />
  </v-navigation-drawer>
</template>

<style scoped>
.row {
  align-items: center;
  height: 80px;
}

.flex-1 {
  margin-right: 100px;
}
</style>
