<template>
  <div class="param">
    <ParamPageHero :title="(title as string)" />
    <div class="param__container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title: string
}>()
</script>

<style scoped>
.param {
  display: flex;
  flex-direction: column;
  background-color: #f8fafc;
  width: 100%;
}

.param__container {

  max-width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
}
</style>