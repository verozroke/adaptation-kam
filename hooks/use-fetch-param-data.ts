import type { ParamPageData } from "~/core/types/param-page"
import { paramDataService } from "~/services/param-data.service"


export const useFetchParamData = (tagname: string) => {
  const isLoading = ref(false)
  const data = ref<ParamPageData[]>([])
  const toastStore = useToastStore()

  const fetch = async (onSuccess?: () => void) => {
    try {
      isLoading.value = true
      data.value = paramDataService.getData(tagname)
      isLoading.value = false

      if (onSuccess) {
        onSuccess()
      }

    } catch (error) {
      isLoading.value = false
      toastStore.openSnackbar('Произошла ошибка. Не удалось получить данные', 2000, '#FA126C')
    }
  }

  return {
    isLoading,
    fetch,
    data,
  }
}