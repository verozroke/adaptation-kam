<template>
  <ParamPageLayout :title="pageTitle">
    <ParamPageCards :tagname="tagname" />
  </ParamPageLayout>
</template>

<script setup lang="ts">
import { useParamPageConstants } from '@/hooks/use-param-page-constants'
const { pageTitle, tagname } = useParamPageConstants()

useHead({
  title: pageTitle
})
</script>

<style scoped></style>