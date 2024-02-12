<template>
  <v-parallax
    class="hero"
    src="/hero.jpg"
  >
    <div class="hero-overlay">
      {{ title }}
    </div>
  </v-parallax>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.hero {
  height: 300px !important;
}

.hero-overlay {
  background-color: #14454193;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-weight: 700;
  font-size: 64px;
  text-align: center;
}
</style>