import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('HeaderStore', () => {
  const drawer = ref(false)
  const expandOnHover = ref(true)

  const pinDrawer = () => {
    expandOnHover.value = !expandOnHover.value
  }
  const changeDrawer = () => {
    drawer.value = !drawer.value
  }
  return {
    drawer,
    changeDrawer,
    expandOnHover,
    pinDrawer
  }
})