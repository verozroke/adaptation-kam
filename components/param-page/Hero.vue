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
  height: 400px !important;
}

.hero-overlay {
  background-color: rgba(160, 0, 0, 0.637);
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