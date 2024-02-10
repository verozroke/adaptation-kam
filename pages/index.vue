<template>
  <div class="home">
    <HomeTitle style="margin-bottom: 20px;">Добро пожаловать в Apple City Corps!</HomeTitle>
    <HomeVideo />
    <HomeTimeline />
  </div>
</template>

<script setup lang="ts">
import { useParamPageConstants } from '@/hooks/use-param-page-constants'
const { pageTitle } = useParamPageConstants()

useHead({
  title: pageTitle
})
</script>

<style scoped>
.home {
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>