import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('HeaderStore', () => {
  const drawer = ref<boolean>(false)

  const changeDrawer = () => {
    drawer.value = !drawer.value
  }
  return {
    drawer,
    changeDrawer,
  }
})