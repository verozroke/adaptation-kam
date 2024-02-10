<template>
  <v-app-bar :elevation="4">
    <v-app-bar-nav-icon @click="headerStore.changeDrawer"></v-app-bar-nav-icon>
    <v-btn
      @click="() => router.push('/')"
      icon
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-app-bar-title><b>{{ pageTitle }}</b></v-app-bar-title>
    <template v-slot:append>
      <v-btn
        @click="goTo('https://www.applecity.kz/')"
        variant="tonal"
        :color="colors.darkgreen"
        style="text-transform: none;"
        prepend-icon="mdi-food-apple"
        append-icon="mdi-chevron-right"
      >
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { colors } from '~/core/color/color';
import { goTo } from '@/core/utils'
import { useParamPageConstants } from '~/hooks/use-param-page-constants';

const headerStore = useHeaderStore()
const router = useRouter()

const { pageTitle } = useParamPageConstants()

</script>

<style scoped></style>