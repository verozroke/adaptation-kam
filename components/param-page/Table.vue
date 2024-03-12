<template>
  <v-table style="background-color: #f8fafc;">
    <thead>
      <tr>
        <th
          class="text-left"
          style="font-weight: 700;"
        >
          №
        </th>
        <th
          class="text-left"
          style="font-weight: 700;"
        >
          Действие
        </th>
        <th
          class="text-left"
          style="font-weight: 700;"
        >
          Ссылки
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({ title, link: links }, i) in tableData"
        :key="title"
      >
        <td>{{ i + 1 }}</td>
        <td>{{ title }}</td>
        <td>
          <div class="col">
            <template v-for="link in getLinks(links)">
              <v-btn
                v-if="link.text === link.url"
                style="text-transform: none; width: fit-content"
                color="#0066cc"
                variant="text"
                density="compact"
                prepend-icon="mdi-link-variant"
                @click="copy(link.url)"
              >Скопировать ссылку в серверную папку</v-btn>
              <a
                v-else
                :href="link.url"
                target="_blank"
                style="padding: 0 10px"
              >{{ link.text }}</a>
            </template>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script
  setup
  lang="ts"
>
import type { TableRow, TableRowLink } from '~/core/types/tables';
import { colors } from '~/core/color/color'

const toastStore = useToastStore()

const copy = (url: string) => {
  navigator.clipboard.writeText(url);
  toastStore.openSnackbar('Ссылка скопирована в буфер обмена', 2000, '#3c4dff')
}

const getLinks = (links: TableRowLink | TableRowLink[]) => (Array.isArray(links) ? links : [links])

defineProps<{
  tableData: TableRow[]
}>()
</script>

<style scoped>
.col {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>