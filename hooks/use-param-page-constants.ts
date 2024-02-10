import { PAGE_TITLE_MAP } from '@/core/constants/constants'


export const useParamPageConstants = () => {
  const route = useRoute()
  const tagname = computed(() => route.path)

  const pageTitle = computed(() => PAGE_TITLE_MAP[route.path as keyof typeof PAGE_TITLE_MAP])

  return {
    tagname,
    pageTitle
  }
}