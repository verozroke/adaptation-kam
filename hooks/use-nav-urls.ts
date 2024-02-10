export const useNavUrls = () => {
  const navUrls = ref({
    meetings: {
      title: 'Встречи / Выезды',
      items: [
        { text: '1 Неделя', icon: 'mdi-numeric-1-circle-outline', url: '/meetings/first-week' },
        { text: '2 Неделя', icon: 'mdi-numeric-2-circle-outline', url: '/meetings/second-week' },
      ]
    },
    tasks: {
      title: 'Задачи',
      items: [
        { text: '1 Неделя', icon: 'mdi-numeric-1-circle-outline', url: '/tasks/first-week' },
        { text: '2 Неделя', icon: 'mdi-numeric-2-circle-outline', url: '/tasks/second-week' },
        { text: '3 Неделя', icon: 'mdi-numeric-3-circle-outline', url: '/tasks/third-week' },
      ]
    },
    informationBlocks: {
      title: 'Информационный блок',
      items: [
        { text: 'Процедуры Компании', icon: 'mdi-account-multiple-outline', url: '/information-blocks/company-procedures' },
        { text: 'Тренинги', icon: 'mdi-school-outline', url: '/information-blocks/trainings' },
      ]
    },
    procedures: {
      title: 'Процедуры в Sales',
      items: [
        { text: "Положения и Правила в МТ", icon: "mdi-file-sign", url: '/information-blocks/procedures/rules' },
        { text: "Процессы в МТ", icon: "mdi-cog-sync-outline", url: '/information-blocks/procedures/processes' },
        { text: "Категорийная экспертиза", icon: "mdi-file-document-check-outline", url: '/information-blocks/procedures/expertise' }
      ]
    }
  })

  return {
    navUrls
  }
}